import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import NavBarGlobal from "../components/NavBarGlobal";

import api from '../services/api';

import cover from '../assets/cover-default.png';
import '../styles/visualizar.css';

export function VisualizarTCC() {
    const { idTCC } = useParams();
    const [TCC, setTCC] = useState([]);

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

            <section className="container" id="visualizar">
                <div className="content-perfil">
                    <div className="card-info cover">
                        {TCC[0]?.cover ?
                            <img src={TCC[0]?.cover} />
                        :
                            <img src={cover} />
                        }
                    </div>
                    

                    <div className="card-info" id="title">
                        <div className="header-info">
                            <h1>{TCC[0]?.title}</h1>
                            <div className="creditos">
                                <p>
                                    <strong>Autor: </strong> {TCC[0]?.student}
                                </p>
                                <p>
                                    <strong>Orientador: </strong> {TCC[0]?.teacher}
                                </p>
                            </div>
                        </div>

                        {TCC[0]?.linkPDF ?
                            <a  
                                href={TCC[0]?.linkPDF} 
                                className="yellow visualizar"
                                target="_blank"
                            >
                                Visualizar PDF
                            </a> 
                        :
                            null
                        }
                        
                    </div>
                   
                    <div className="card-info">
                        <div className="header-info">
                            <h2>Abstract</h2>
                            <hr />
                        </div>
                        {TCC[0]?.abstract ?
                            <p className="textParagraph">{TCC[0]?.abstract}</p>
                        :
                            <p className="textParagraph alert">Não possui abstract cadastrado!</p>
                        }
                        
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Palavras-chaves</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            {TCC[0]?.areas ? 
                                TCC[0]?.areas.map((area, index) => <li key={index}>{area}</li>)
                            :
                                <p className="textParagraph alert">Não possui as palavras-chaves cadastradas!</p>
                            }
                            
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Mais informações</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            {TCC[0]?.modalidade || TCC[0]?.semestre ? 
                                <>
                                    <li key={TCC[0]?.modalidade}>{TCC[0]?.modalidade}</li>
                                    <li key={TCC[0]?.semestre}>{TCC[0]?.semestre}</li>
                                </>
                            :
                                <p className="textParagraph alert">Não possui mais informações cadastradas!</p>
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )      
}