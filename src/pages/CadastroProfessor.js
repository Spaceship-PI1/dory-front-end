import React, { useState } from "react";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";
import InputImage from "../components/InputImage";
import TextArea from "../components/TextArea";
import RadioButton from "../components/RadioButton";
import Checkbox from "../components/Checkbox";
import Modal from "../components/Modal";
import Paginacao from "../components/Paginacao";

import '../styles/cadastro.css';

export function CadastroProfessor() {
    const [page, setPage] = useState(true);

    const handlePage = () => setPage(!page);

    const onSubmit = (e) => e.preventDefault();

    const user = {
        nome: 'Liandro Roger',
        email: 'liandro@virtual.ufc.br'
    }
    
    return (
        <div>
            <NavBarGlobal login={true} />

            <section className="container" id="register-student">
                <form onSubmit={onSubmit}>
                    {page ? 
                        <>
                            <h1>Sobre sua orientação</h1>
                            <div className="columns-inputs">
                                <InputImage user={user} />

                                <hr className="line-separator" id="line-page-1-1" />

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
                        </>
                    :
                    <>
                        <h1>Sobre pesquisa</h1>
                        <div className="columns-inputs">
                            <div className="div-inputs">
                                <Modal 
                                    idModal="areas-pesquisa"
                                    question="Quais são suas áreas de pesquisa?"
                                    title="Adicionar áreas de pesquisa"
                                    desc="Conte-me quais são suas áreas de pesquisa."
                                    body={
                                        <Input 
                                            name="area"
                                            type="text"
                                            placeholder="Ex: Design Digital"
                                            className="inputText withoutMargin"
                                            size="large"
                                        />
                                    }
                                />

                                <Modal 
                                    idModal="projetos-pesquisa"
                                    question="Quais projetos de pesquisa você participa?"
                                    title="Adicionar projetos de pesquisa"
                                    desc="Conte-me quais são seus projetos de pesquisa."
                                    body={
                                        <>
                                            <Input 
                                                name="title"
                                                type="text"
                                                question="Título"
                                                required="required"
                                                placeholder="Ex: Incrível grupo de estudos de jogos de tabuleiro"
                                                className="inputText"
                                                size="large"
                                            />

                                            <div style={{
                                                display: 'flex'
                                            }}>
                                                <Input 
                                                    name="periodo"
                                                    type="text"
                                                    question="Data de início"
                                                    required="required"
                                                    placeholder="Ex: 2019"
                                                    className="inputText withoutMargin"
                                                    size="small"
                                                />

                                                <Input 
                                                    name="periodo"
                                                    type="text"
                                                    question="Data de término"
                                                    required="required"
                                                    placeholder="Ex: 2021"
                                                    className="inputText withoutMargin"
                                                    size="small"
                                                />
                                            </div>
                                        </>
                                    }
                                />

                                <div id="nao-sei">
                                    <RadioButton
                                        name="nao-participa" 
                                        question="Não participo de nenhum"
                                    />
                                </div>
                            </div>

                            <hr className="line-separator" id="line-page-2-1" />

                            <div className="div-inputs">
                                <Modal 
                                    idModal="projetos-extensao"
                                    question="Quais projetos de extensão você participa?"
                                    title="Adicionar projetos de extensão"
                                    desc="Conte-me quais são seus projetos de extensão."
                                    body={
                                        <>
                                            <Input 
                                                name="title"
                                                type="text"
                                                question="Título"
                                                required="required"
                                                placeholder="Ex: Incrível grupo de estudos de jogos de tabuleiro"
                                                className="inputText"
                                                size="large"
                                            />

                                            <div style={{
                                                display: 'flex'
                                            }}>
                                                <Input 
                                                    name="periodo"
                                                    type="text"
                                                    question="Data de início"
                                                    required="required"
                                                    placeholder="Ex: 2019"
                                                    className="inputText withoutMargin"
                                                    size="small"
                                                />

                                                <Input 
                                                    name="periodo"
                                                    type="text"
                                                    question="Data de término"
                                                    required="required"
                                                    placeholder="Ex: 2021"
                                                    className="inputText withoutMargin"
                                                    size="small"
                                                />
                                            </div>
                                        </>
                                    }
                                />
                                <div id="nao-sei">
                                    <RadioButton
                                        name="nao-participa" 
                                        question="Não participo de nenhum"
                                    />
                                </div>

                                <Modal 
                                    idModal="disciplinas"
                                    question="Quais disciplinas do SMD você leciona?"
                                    title="Adicionar disciplinas do SMD"
                                    desc="Conte-me quais são suas áreas de pesquisa."
                                    body={
                                        <Input 
                                            name="disciplinas"
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
                    }
                        
                    <Paginacao page={page} handlePage={handlePage} />                   
                </form>
            </section>
        </div>
    )      
}