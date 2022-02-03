import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";
import RadioButton from "../components/RadioButton";

import '../styles/register.css';

const schema = yup.object({
    nome: yup.string().required('O nome é obrigatório'),
    sobrenome: yup.string().required('O sobrenome é obrigatório'),
    email: yup.string().required('O email é obrigatório'),
    senha: yup.string().required('A senha é obrigatória'),
}).required();

export function Register() {
    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    return (
        <div>
            <NavBarGlobal login={false} />

            <section className="container" id="register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Crie sua conta</h1>

                    <div className="div-inputs">
                        <Input
                            {...register("nome")}
                            name="Nome"
                            type="text"
                            question="Nome"
                            required="required"
                            placeholder="Ex: Alissa"
                            className={errors.nome? "inputText has-error" : "inputText"}
                        />
                        <p className="error">{errors.nome?.message}</p>

                        <Input
                            {...register("sobrenome")}
                            name="Sobrenome"
                            type="text"
                            question="Sobrenome"
                            required="required"
                            placeholder="Ex: Fernandes"
                            className={errors.sobrenome? "inputText has-error" : "inputText"}
                        />
                        <p className="error">{errors.sobrenome?.message}</p>

                        <Input
                            {...register("email")}
                            name="Email"
                            type="email"
                            question="Email"
                            required="required"
                            placeholder="Ex: alifernandes@gmail.com"
                            className={errors.email? "inputText has-error" : "inputText"}
                        />
                        <p className="error">{errors.email?.message}</p>

                        <Input
                            {...register("senha")}
                            name="Senha"
                            type="password"
                            question="Senha"
                            required="required"
                            placeholder="Não escreva 123"
                            className={errors.senha? "inputText has-error" : "inputText"}
                        />
                        <p className="error">{errors.senha?.message}</p>

                        <div className="label-required">
                            <label for="perfil">Qual é seu perfil?</label>
                            <label id="required">*</label>
                        </div>
                        <div>
                            <RadioButton 
                                name="aluno"
                                question="Aluno"
                            />
                            <RadioButton 
                                
                                name="professor"
                                question="Professor"
                            />
                        </div>
                    </div>

                    <button className="yellow" type="submit">
                        Criar minha conta
                    </button>

                    <Link to="/" className="sign-up">
                        Já tenho conta
                    </Link>
                </form>
            </section>
        </div>
    )
       
       
}