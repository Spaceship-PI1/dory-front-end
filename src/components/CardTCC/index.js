import React from "react";
import { useNavigate } from 'react-router-dom';

import './style.css';

export default function CardTCC({ idTCC, title, aluno, professor , areas }) {
    const navigate = useNavigate();

    const handleView = (e) => {
        navigate({
            pathname: `/tcc/${idTCC}`,
        });

        e.preventDefault();
    }

    return (
        <li key={idTCC} className="card" id="TCC">
            <h2>{title}</h2>

            <ul className="tags-areas">
                {areas.map((area, index) => index < 4 && <li key={index} className="tag">{area}</li>)}
            </ul>

            <div className="infos">
                <p>
                    <strong>Autor: </strong><label>{aluno}</label> 
                </p>
                <p>
                    <strong>Orientador: </strong><label>{professor}</label>
                </p>
            </div>
           
            <button className="yellow" onClick={handleView} >
                Ver TCC
            </button>
        </li>
    )
}