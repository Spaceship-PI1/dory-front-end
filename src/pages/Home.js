import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import ButtonNav from "../components/ButtonNav";
import CardGroup from "../components/CardGroup";
import NavFiltrosContextuais from "../components/NavFiltrosContextuais";

import search from '../assets/icons/search-gray.svg';
 
import '../styles/home.css';

export function Home() {
    const [status, setStatus] = useState("professores");

    const handleSetProfessores = () => setStatus("professores");
    const handleSetTCCs = () => setStatus("TCCs");

    const user = {
        interesses : [
            'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
        ]
    }

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
            id: 2,
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
    ]

    return (
        <div>
            <NavBarGlobal />

            <section className="container" id="home">
                <div className="interesses-container">
                    <p>Seus interesses</p>
                    <ul className="interesses-list-tags">
                        { user.interesses.map((inter, index) => <li key={index}>{inter}</li>)}
                    </ul>
                </div>

                <div className="input-container">
                    <button>
                        <img className="search-icon" src={search} alt="Ícone de pesquisa" />
                    </button>
                    
                    <input 
                        className="input-search"
                        name="search"
                        type="text"
                        placeholder="Pesquise sobre um orientador..."
                    />
                </div>

                <div className="resultados-container">
                    {user.interesses.map((inter, index) => (
                        <div key={index} className="item-resultado">
                            <h1>{inter}</h1>

                            <div className="nav-filtros">
                                <div className="filtros"> 
                                    <ButtonNav 
                                        setStatus={handleSetProfessores}
                                        name="Professores"
                                        id={status == "professores" ? "selected" : null}
                                    />

                                    <ButtonNav 
                                        setStatus={handleSetTCCs}
                                        name="TCCs"
                                        id={status == "TCCs" ? "selected" : null}
                                    />
                                </div>
                                
                                <hr className="line" /> 

                                <NavFiltrosContextuais status={status} />
                            </div>

                            <CardGroup 
                            status={status}
                            list={status == "TCCs" ? listTCCs : listProfessores}
                        />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )      
}