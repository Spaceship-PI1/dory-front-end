import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseCookies } from 'nookies';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { AuthContext } from '../contexts/AuthContext';
import NavBarGlobal from '../components/NavBarGlobal';
import Input from '../components/Input';

import '../styles/auth.css';

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

      <section className="container" id="auth">
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
              className={errors.password ? 'inputText has-error' : 'inputText'}
              size="normal"
            />
            <p className="error">{errors.password?.message}</p>
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
