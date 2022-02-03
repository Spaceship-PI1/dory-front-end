import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";

import '../styles/login.css';

const schema = yup.object({
    email: yup.string().required('O email é obrigatório'),
    senha: yup.string().required('A senha é obrigatória'),
}).required();

export function Login() {
    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    return (
        <div>
            <NavBarGlobal login={false} />

            <section className="container" id="login">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Faça Login</h1>

                    <div className="div-inputs">
                        <Input 
                            {...register("email")}
                            name="email"
                            type="text"
                            question="Email"
                            required="required"
                            placeholder="Ex: alifernandes@gmail.com"
                            className={errors.email? "inputText has-error" : "inputText"}
                        />
                        <p className="error">{errors.email?.message}</p>

                        <div className="div-forgot-password">
                            <div className="label-required">
                                <label for="password">Senha</label>
                                <label id="required">*</label>
                            </div>
                            <label id="forgot-password">Esqueceu a senha?</label>
                        </div>
                        <input
                            {...register("senha")}
                            for="password"
                            type="password"
                            placeholder="Não escreva 123"
                            className={errors.senha? "inputText has-error" : "inputText"}
                        />
                        <p className="error">{errors.senha?.message}</p>

                    </div>

                    <button className="yellow" type="submit">
                        Entrar
                    </button>

                    <Link to="/register" className="sign-up">
                        Não tenho conta
                    </Link>
                </form>
            </section>
        </div>
    ) 
}