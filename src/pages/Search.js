import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import DropdownExampleClearable from "../components/Example";

import NavBarGlobal from "../components/NavBarGlobal";
import ButtonNav from "../components/ButtonNav";
import MenuProfessores from "../components/MenuProfessores";
import MenuTCCs from "../components/MenuTCCs";
import FiltroContextual from "../components/FiltroContextual";

import search from '../assets/icons/search-gray.svg';
 
import '../styles/search.css';

export function Search() {
    const [professores, setProfessores] = useState(true);
    const [TCCs, setTCCs] = useState(false);

    const srcPerfil = "https://images.pexels.com/photos/7163364/pexels-photo-7163364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const pesquisa = "Jogos";

    const interesses = [
        'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
    ]

    const handleSetProfessores = () => {
        setProfessores(true); 
        setTCCs(false);
    }
    
    const handleSetTCCs = () => {
        setTCCs(true);
        setProfessores(false);
    } 

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
            <NavBarGlobal />

            <section className="container" id="search">
                <div className="interesses-container">
                    <p>Seus interesses</p>
                    <ul className="interesses-list-tags">
                        { interesses.map((inter, index) => <li key={index}>{inter}</li>)}
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
                    <div className="item-resultado">
                        <h1>{pesquisa}</h1>

                        <div className="nav-filtros">
                            <div className="filtros"> 
                                <ButtonNav 
                                    setStatus={handleSetProfessores}
                                    name="Professores"
                                    id={professores ? "selected" : null}
                                />

                                <ButtonNav 
                                    setStatus={handleSetTCCs}
                                    name="TCCs"
                                    id={TCCs ? "selected" : null}
                                />
                            </div>
                            
                            <hr className="line" /> 

                            {professores? 
                                <FiltroContextual 
                                    filtro1="Disponibilidade"
                                    filtro2="Modalidade"
                                />
                            :
                                <FiltroContextual 
                                    filtro1="Semestre"
                                    filtro2="Modalidade"
                                />
                            }

                            <DropdownExampleClearable />

                        </div>

                        <MenuProfessores 
                            status={professores}
                            professores={listProfessores}
                        />

                        <MenuTCCs 
                            status={TCCs}
                            TCCs={listTCCs}
                        />
                    </div>
                </div>
            </section>
        </div>
    )      
}