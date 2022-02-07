import React from "react";

import './style.css';

export default function NavPerfil({ user }) {
    return (
        <nav className="container nav-perfil">
            <h2>{user.nome}</h2>
            <ul>
                {user.perfil == "aluno" ? 
                <>
                    <li>Sobre</li>
                    <li>Meu tema</li>
                    <li>Áreas de interesse</li>
                    <li>Modalidade escolhida</li>
                    <li>Status do TCC</li>
                    <li>Pretensão de defesa</li>
                </>
                :
                <>
                    <li>Orientação</li>
                    <li>Modalidade</li>
                    <li>Áreas de pesquisa</li>
                    <li>TCCs orientados</li>
                    <li>Projetos de pesquisa</li>
                    <li>Projetos de extensão</li>
                    <li>Disciplinas</li>
                </>
                }
                
            </ul>
        </nav>
    )
}