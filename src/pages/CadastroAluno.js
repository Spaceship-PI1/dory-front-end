import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";
import InputImage from "../components/InputImage";
import TextArea from "../components/TextArea";
import RadioButton from "../components/RadioButton";
import Modal from "../components/Modal";
import Paginacao from "../components/Paginacao";

import '../styles/cadastro.css';

export function CadastroAluno() {
    const [page, setPage] = useState(true);
    
    const handlePage = () => setPage(!page);
    const onSubmit = (e) => e.preventDefault();

    const user = {
        nome: 'Alissa Fernandes',
        email: 'alifernandes@gmail.com'
    }

    return (
        <div>
            <NavBarGlobal login={true} />
            
            <section className="container" id="register-student">
                <form onSubmit={onSubmit}>
                    {page ? 
                        <>
                            <h1>Identificação</h1>
                            <div className="columns-inputs">
                                <InputImage user={user} />

                                <hr className="line-separator" id="line-page-1" />

                                <div className="div-inputs">
                                    <TextArea
                                        name="Sobre você"
                                        question="Conte-me sobre você em um tweet"
                                        placeholder="Ex: Sou apaixonada por design.."
                                    />

                                <Modal 
                                    idModal="interesses"
                                    question="Quais são seus interesses em pesquisa?"
                                    title="Adicionar interesses"
                                    desc="Conte-me quais são suas áreas de interesse."
                                    body={
                                        <Input 
                                            name="title"
                                            type="text"
                                            placeholder="Ex: Desenho 2"
                                            className="inputText withoutMargin"
                                            size="large"
                                        />
                                    }
                                />
                                </div>
                            </div>
                        </>
                    :
                    <>
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

                            <hr className="line-separator" id="line-page-2" />

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
                                    className="inputText"
                                    size="small"
                                />
                                <div id="nao-sei">
                                    <RadioButton
                                        name="ainda-nao-sei-semestre" 
                                        question="Ainda não sei"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                    }

                    <Paginacao page={page} handlePage={handlePage} />
                </form>
            </section>
        </div>
    )      
}