import React, { useContext, useEffect }  from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavPerfil from "../components/NavPerfil";

import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import '../styles/visualizar.css';

export function VisualizarAluno() {
    const { user, isAuthenticated } = useContext(AuthContext);

    const { 'dory.token': token } = parseCookies();

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

    return (
        <div>
            <NavBarGlobal login={true} />
            <NavPerfil user={user} />

            <section className="container" id="visualizar">
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
            </section>
        </div>
    )      
}