import React, { useState } from "react";
import Box from '@mui/material/Box';

import NavBarGlobal from "../components/NavBarGlobal";
import ButtonNav from "../components/ButtonNav";
import MenuProfessores from "../components/MenuProfessores";
import MenuTCCs from "../components/MenuTCCs";
import Filtro from "../components/Filtro";

import search from '../assets/icons/search-gray.svg';
 
import '../styles/search.css';

export function Search() {
    const [professores, setProfessores] = useState(true);
    const [TCCs, setTCCs] = useState(false);

    const handleSetProfessores = () => {
        setProfessores(true); 
        setTCCs(false);
    }
    
    const handleSetTCCs = () => {
        setTCCs(true);
        setProfessores(false);
    } 

    const [disponibilidade, setDisponibilidade] = useState('');
    const [preferenciaModalidade, setPreferenciaModalidade] = useState('');
    const [semestre, setSemestre] = useState('');
    const [modalidade, setModalidade] = useState('');

    const handleChangeDisponibilidade = (e) => setDisponibilidade(e.target.value); 
    const handleChangePreferenciaModalidade = (e) => setPreferenciaModalidade(e.target.value); 
    const handleChangeSemestre = (e) => setSemestre(e.target.value); 
    const handleChangeModalidade = (e) => setModalidade(e.target.value); 


    const srcPerfil = "https://images.pexels.com/photos/7163364/pexels-photo-7163364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const pesquisa = "Jogos";

    const interesses = [
        'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho' 
    ]

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
                        <div className="label-resultados">
                            <p>Resultados para</p>
                            <h1 className="label-pesquisa">{pesquisa}</h1>
                        </div>

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

                            {professores ?
                                <Box sx={{ 
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginTop: '16px',
                                    marginBottom: '16px'
                                }}>
                                    <Filtro 
                                        nome="Disponibilidade"
                                        idFiltro="status"
                                        value={disponibilidade}
                                        onChange={handleChangeDisponibilidade}
                                        itens={[
                                            {
                                                nome: "Disponível",
                                                value: 1
                                            },
                                            {
                                                nome: "Indisponível",
                                                value: 2
                                            },
                                            {
                                                nome: "Em análise",
                                                value: 3
                                            }
                                        ]}
                                    />

                                    <Filtro 
                                        nome="Modalidade"
                                        idFiltro="modalidade"
                                        value={preferenciaModalidade}
                                        onChange={handleChangePreferenciaModalidade}
                                        itens={[
                                            {
                                                nome: "Artigo científico",
                                                value: 1
                                            },
                                            {
                                                nome: "Relatório Técnico",
                                                value: 2
                                            },
                                            {
                                                nome: "Monografia",
                                                value: 3
                                            }
                                        ]}
                                    />
                                </Box>
                            :
                                <Box sx={{ 
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    marginTop: '16px',
                                    marginBottom: '16px'
                                }}>
                                    <Filtro 
                                        nome="Semestre"
                                        idFiltro="semestre"
                                        value={semestre}
                                        onChange={handleChangeSemestre}
                                        itens={[
                                            {
                                                nome: "2021.2",
                                                value: 20212
                                            },
                                            {
                                                nome: "2021.1",
                                                value: 20211
                                            },
                                            {
                                                nome: "2020.2",
                                                value: 20202
                                            }
                                        ]}
                                    />

                                    <Filtro 
                                        nome="Modalidade"
                                        idFiltro="modalidade"
                                        value={modalidade}
                                        onChange={handleChangeModalidade}
                                        itens={[
                                            {
                                                nome: "Artigo científico",
                                                value: 1
                                            },
                                            {
                                                nome: "Relatório Técnico",
                                                value: 2
                                            },
                                            {
                                                nome: "Monografia",
                                                value: 3
                                            }
                                        ]}
                                    />
                                </Box>
                            }
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