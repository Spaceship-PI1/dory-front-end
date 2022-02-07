import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './style.css';

export default function CardProfessor({ idProfessor, srcPerfil, nome, email, areas, status }) {
    const altPerfil = "Foto de perfil de " + nome;
    const statusClass = status.toLowerCase();

    return (
        <li key={idProfessor} className="card" id="professor">
            <div className="header">
                <div className="perfil">
                    {srcPerfil ? 
                        <div className="foto-perfil">
                            <img 
                                className="foto" 
                                src={srcPerfil} 
                                alt={altPerfil} />
                        </div> 
                        :
                        <AccountCircleIcon sx={{ fontSize: 66, color: '#506DD8' }} /> 
                    }
                    <div className="status" id={statusClass} >
                        <div className="bolinha" id={statusClass} ></div>
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