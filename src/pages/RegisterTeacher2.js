import React, { useState } from "react";
import NavBarGlobal from "../components/NavBarGlobal";
import RadioButton from "../components/RadioButton";
import ButtonModal from "../components/ButtonModal";

import '../styles/registerStudent.css';

export function RegisterTeacher2() {
    const [modalAreasPesquisa, setModalAreasPesquisa] = useState(false);

    const handleCloseModalAreasPesquisa = () => setModalAreasPesquisa(false);
    const handleOpenModalAreasPesquisa = () => setModalAreasPesquisa(true);

    const onSubmit = (e) => e.preventDefault();

    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="register-student">
                <form onSubmit={onSubmit}>
                    <h1>Sobre pesquisa</h1>
                        <div className="columns-inputs">
                            <div className="div-inputs">
                                
                                <ButtonModal
                                    name="areas-pesquisa"
                                    question="Quais são suas áreas de pesquisa?"
                                    required="required"
                                    className="buttonModal"
                                    placeholder="+ Adicionar área de pesquisa"
                                    onClick={handleOpenModalAreasPesquisa}
                                />
                                
                                <ButtonModal
                                    name="projetos-pesquisa"
                                    question="Quais projetos de pesquisa você participa?"
                                    required="required"
                                    className="buttonModal"
                                    placeholder="+ Adicionar projeto de pesquisa"
                                    onClick={() => {}}
                                />

                                <div id="nao-sei">
                                    <RadioButton
                                        name="nao-participa" 
                                        question="Não participo de nenhum"
                                    />
                                </div>
                            </div>

                            <hr  id="line-page-2-1" />

                            <div className="div-inputs">
                                <ButtonModal
                                    name="projetos-extensao"
                                    question="Quais projetos de extensão você participa?"
                                    required="required"
                                    className="buttonModal"
                                    placeholder="+ Adicionar projeto de extensão"
                                    onClick={() => {}}
                                />
                                <div id="nao-sei">
                                    <RadioButton
                                        name="nao-participa" 
                                        question="Não participo de nenhum"
                                    />
                                </div>

                                <ButtonModal
                                    name="disciplinas"
                                    question="Quais disciplinas do SMD você leciona?"
                                    required="required"
                                    className="buttonModal"
                                    placeholder="+ Adicionar disciplinas do SMD"
                                    onClick={() => {}}
                                />
                            </div>
                        </div>
                                                    
                    <div className="div-buttons">
                        <button className="default">
                            Cancelar
                        </button>

                        <button className="yellow" type="submit">
                            Salvar
                        </button> 
                    </div>
                </form>
            </section>
        </div>
    )      
}