import React, { useContext } from 'react';

import NavBarGlobal from '../components/NavBarGlobal';
import NavInteresses from '../components/NavInteresses';
import NavFiltrosContextuais from '../components/NavFiltrosContextuais';
import SearchInput from '../components/InputSearch';
import CardGroup from '../components/CardGroup';

import '../styles/search.css';
import { AuthContext } from '../contexts/AuthContext';
import { ListContext } from '../contexts/ListContext';

export function ShortcutNavBar({ status }) {
  const { user } = useContext(AuthContext);
  const { profsAll, tccsAll } = useContext(ListContext);

  return (
    <div>
      <NavBarGlobal login={true} />

      <section className="container" id="search">
        {user?.interests !== null && <NavInteresses data={user?.interests} />}

        <SearchInput />

        <div className="resultados-container">
          <div className="item-resultado">
            <div className="label-resultados">
              <p>Resultados para</p>
              <h1 className="label-pesquisa">{status}</h1>
            </div>

            <NavFiltrosContextuais status={status} />

            <CardGroup
              status={status}
              list={status == 'TCCs' ? tccsAll : profsAll}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
