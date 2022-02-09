import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { parseCookies } from 'nookies';

import NavBarGlobal from "../components/NavBarGlobal";
import NavInteresses from "../components/NavInteresses";
import NavFiltrosGlobais from "../components/NavFiltrosGlobais";
import NavFiltrosContextuais from "../components/NavFiltrosContextuais";
import SearchInput from "../components/InputSearch";
import CardGroup from "../components/CardGroup";

import { AuthContext } from '../contexts/AuthContext';

import api from '../services/api';

import '../styles/search.css';

export function Search() {
    const { user, isAuthenticated } = useContext(AuthContext);
    const { 'dory.token': token } = parseCookies();

    const [resultProfs, setResultProfs] = useState([]);
    const [resultTccs, setResultTccs] = useState([]);

    const [searchParams] = useSearchParams();
    const pesquisa = searchParams.get('q');

    const [status, setStatus] = useState("professores");

    const handleSetProfessores = () => setStatus("professores");
    const handleSetTCCs = () => setStatus("TCCs");

    useEffect(() => {
      if (!token) {
        window.location.href = '/';
      }
    }, []);
    
    useEffect(() => {
      if (!token) {
        window.location.href = '/';
      }
    }, [token, isAuthenticated]);

    async function getResultSearchProfs() {
        const response = await api.get(`/teacher_search?q=${pesquisa}`);
        setResultProfs(response.data.searchResult);
    }

    async function getResultSearchTccs() {
        const response = await api.get(`/tcc_search?q=${pesquisa}`);
        setResultTccs(response.data.searchResult);
    }
    
    useEffect(() => {
        getResultSearchProfs();
        getResultSearchTccs();
    }, [pesquisa]);

    console.log("profs", resultProfs);
    console.log("tccs", resultTccs);

    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="search">
                {user?.interests !== null && <NavInteresses data={user?.interests} />}

                <SearchInput />

                <div className="resultados-container">
                    <div className="item-resultado">
                        <div className="label-resultados">
                            <p>Resultados para</p>
                            <h1 className="label-pesquisa">{pesquisa}</h1>
                        </div>

                        <div className="nav-filtros">
                            <NavFiltrosGlobais 
                                status={status}
                                setProfessores={handleSetProfessores}
                                setTCCs={handleSetTCCs}
                            />
                            
                            <hr className="line" /> 

                            <NavFiltrosContextuais status={status} />
                        </div>

                        <CardGroup 
                            status={status}
                            list={status == "TCCs" ? resultTccs : resultProfs }
                        />
                    </div>
                </div>
            </section>
        </div>
    )      
}