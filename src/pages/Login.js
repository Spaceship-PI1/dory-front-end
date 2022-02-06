import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import NavBarGlobal from '../components/NavBarGlobal';
import Input from '../components/Input';

import '../styles/login.css';
import api from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';

const schema = yup
  .object({
    email: yup.string().required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
  })
  .required();

/**
 * Os names dos inputs devem ser igual ao objetc dos schemas no YUP
 */

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signIn, isAuthenticated } = useContext(AuthContext);

  async function handleLogin(data) {
    console.log(isAuthenticated);
    await signIn(data);
  }

  const { 'dory.token': token } = parseCookies();
  // executa o useEffect assim que carregar a pag
  useEffect(() => {
    if (token) {
      window.location.href = '/home';
    }
  }, []);
  // executa o useEffect sempre o tokwn mudar
  useEffect(() => {
    if (token) {
      window.location.href = '/home';
    }
  }, [token]);
  return (
    <div>
      <NavBarGlobal login={false} />

      <section className="container" id="login">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h1>Faça Login</h1>

          <div className="div-inputs">
            <Input
              name="email"
              register={register}
              type="email"
              question="Email"
              required="required"
              placeholder="Ex: alifernandes@gmail.com"
              className={errors.email ? 'inputText has-error' : 'inputText'}
            />
            <p className="error">{errors.email?.message}</p>

            <Input
              name="password"
              register={register}
              htmlFor="password"
              type="password"
              question="Senha"
              required="required"
              placeholder="Não escreva 123"
              className={errors.senha ? 'inputText has-error' : 'inputText'}
            />
            <p className="error">{errors.senha?.message}</p>

            <div className="div-forgot-password">
              <div className="label-required">
                {/* <label htmlFor="password">Senha</label>
                <label id="required">*</label> */}
              </div>
              <label id="forgot-password">Esqueceu a senha?</label>
            </div>
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
  );
}
