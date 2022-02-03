import React from "react";
import CardProfessor from "../CardProfessor";
import CardTCC from "../CardTCC";

import './style.css';

export default function MenuCards({ status, list }) {
    return (
        <ul className="cards">
            {status == "professores" && list.map(professor => (
                <CardProfessor 
                    idProfessor={professor.id}
                    srcPerfil={professor.foto}
                    nome={professor.nome}
                    email={professor.email}
                    areas={professor.areas}
                    status={professor.status}
                />
            ))}

            {status == "TCCs" && list.map(TCC => (
                <CardTCC 
                    idTCC={TCC.id}
                    title={TCC.title}
                    aluno={TCC.aluno}
                    professor={TCC.professor}
                    areas={TCC.areas}
                />
            ))}
        </ul>
    )
}