import React from "react";

import NavBarGlobal from "../components/NavBarGlobal";

import '../styles/visualizar.css';

export function VisualizarTCC() {
    const srcCover = "https://cdn.wallpapersafari.com/19/31/fdNZ9r.jpg";

    const TCC = {
        id: 0,
        cover: srcCover,
        tema: "Ressignificando personagens do Folclore Brasileiro no Universo Visual de Pokémon",
        orientando: "Felipe Sampaio do Nascimento Melquiades",
        orientador: "Professor Natal Anacleto Chicca Junior",
        palavrasChaves: [
            'Criação de personagens', 'Folclore Brasileiro', 'Pokémon'
        ],
        abstract: "O Brasil é rico em diversidade de seres folclóricos que variam sua história e aparência por todas as suas regiões, possibilitando um aglomerado de refências sobre cada personagem. Atualmente, o folclore vive nas mídias contribuindo com inspirações para novas narrativas audivisuais, e não obstante, a franquia japonesa e midiática Pokémon é adepta de diversos personagens que resgatam referências em seres mitológicos de várias culturas.",
        modalidade: "Relatório Técnico",
        semestre: "2021.1",
        linkPDF: "https://drive.google.com/drive/folders/1XcWyolLBmvrHwIDaN9Z6GSiegPJq3quE",
    }

    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="visualizar">
                <div className="content-perfil">
                    <div className="card-info cover">
                        <img src={TCC.cover} />
                    </div>

                    <div className="card-info" id="title">
                        <div className="header-info">
                            <h1>{TCC.tema}</h1>
                            <div className="creditos">
                                <p>
                                    <strong>Autor: </strong> {TCC.orientando}
                                </p>
                                <p>
                                    <strong>Orientador: </strong> {TCC.orientador}
                                </p>
                            </div>
                        </div>
                        <button className="yellow visualizar" type="submit">
                            Visualizar PDF
                        </button>
                    </div>
                   
                    <div className="card-info">
                        <div className="header-info">
                            <h2>Abstract</h2>
                            <hr />
                        </div>
                        <p className="textParagraph">{TCC.abstract}</p>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Palavras-chaves</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            { TCC.palavrasChaves.map((area, index) => <li key={index}>{area}</li>)}
                        </ul>
                    </div>

                    <div className="card-info">
                        <div className="header-info">
                            <h2>Mais informações</h2>
                            <hr />
                        </div>

                        <ul className="interesses-list-tags">
                            <li key={TCC.modalidade}>{TCC.modalidade}</li>
                            <li key={TCC.semestre}>{TCC.semestre}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )      
}