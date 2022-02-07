import React from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavPerfil from "../components/NavPerfil";

import '../styles/visualizar.css';

export function VisualizarAluno() {
    const srcPerfil = "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    const aluno = {
        id: 0,
        perfil: "aluno",
        foto: srcPerfil,
        nome: "Alissa Fernandes",
        email: "ali.fernandes@gmail.com.br",
        areas: [
            'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho', 'Visual Development', 'Animação', 'Cartum '
        ],
        statusTCC: "Comecei a escrever o projeto de TCC na disciplina de TCC 1",
        sobre: "Oi, me chamo Alissa! Gosto bastante de design de personagens, tenho estudado sobre a área e explorado esse universo. Sou bastante focada, proativa e organizada, esses são meus pontos mais fortes.",
        tema: "Avaliação dos personagens no universo do filme Viva a vida é uma festa",
        modalidade: "Relatório Técnico",
        pretensaoDefesa: "2022.1"
    }

    return (
        <div>
            <NavBarGlobal login={true} />
            <NavPerfil user={aluno} />

            <section className="container" id="visualizar">
                <div className="content-perfil aluno" id="div-perfil">
                    <div className="infos-perfil">
                        <div className="perfil">
                            <div className="foto-perfil">
                                <img 
                                    className="foto" 
                                    src={aluno.foto}
                                    alt={aluno.nome} />
                            </div>
                        </div>

                        <div className="dados-perfil">
                            <h4>{aluno.nome}</h4>
                            <p className="email">{aluno.email}</p>
                        </div>

                        <button className="yellow solicitar" type="submit">
                            Visualizar Proposta
                        </button>
                    </div> 
                </div>

                <div className="content-perfil" id="infos-professor">
                    <div className="card-info">
                        <div className="header-info">
                            <h2>Sobre</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{aluno.sobre}</p>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Meu tema</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{aluno.tema}</p>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Áreas de pesquisa</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            { aluno.areas.map((area, index) => <li key={index}>{area}</li>)}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Modalidade escolhida</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{aluno.modalidade}</p>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Status do desenvolvimento do TCC</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{aluno.statusTCC}</p>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Pretensão de defesa</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{aluno.pretensaoDefesa}</p>
                    </div>
                </div>
            </section>
        </div>
    )      
}