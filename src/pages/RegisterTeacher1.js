import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import TextArea from "../components/TextArea";
import RadioButton from "../components/RadioButton";
import Checkbox from "../components/Checkbox";

import add from './../assets/icons/add.svg';

import '../styles/registerStudent.css';

export function RegisterTeacher1() {
    return (
        <div>
            <NavBarGlobal />

            <section className="container" id="register-student">
                <form onSubmit={() => {}}>
                    <h1>Sobre sua orientação</h1>
                        <div className="columns-inputs">
                            <div className="div-inputs perfil">
                                <div className="add-perfil">
                                    <div className="label-add-perfil">
                                        <label>Adicione sua foto de perfil</label>
                                    </div>
                                    <button>
                                        <img className="add-icon" src={add} alt="Ícone de adicionar" />
                                    </button>
                                </div>
                                
                                <h4>Liandro Roger</h4>
                                <p>liandro@virtual.ufc.br</p>
                            </div>

                            <hr  id="line-page-1-1" />

                            <div className="div-inputs">
                                <TextArea
                                    name="Sobre você"
                                    question="Conte-me sobre a forma como você orienta"
                                    placeholder="Ex: Oi! Geralmente durante a minha orientação..."
                                />

                                <div className="label-required question-checkbox">
                                    <label for="perfil">Nesse semestre, você está disponível para orientar?</label>
                                        <label id="required">*</label>
                                </div>
                                <div className="list-checkbox">
                                    <RadioButton 
                                        name="disponivel"
                                        question="Disponível"
                                    />
                                    <RadioButton 
                                        name="indisponivel"
                                        question="Indisponível"
                                    />
                                    <RadioButton 
                                        name="em-analise"
                                        question="Disponibilidade em análise"
                                    />
                                </div>

                                <div className="label-required question-checkbox">
                                    <label for="perfil">Qual a modalidade de TCC você escolheu?</label>
                                        <label id="required">*</label>
                                </div>
                                <div className="list-checkbox">
                                    <Checkbox 
                                        name="artigo-cientifico"
                                        question="Artigo Científico"
                                    />
                                    <Checkbox 
                                        name="monografia"
                                        question="Monografia"
                                    />
                                    <Checkbox 
                                        name="relatorio-tecnico"
                                        question="Relatório Técnico"
                                    />
                                    <Checkbox 
                                        name="sem-preferencia"
                                        question="Não tenho preferência"
                                    />
                                </div>
                            </div>
                        </div>
                                                    
                    <div className="div-buttons">
                        <button className="default">
                            Cancelar
                        </button>

                        <button className="yellow" type="submit">
                            Continuar
                        </button> 
                    </div>
                </form>
            </section>
        </div>
    )      
}