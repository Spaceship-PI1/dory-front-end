import React, { useContext, useEffect, useState }  from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavPerfil from "../components/NavPerfil";

import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import api from '../services/api';

import '../styles/visualizar.css';

export function VisualizarMeuPerfil() {
    const [idTCC, setIdTCC] = useState("");
    const [TCC, setTCC] = useState([]);

    const { user, isAuthenticated } = useContext(AuthContext);

    const { 'dory.token': token } = parseCookies();

    const semestreAtual = "2021.2";

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


    async function getTCCId() {
        const response = await api.get(`/tcc_id?id=${idTCC}`);
        setTCC(response.data.tcc);
    }
    
    useEffect(() => {
        getTCCId(); 
    }, []);

    return (
        <div>
            <NavBarGlobal login={true} />
            <NavPerfil user={user} />

            <section className="container" id="visualizar">
                {user?.role == "student" ? 
                    <>
                    <div className="content-perfil aluno" id="div-perfil">
                        <div className="infos-perfil">
                            <div className="perfil">
                                {user?.photo ?
                                    <div className="foto-perfil">
                                        <img 
                                            className="foto" 
                                            src={user?.photo}
                                            alt={user?.firstName} />
                                    </div>
                                :
                                    <AccountCircleIcon sx={{ fontSize: 134, color: '#506DD8' }} /> 
                                }
                            </div>

                            <div className="dados-perfil">
                                <h4>{user?.firstName + " " + user?.lastName}</h4>
                                <p className="email">{user?.email}</p>
                            </div>

                            {/* <button className="yellow solicitar" type="submit">
                                Visualizar Proposta
                            </button> */}
                        </div> 
                    </div>

                    <div className="content-perfil" id="infos-professor">
                        <div className="card-info">
                            <div className="header-info">
                                <h2>Sobre</h2>
                                <hr />
                            </div>
                            {user?.about ? 
                                <p className="textParagraph">{user?.about}</p>
                            :
                                <p className="textParagraph alert">Não possui descrição cadastrada!</p>
                            }
                            
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Meu tema</h2>
                                <hr />
                            </div>
                            {user?.tema ? 
                                <p className="textParagraph">{user?.tema}</p>
                            :
                                <p className="textParagraph alert">Não possui tema cadastrado!</p>
                            }
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Áreas de interesse</h2>
                                <hr />
                            </div>

                            <ul className="interesses-list-tags">
                                {user?.interests ? 
                                    user?.interests?.map((area, index) => <li key={index}>{area}</li>)
                                : 
                                    <p className="textParagraph alert">Não possui interesses cadastrados!</p>
                                }
                            </ul>
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Modalidade escolhida</h2>
                                <hr />
                            </div>
                            {user?.modalidade ? 
                                <p className="textParagraph">{user?.modalidade}</p>
                            : 
                                <p className="textParagraph alert">Não possui a modalidade cadastrada!</p>
                            }
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Status do desenvolvimento do TCC</h2>
                                <hr />
                            </div>
                            {user?.statusTCC ? 
                                <p className="textParagraph">{user?.statusTCC}</p>
                            : 
                                <p className="textParagraph alert">Não possui o status cadastrado!</p>
                            }
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Pretensão de defesa</h2>
                                <hr />
                            </div>
                            {user?.pretensaoDefesa ? 
                                <p className="textParagraph">{user?.pretensaoDefesa}</p>
                            : 
                                <p className="textParagraph alert">Não possui a pretensão de defesa cadastrada!</p>
                            }
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="content-perfil" id="div-perfil">
                        <div className="infos-perfil professor">
                            <div className="div-status">
                                <p className="label-status">{user?.availability}</p>
                            </div>

                            <div className="perfil">
                                {user?.photo ? 
                                    <>
                                        <div className="foto-perfil">
                                            <img 
                                                className="foto" 
                                                src={user?.photo} 
                                                alt={user?.firstName} />
                                        </div> 
                                        <div className="status" id={user?.availability.toLowerCase()} >
                                            <div className="bolinha" id={user?.availability.toLowerCase()} ></div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <AccountCircleIcon sx={{ fontSize: 134, color: '#506DD8' }} /> 

                                        <div className="status no-photo" id={user?.availability.toLowerCase()} >
                                            <div className="bolinha" id={user?.availability.toLowerCase()} ></div>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className="dados-perfil">
                                <h4>{user?.firstName + " " + user?.lastName}</h4>
                                <p className="email">{user?.email}</p>
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
                            {user?.aboutOrientation ? 
                                <p className="textParagraph">{user?.aboutOrientation}</p>
                            :
                                <p className="textParagraph alert">Não possui a descrição sobre a orientação cadastrada!</p>
                            }
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Preferência de modalidade</h2>
                                <hr />
                            </div>
                            
                            {user?.preferredModalities.length > 0 ? 
                                <ul className="interesses-list-tags">
                                    { user?.preferredModalities?.map((modalidade, index) => <li key={index}>{modalidade}</li>)}
                                </ul>
                            :
                                <p className="textParagraph alert">Não possui a preferência de modalidade cadastrada!</p>
                            }
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Áreas de pesquisa</h2>
                                <hr />
                            </div>

                            {user?.researchAreas.length > 0 ? 
                                <ul className="interesses-list-tags">
                                    { user?.researchAreas?.map((area, index) => <li key={index}>{area}</li>)}
                                </ul>
                            :
                                <p className="textParagraph alert">Não possui as áreas de pesquisa cadastradas!</p>
                            }
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

                            {user?.researchProjects.length > 0 ? 
                                <ul className="cards-pesquisa">
                                    {user?.researchProjects?.map((projeto, index) => 
                                        <li key={index} className="card-pesquisa">
                                            <p>{projeto.title}</p>
                                            <label className="periodo">{projeto.inicio} - {projeto.fim}</label>
                                        </li>
                                    )}
                                </ul>
                            :
                                <p className="textParagraph alert">Não possui os projetos de pesquisa cadastrados!</p>
                            }
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Projetos de extensão</h2>
                                <hr />
                            </div>
                            
                            {user?.extensionProjects.length > 0 ? 
                                <ul className="cards-pesquisa">
                                    {user?.extensionProjects?.map((projeto, index) => 
                                        <li key={index} className="card-pesquisa">
                                            <p>{projeto.title}</p>
                                            <label className="periodo">{projeto.inicio} - {projeto.fim}</label>
                                        </li>
                                    )}
                                </ul>
                            :
                                <p className="textParagraph alert">Não possui os projetos de extensão cadastrados!</p>
                            }
                        </div>

                        <div className="card-info">
                            <div className="header-info">
                                <h2>Disciplinas</h2>
                                <hr />
                            </div>

                            {user?.subjects.length > 0 ? 
                                <ul className="cards-pesquisa last">
                                    <li className="card-pesquisa disciplinas">
                                        <label className="label-disciplinas">Lecionando</label>
                                        <ul className="interesses-list-tags disciplinas">
                                            {user?.subjects?.map((disciplina, index) => 
                                                <li key={index} id={disciplina.semestre === semestreAtual ? null : "null"} >
                                                    {disciplina.title}
                                                </li>
                                            )}
                                        </ul> 
                                    </li>

                                    <li className="card-pesquisa disciplinas">
                                        <label className="label-disciplinas">Já lecionadas</label>
                                        <ul className="interesses-list-tags disciplinas">
                                            {user?.subjects?.map((disciplina, index) => 
                                                <li key={index} id={disciplina.semestre === semestreAtual ? "null" : null} >
                                                    {disciplina.title}
                                                </li>
                                            )}
                                        </ul> 
                                    </li> 
                                </ul>
                            :
                                <p className="textParagraph alert">Não possui as disciplinas cadastradas!</p>
                            }
                        </div>
                    </div>
                </>
                }
                
            </section>
        </div>
    )      
}