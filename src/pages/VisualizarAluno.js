import React, { useContext, useEffect } from 'react';
import NavBarGlobal from '../components/NavBarGlobal';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';

import '../styles/visualizar.css';

export function VisualizarAluno() {
  const { user, isAuthenticated } = useContext(AuthContext);

  const { 'dory.token': token } = parseCookies();
  useEffect(() => {
    if (!token) {
      window.location.href = '/';
    }
  }, []);
  useEffect(() => {
    if (!token) {
      window.location.href = '/';
    }
  }, [token, isAuthenticated]);

  return (
    <div>
      <NavBarGlobal login={true} />

      <nav className="container nav-perfil">
        <h2>{user?.firstName}</h2>
        <ul>
          <li>Sobre</li>
          <li>Meu tema</li>
          <li>Áreas de interesse</li>
          <li>Modalidade escolhida</li>
          <li>Status do TCC</li>
          <li>Pretensão de defesa</li>
        </ul>
      </nav>

      <section className="container" id="visualizar-perfil">
        <div className="content-perfil aluno" id="div-perfil">
          <div className="infos-perfil">
            <div className="perfil">
              <div className="foto-perfil">
                <img
                  className="foto"
                  src={user?.foto ? user?.foto : ''}
                  alt={user?.firstName + ' ' + user?.lastName}
                />
              </div>
            </div>

            <div className="dados-perfil">
              <h4>{user?.firstName + ' ' + user?.lastName}</h4>
              <p>{user?.email}</p>
            </div>

            <button className="yellow solicitar" type="submit">
              Visualizar Proposta
            </button>
          </div>
        </div>

        <div className="content-perfil" id="infos-professor">
          <div className="card-info">
            <div className="header-info">
              <h2>Sobre</h2>
              <hr />
            </div>
            <p className="textParagraph">{user?.about}</p>
          </div>

          <div className="card-info">
            <div className="header-info">
              <h2>Meu tema</h2>
              <hr />
            </div>
            <p className="textParagraph">{user?.theme}</p>
          </div>

          <div className="card-info">
            <div className="header-info">
              <h2>Áreas de pesquisa</h2>
              <hr />
            </div>

            <ul className="interesses-list-tags">
              {user?.interests?.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="card-info">
            <div className="header-info">
              <h2>Modalidade escolhida</h2>
              <hr />
            </div>
            <p className="textParagraph">{user?.modality}</p>
          </div>

          <div className="card-info">
            <div className="header-info">
              <h2>Status do desenvolvimento do TCC</h2>
              <hr />
            </div>
            <p className="textParagraph">{user?.progress}</p>
          </div>

          <div className="card-info">
            <div className="header-info">
              <h2>Pretensão de defesa</h2>
              <hr />
            </div>
            <p className="textParagraph">{user?.pretension}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
