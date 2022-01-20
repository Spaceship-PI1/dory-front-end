import React from "react";

import './style.css';

export default function CardProfessor({ idProfessor, srcPerfil, nome, email, areas, status }) {
    const altPerfil = "Foto de perfil de " + nome;

    return (
        <li key={idProfessor} className="card">
            <div className="header">
                <div className="perfil">
                    <div className="foto-perfil">
                        <img 
                            className="foto" 
                            src={srcPerfil} 
                            alt={altPerfil} />
                    </div>
                    <div className="status" id={status} >
                        <div className="bolinha" id={status} ></div>
                    </div>
                </div>

                <div className="infos">
                    <h2>{nome}</h2>
                    <p>{email}</p>
                </div>
            </div>
            
            <ul className="tags-areas">
                {areas.map((area, index) => <li key={index} className="tag">{area}</li>)}
            </ul>

            <button className="yellow" type="submit">
                Ver Perfil
            </button>
        </li>
    )
}