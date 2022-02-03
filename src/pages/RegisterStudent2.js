import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import RadioButton from "../components/RadioButton";
 
import '../styles/registerStudent.css';

export function RegisterStudent2() {
    const [page, setPage] = useState(1);
    const handleChange = (e, value) => {
        setPage(value);
    }

    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="register-student">
                <form onSubmit={() => {}}>
                    <h1>Sobre o seu TCC</h1>
                        <div className="columns-inputs">
                            <div className="div-inputs">
                                <TextArea
                                    name="Tema"
                                    question="Qual é o tema do seu TCC?"
                                    subtitleRequired="required"
                                    subtitle="Se você estiver em dúvida, pode colocar uma lista de temas"
                                    placeholder="Ex: Ressignificando personagens do Folclore Brasileiro no Universo Visual de Pokémon"
                                />
                                <div id="nao-sei">
                                    <RadioButton
                                        name="ainda-nao-sei-tema" 
                                        question="Ainda não sei"
                                    />
                                </div>
                                

                                <div className="label-required question-checkbox">
                                    <label for="perfil">Qual a modalidade de TCC você escolheu?</label>
                                        <label id="required">*</label>
                                </div>
                                <div className="list-checkbox">
                                    <RadioButton 
                                        name="artigo-cientifico"
                                        question="Artigo Científico"
                                    />
                                    <RadioButton 
                                        name="monografia"
                                        question="Monografia"
                                    />
                                    <RadioButton 
                                        name="relatorio-tecnico"
                                        question="Relatório Técnico"
                                    />
                                    <RadioButton 
                                        name="nao-escolhi"
                                        question="Ainda não escolhi"
                                    />
                                </div>
                            </div>

                            <hr id="line-page-2" />

                            <div className="div-inputs">
                                <div className="label-required question-checkbox">
                                    <label for="perfil">Já começou a escrever o projeto de TCC?</label>
                                        <label id="required">*</label>
                                </div>
                                <div className="list-checkbox">
                                    <RadioButton 
                                        name="status-1"
                                        question="Sim, em Projeto de TCC 1"
                                    />
                                    <RadioButton 
                                        name="status-2"
                                        question="Sim, estava sendo orientado por outro professor"
                                    />
                                    <RadioButton 
                                        name="status-3"
                                        question="Sim, estava fazendo por conta própria"
                                    />
                                    <RadioButton 
                                        name="status-4"
                                        question="Não, ainda não comecei"
                                    />
                                </div>

                                <Input
                                    name="Semestre"
                                    question="Em qual semestre pretende defendê-lo?"
                                    required="required"
                                    type="text"
                                    placeholder="Ex: 2021.2"
                                />
                                <div id="nao-sei">
                                    <RadioButton
                                        name="ainda-nao-sei-semestre" 
                                        question="Ainda não sei"
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