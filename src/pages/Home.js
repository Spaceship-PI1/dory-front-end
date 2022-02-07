import React, { useContext, useEffect } from 'react';

import NavBarGlobal from '../components/NavBarGlobal';
import NavInteresses from '../components/NavInteresses';
import SearchInput from '../components/InputSearch';
import Carrossel from '../components/Carrossel';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies';

export function Home() {
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

      <section className="container" id="home">
        {user?.interests !== null && <NavInteresses data={user?.interests} />}

        <SearchInput />

        <div className="resultados-container">
          {user?.interests !== null &&
            user?.interests?.map((inter, index) => (
              <Carrossel key={index} index={index} interesse={inter} />
            ))}
        </div>
      </section>
    </div>
  );
}
