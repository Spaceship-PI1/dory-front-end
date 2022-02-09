import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import NavBarGlobal from "../components/NavBarGlobal";
import NavPerfil from "../components/NavPerfil";

import api from '../services/api';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import '../styles/visualizar.css';

export function VisualizarAluno() {
    const { idAluno } = useParams();
    const [aluno, setAluno] = useState([]);
    
    async function getAlunoId() {
        const response = await api.get(`/student_id?id=${idAluno}`);
        setAluno(response.data.teacher);
    }
    
    useEffect(() => {
        getAlunoId(); 
    }, []);

    return (
        <div>
            <NavBarGlobal login={true} />
            <NavPerfil user={aluno[0]} />

            <section className="container" id="visualizar">
                <div className="content-perfil aluno" id="div-perfil">
                    <div className="infos-perfil">
                        <div className="perfil">
                            {aluno[0]?.photo ?
                                <div className="foto-perfil">
                                    <img 
                                        className="foto" 
                                        src={aluno[0]?.photo}
                                        alt={aluno[0]?.firstName} />
                                </div>
                            :
                                <AccountCircleIcon sx={{ fontSize: 134, color: '#506DD8' }} /> 
                            }
                        </div>

                        <div className="dados-perfil">
                            <h4>{aluno[0]?.firstName + " " + aluno[0]?.lastName}</h4>
                            <p className="email">{aluno[0]?.email}</p>
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
                        {aluno[0]?.about ? 
                            <p className="textParagraph">{aluno[0]?.about}</p>
                        :
                            <p className="textParagraph alert">Não possui descrição cadastrada!</p>
                        }
                        
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Meu tema</h2>
                            <hr />
                        </div>
                        {aluno[0]?.tema ? 
                            <p className="textParagraph">{aluno[0]?.tema}</p>
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
                            {aluno[0]?.interests ? 
                                aluno[0]?.interests?.map((area, index) => <li key={index}>{area}</li>)
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
                        {aluno[0]?.modalidade ? 
                            <p className="textParagraph">{aluno[0]?.modalidade}</p>
                        : 
                            <p className="textParagraph alert">Não possui a modalidade cadastrada!</p>
                        }
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Status do desenvolvimento do TCC</h2>
                            <hr />
                        </div>
                        {aluno[0]?.statusTCC ? 
                            <p className="textParagraph">{aluno[0]?.statusTCC}</p>
                        : 
                            <p className="textParagraph alert">Não possui o status cadastrado!</p>
                        }
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Pretensão de defesa</h2>
                            <hr />
                        </div>
                        {aluno[0]?.pretensaoDefesa ? 
                            <p className="textParagraph">{aluno[0]?.pretensaoDefesa}</p>
                        : 
                            <p className="textParagraph alert">Não possui a pretensão de defesa cadastrada!</p>
                        }
                    </div>
                </div>
            </section>
        </div>
    )      
}