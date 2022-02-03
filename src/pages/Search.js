import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavInteresses from "../components/NavInteresses";
import NavFiltrosGlobais from "../components/NavFiltrosGlobais";
import NavFiltrosContextuais from "../components/NavFiltrosContextuais";
import SearchInput from "../components/InputSearch";
import CardGroup from "../components/CardGroup";

import '../styles/search.css';

export function Search() {
    const [status, setStatus] = useState("professores");

    const handleSetProfessores = () => setStatus("professores");
    const handleSetTCCs = () => setStatus("TCCs");

    const user = {
        interesses : [
            'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
        ]
    }

    const pesquisa = "Jogos";

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
            status: "disponível" 
        },
        {
            id: 1,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
            id: 3,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
            id: 4,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
            id: 5,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
        },
        {
            id: 5,
            foto: srcPerfil,
            nome: "Alysson Diniz",
            email: "alysson@virtual.ufc.br",
            areas: [
                'Realidade Virtual', 'Game design', 'Desenvolvimento de jogos', 'Jogos'
            ],
            status: "disponível" 
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
        {
            id: 2,
            title: "Análise de metodologias ágeis como recursos para desenvolvimento de jogos digitais de pequeno escopo",
            aluno: "Henrique Artur Cordeiro Gomes",
            professor: "Henrique Barbosa Silva", 
            areas: [
                'Metodologias ágeis', 'Jogos', 'Scrum'
            ] 
        },
        {
            id: 3,
            title: "Análise de metodologias ágeis como recursos para desenvolvimento de jogos digitais de pequeno escopo",
            aluno: "Henrique Artur Cordeiro Gomes",
            professor: "Henrique Barbosa Silva", 
            areas: [
                'Metodologias ágeis', 'Jogos', 'Scrum'
            ] 
        }
    ]

    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="search">
                <NavInteresses data={user.interesses}/>

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
                            list={status == "TCCs" ? listTCCs : listProfessores}
                        />
                    </div>
                </div>
            </section>
        </div>
    )      
}