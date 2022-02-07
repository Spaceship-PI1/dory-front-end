import React from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import NavPerfil from "../components/NavPerfil";
import CardTCC from "../components/CardTCC";

import '../styles/visualizar.css';

export function VisualizarProfessor() {
    const semestreAtual = "2021.2";

    const srcPerfil = "https://images.pexels.com/photos/7163364/pexels-photo-7163364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

    const professor = {
        id: 0,
        foto: srcPerfil,
        perfil: "aluno",
        nome: "Liandro Roger",
        email: "liandro@virtual.ufc.br",
        areas: [
            'Jogos', 'Design', 'Criação de personagens', 'Ilustração', 'Desenho', 'Visual Development', 'Animação', 'Cartum '
        ],
        status: "disponível",
        sobreOrientacao: " Oi, me chamo Liandro! Sobre minha orientação, prefiro orientar alunos que o tema esteja alinhado as minhas áreas de pesquisa, para que a orientação ocorra com qualidade. Durante o período de orientação, eu marco encontro semanais em horários pré-agendados, e tento nesses encontros ajudar ao máximo o aluno e lhe passar materiais que possam contribuir com o seu tcc. Caso você tenha interesse na minha orientação, fique tranquilo, podemos marcar um papo :)",
        modalidades: [ 'Relatório Técnico', 'Artigo Científico' ],
        projetosPesquisa: [
            {
                nome: "Quadrinhos e Hipermídia: transformações, convergências e possibilidades da Arte Sequencial no meio digital",
                dataInicio: "2017",
                dataFim: "2017"
            },
            {
                nome: "À tela infinita... e além: um estudo sobre o uso de recursos da Hipermídia na criação de Histórias em Quadrinhos digitais",
                dataInicio: "2015",
                dataFim: "2016"
            }
        ],
        projetosExtensao: [
            {
                nome: "Comunidade aberta de estudos e atividades em desenho, ilustração, concept art e representação gráfica",
                dataInicio: "2017",
                dataFim: "2018"
            }
        ],
        disciplinas: [
            {
                nome: "Desenho I",
                semestre: "2021.2" 
            },
            {
                nome: "Desenho II",
                semestre: "2021.2" 
            },
            {
                nome: "Concepção de cenários e de personagens",
                semestre: "2021.2" 
            },
            {
                nome: "História do Design",
                semestre: "2021.2" 
            },
            {
                nome: "Técnicas de animação analógica",
                semestre: "2020.1" 
            },
            {
                nome: "Projeto Integrado II",
                semestre: "2020.1" 
            }
        ],
        TCCs: [
            {
                id: 0,
                title: "Desenvolvimento de uma personagem para um projeto de jogo digital de terror utilizando a abordagem The Silver Way",
                aluno: "Douglas Alves da Silva",
                professor: "Liandro Roger", 
                areas: [
                    'Design de personagens', 'Cartum', 'Jogos de Terror'
                ]
            }
        ]
    }

    return (
        <div>
            <NavBarGlobal login={true} />

            <NavPerfil user={professor} />

            <section className="container" id="visualizar">
                <div className="content-perfil" id="div-perfil">
                    <div className="infos-perfil professor">
                        <div className="div-status">
                            <p className="label-status">{professor.status}</p>
                        </div>

                        <div className="perfil">
                            <div className="foto-perfil">
                                <img 
                                    className="foto" 
                                    src={professor.foto}
                                    alt={professor.nome} />
                            </div>
                            <div className="status" id={professor.status} >
                                <div className="bolinha" id={professor.status} ></div>
                            </div>
                        </div>

                        <div className="dados-perfil">
                            <h4>{professor.nome}</h4>
                            <p className="email">{professor.email}</p>
                        </div>

                        {/* <button className="yellow solicitar" type="submit">
                            Solicitar Orientação
                        </button> */}
                    </div> 
                </div>

                <div className="content-perfil" id="infos-professor">
                    <div className="card-info">
                        <div className="header-info">
                            <h2>Sobre minha Orientação</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{professor.sobreOrientacao}</p>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Preferência de modalidade</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            { professor.modalidades.map((modalidade, index) => <li key={index}>{modalidade}</li>)}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Áreas de pesquisa</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            { professor.areas.map((area, index) => <li key={index}>{area}</li>)}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>TCCs já orientados</h2>
                            <hr />
                        </div>

                        <ul className="card-TCC">
                            {professor.TCCs.map(TCC => (
                                <CardTCC 
                                    idTCC={TCC.id}
                                    title={TCC.title}
                                    aluno={TCC.aluno}
                                    professor={TCC.professor}
                                    areas={TCC.areas}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Projetos de pesquisa</h2>
                            <hr />
                        </div>
                        
                        <ul className="cards-pesquisa">
                            {professor.projetosPesquisa.map((projeto, index) => 
                                <li key={index} className="card-pesquisa">
                                    <p>{projeto.nome}</p>
                                    <label className="periodo">{projeto.dataInicio} - {projeto.dataFim}</label>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Projetos de extensão</h2>
                            <hr />
                        </div>
                        
                        <ul className="cards-pesquisa">
                            {professor.projetosExtensao.map((projeto, index) => 
                                <li key={index} className="card-pesquisa">
                                    <p>{projeto.nome}</p>
                                    <label className="periodo">{projeto.dataInicio} - {projeto.dataFim}</label>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Disciplinas</h2>
                            <hr />
                        </div>
                        
                        <ul className="cards-pesquisa last">
                            <li className="card-pesquisa disciplinas">
                                <label className="label-disciplinas">Lecionando</label>
                                <ul className="interesses-list-tags disciplinas">
                                    {professor.disciplinas.map((disciplina, index) => 
                                        <li key={index} id={disciplina.semestre === semestreAtual ? null : "null"} >
                                            {disciplina.nome}
                                        </li>
                                    )}
                                </ul> 
                            </li>

                            <li className="card-pesquisa disciplinas">
                                <label className="label-disciplinas">Já lecionadas</label>
                                <ul className="interesses-list-tags disciplinas">
                                    {professor.disciplinas.map((disciplina, index) => 
                                        <li key={index} id={disciplina.semestre === semestreAtual ? "null" : null} >
                                            {disciplina.nome}
                                        </li>
                                    )}
                                </ul> 
                            </li> 
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )      
}