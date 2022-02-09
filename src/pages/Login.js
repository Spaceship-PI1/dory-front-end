import React, { useContext, useEffect } from "react";
import { parseCookies } from 'nookies';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import NavBarGlobal from "../components/NavBarGlobal";
import Input from "../components/Input";

import { AuthContext } from '../contexts/AuthContext';

import '../styles/auth.css';

const schema = yup.object({
    email: yup.string().required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
}).required();

export function Login() {
    const { register, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const { signIn, isAuthenticated } = useContext(AuthContext);
    const { 'dory.token': token } = parseCookies();

    async function handleLogin(data) {
        console.log(isAuthenticated);
        await signIn(data);
    }

    // executa o useEffect assim que carregar a pag
    useEffect(() => {
        if (token) {
            window.location.href = '/home';
        }
    }, []);

    // executa o useEffect sempre o token mudar
    useEffect(() => {
        if (token) {
            window.location.href = '/home';
        }
    }, [token]);

    return (
        <div>
            <NavBarGlobal login={false} />

            <section className="container" id="auth">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h1>Faça Login</h1>

                    <div className="div-inputs">
                        <Input 
                            register={register}
                            name="email"
                            type="text"
                            question="Email"
                            required="required"
                            placeholder="Ex: alifernandes@gmail.com"
                            className={errors.email? "inputText has-error" : "inputText"}
                            size="normal"
                        />
                        <p className="error">{errors.email?.message}</p>

                        <Input 
                            register={register}
                            name="password"
                            type="password"
                            question="Senha"
                            required="required"
                            placeholder="Não escreva 123"
                            className={errors.password? "inputText has-error" : "inputText"}
                            size="normal"
                        />
                        <p className="error">{errors.password?.message}</p>
                    </div>
                    
                    <button className="yellow" type="submit">
                        Entrar
                    </button>

                    <Link to="/cadastro" className="sign-up">
                        Não tenho conta
                    </Link>
                </form>
            </section>
        </div>
    ) 
}