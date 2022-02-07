import React, { useState } from "react";
import NavFiltrosGlobais from "../NavFiltrosGlobais";
import CardGroup from "../CardGroup";

import './style.css';

export default function Carrossel({ index, interesse }) {
    const [status, setStatus] = useState("professores");

    const handleSetProfessores = () => setStatus("professores");
    const handleSetTCCs = () => setStatus("TCCs");

    const srcPerfil = "https://images.pexels.com/photos/7163364/pexels-photo-7163364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const listProfessores = [
        {
            id: 0,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "Disponível" 
        },
        {
            id: 1,
            foto: "",
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "indisponível" 
        },
        {
            id: 2,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "Análise" 
        }
    ]

    const listTCCs = [
        {
            id: 0,
            title: "Desenvolvimento de uma personagem para um projeto de jogo digital de terror utilizando a abordagem The Silver Way",
            aluno: "Douglas Alves da Silva",
            professor: "Liandro Roger", 
            areas: [
                'Design de personagens', 'Cartum', 'Jogos de Terror'
            ]
        },
        {
            id: 1,
            title: "Análise de metodologias ágeis como recursos para desenvolvimento de jogos digitais de pequeno escopo",
            aluno: "Henrique Artur Cordeiro Gomes",
            professor: "Henrique Barbosa Silva", 
            areas: [
                'Metodologias ágeis', 'Jogos', 'Scrum'
            ] 
        },
    ]

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
            list={status == "TCCs" ? listTCCs : listProfessores}
        />
        </div>
    )
}