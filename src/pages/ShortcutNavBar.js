import React, { useContext, useEffect, useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavInteresses from "../components/NavInteresses";
import NavFiltrosContextuais from "../components/NavFiltrosContextuais";
import SearchInput from "../components/InputSearch";
import CardGroup from "../components/CardGroup";

import { AuthContext } from '../contexts/AuthContext';
import api from '../services/api';
 
import '../styles/search.css';

export function ShortcutNavBar({ status }) {
    const { user } = useContext(AuthContext);
    const [tccsAll, setTccsAll] = useState([]);
    const [profsAll, setProfsAll] = useState([]);

    async function getProfessoresAll() {
        const response = await api.get('/teachers_all');
        setProfsAll(response.data.teachers);
    }
    
    async function getTccsAll() {
        const response = await api.get('/tcc_all');
        setTccsAll(response.data.tccs);
    }

    useEffect(() => {
        getProfessoresAll();
        getTccsAll();
    }, []);

    console.log(profsAll, tccsAll);

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
                            <h1 className="label-pesquisa">{status}</h1>
                        </div>

                        <NavFiltrosContextuais status={status} />

                        <CardGroup 
                            status={status}
                            list={status == "TCCs" ? tccsAll : profsAll }
                        />
                    </div>
                </div>
            </section>
        </div>
    )      
}