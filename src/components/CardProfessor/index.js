import React from "react";
import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './style.css';

export default function CardProfessor({ idProfessor, srcPerfil, nome, email, areas, status }) {
    const navigate = useNavigate();

    const handleView = (e) => {
        navigate({
            pathname: `/professor/${idProfessor}`,
        });

        e.preventDefault();
    }

    return (
        <li key={idProfessor} className="card" id="professor">
            <div className="header">
                <div className="perfil">
                    {srcPerfil ? 
                        <div className="foto-perfil">
                            <img 
                                className="foto" 
                                src={srcPerfil} 
                                alt={"Foto de perfil de " + nome} />
                        </div> 
                        :
                        <AccountCircleIcon sx={{ fontSize: 66, color: '#506DD8' }} /> 
                    }
                    <div className="status" id={status.toLowerCase()} >
                        <div className="bolinha" id={status.toLowerCase()} ></div>
                    </div>
                </div>

                <div className="infos">
                    <h2>{nome}</h2>
                    <p>{email}</p>
                </div>
            </div>
            
            <ul className="tags-areas">
                {areas?.map((area, index) => index < 4 && <li key={index} className="tag">{area}</li>)}
            </ul>

            <button className="yellow" onClick={handleView}>
                Ver Perfil
            </button>
        </li>
    )
}