import React, { useEffect, useState } from "react";
import NavFiltrosGlobais from "../NavFiltrosGlobais";
import CardGroup from "../CardGroup";

import api from '../../services/api';

import './style.css';

export default function Carrossel({ index, interesse }) {
    const [status, setStatus] = useState("professores");
    
    const [tccs, setTccs] = useState([]);
    const [profs, setProfs] = useState([]);

    const handleSetProfessores = () => setStatus("professores");
    const handleSetTCCs = () => setStatus("TCCs");

    async function getTccsArea() {
        const response = await api.get(`/tcc?interesse=${interesse}`);
        setTccs(response.data.tccs);
      }
    
    async function getProfessoresArea() {
    const response = await api.get(`/teachers?interesse=${interesse}`);
    setProfs(response.data.teachers);
    }

    useEffect(() => {
        getTccsArea();
        getProfessoresArea();
    }, []);

    return (
        <div key={index} className="item-resultado">
            <h1>{interesse}</h1>

            <div className="nav-filtros carrossel">
                <NavFiltrosGlobais 
                    status={status}
                    setProfessores={handleSetProfessores}
                    setTCCs={handleSetTCCs}
                />
    
                <hr className="line" /> 
            </div>

            <CardGroup 
                status={status}
                list={status === "TCCs" ? tccs : profs}
            />  
        </div>
    )
}