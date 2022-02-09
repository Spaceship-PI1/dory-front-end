import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import NavBarGlobal from "../components/NavBarGlobal";
import NavPerfil from "../components/NavPerfil";
import CardTCC from "../components/CardTCC";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import api from '../services/api';
 
import '../styles/visualizar.css';

export function VisualizarProfessor() {
    const { idProfessor } = useParams();
    const [prof, setProf] = useState([]);
    
    const semestreAtual = "2021.2";

    async function getProfessorId() {
        const response = await api.get(`/teacher_id?id=${idProfessor}`);
        setProf(response.data.teacher);
    }
    
    useEffect(() => {
        getProfessorId(); 
    }, []);

    return (
        <div>
            <NavBarGlobal login={true} />

            <NavPerfil user={prof[0]} />

            <section className="container" id="visualizar">
                <div className="content-perfil" id="div-perfil">
                    <div className="infos-perfil professor">
                        <div className="div-status">
                            <p className="label-status">{prof[0]?.availability}</p>
                        </div>

                        <div className="perfil">
                            {prof[0]?.photo ? 
                                <>
                                    <div className="foto-perfil">
                                        <img 
                                            className="foto" 
                                            src={prof[0]?.photo} 
                                            alt={prof[0]?.firstName} />
                                    </div> 
                                    <div className="status" id={prof[0]?.availability.toLowerCase()} >
                                        <div className="bolinha" id={prof[0]?.availability.toLowerCase()} ></div>
                                    </div>
                                </>
                                :
                                <>
                                    <AccountCircleIcon sx={{ fontSize: 134, color: '#506DD8' }} /> 

                                    <div className="status no-photo" id={prof[0]?.availability.toLowerCase()} >
                                        <div className="bolinha" id={prof[0]?.availability.toLowerCase()} ></div>
                                    </div>
                                </>
                            }
                        </div>

                        <div className="dados-perfil">
                            <h4>{prof[0]?.firstName + " " + prof[0]?.lastName}</h4>
                            <p className="email">{prof[0]?.email}</p>
                        </div>

                        {/* <button className="yellow solicitar" type="submit">
                            Solicitar Orientação
                        </button> */}
                    </div> 
                </div>

                <div className="content-perfil" id="infos-professor">
                    <div className="card-info">
                        <div className="header-info">
                            <h2>Sobre minha Orientação</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{prof[0]?.aboutOrientation}</p>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Preferência de modalidade</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            { prof[0]?.preferredModalities?.map((modalidade, index) => <li key={index}>{modalidade}</li>)}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Áreas de pesquisa</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            { prof[0]?.researchAreas?.map((area, index) => <li key={index}>{area}</li>)}
                        </ul>
                    </div>

                    {/* <div className="card-info">
                        <div className="header-info">
                            <h2>TCCs já orientados</h2>
                            <hr />
                        </div>

                        <ul className="card-TCC">
                            {prof[0]?.TCCs?.map(TCC => (
                                <CardTCC 
                                    idTCC={TCC.id}
                                    title={TCC.title}
                                    aluno={TCC.aluno}
                                    professor={TCC.professor}
                                    areas={TCC.areas}
                                />
                            ))}
                        </ul>
                    </div> */}

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Projetos de pesquisa</h2>
                            <hr />
                        </div>
                        
                        <ul className="cards-pesquisa">
                            {prof[0]?.researchProjects?.map((projeto, index) => 
                                <li key={index} className="card-pesquisa">
                                    <p>{projeto.nome}</p>
                                    <label className="periodo">{projeto.dataInicio} - {projeto.dataFim}</label>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Projetos de extensão</h2>
                            <hr />
                        </div>
                        
                        <ul className="cards-pesquisa">
                            {prof[0]?.extensionProjects?.map((projeto, index) => 
                                <li key={index} className="card-pesquisa">
                                    <p>{projeto.nome}</p>
                                    <label className="periodo">{projeto.dataInicio} - {projeto.dataFim}</label>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Disciplinas</h2>
                            <hr />
                        </div>
                        
                        <ul className="cards-pesquisa last">
                            <li className="card-pesquisa disciplinas">
                                <label className="label-disciplinas">Lecionando</label>
                                <ul className="interesses-list-tags disciplinas">
                                    {prof[0]?.subjects?.map((disciplina, index) => 
                                        <li key={index} id={disciplina.semestre === semestreAtual ? null : "null"} >
                                            {disciplina.nome}
                                        </li>
                                    )}
                                </ul> 
                            </li>

                            <li className="card-pesquisa disciplinas">
                                <label className="label-disciplinas">Já lecionadas</label>
                                <ul className="interesses-list-tags disciplinas">
                                    {prof[0]?.subjects?.map((disciplina, index) => 
                                        <li key={index} id={disciplina.semestre === semestreAtual ? "null" : null} >
                                            {disciplina.nome}
                                        </li>
                                    )}
                                </ul> 
                            </li> 
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )      
}