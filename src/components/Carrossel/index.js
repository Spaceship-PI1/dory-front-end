import React, { useContext, useEffect, useState } from 'react';
import NavFiltrosGlobais from '../NavFiltrosGlobais';
import CardGroup from '../CardGroup';

import './style.css';
import api from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

export default function Carrossel({ index, interesse }) {
  const [status, setStatus] = useState('professores');

  const handleSetProfessores = () => setStatus('professores');
  const handleSetTCCs = () => setStatus('TCCs');

  const srcPerfil =
    'https://images.pexels.com/photos/7163364/pexels-photo-7163364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

  const listProfessores = [
    {
      id: 0,
      foto: srcPerfil,
      nome: 'Alysson Diniz',
      email: 'alysson@virtual.ufc.br',
      areas: [
        'Realidade Virtual',
        'Game design',
        'Desenvolvimento de jogos',
        'Jogos',
      ],
      status: 'disponível',
    },
    {
      id: 1,
      foto: srcPerfil,
      nome: 'Alysson Diniz',
      email: 'alysson@virtual.ufc.br',
      areas: [
        'Realidade Virtual',
        'Game design',
        'Desenvolvimento de jogos',
        'Jogos',
      ],
      status: 'disponível',
    },
    {
      id: 2,
      foto: srcPerfil,
      nome: 'Alysson Diniz',
      email: 'alysson@virtual.ufc.br',
      areas: [
        'Realidade Virtual',
        'Game design',
        'Desenvolvimento de jogos',
        'Jogos',
      ],
      status: 'disponível',
    },
  ];

  const [tccs, setTccs] = useState([]);

  async function getTccsAll() {
    const response = await api.get('/tcc_all');
    setTccs(response.data.tccs);
    console.log(tccs);
  }

  async function getTccsArea() {
    const response = await api.get(`/tcc?interesse=${interesse}`);
    setTccs(response.data.tccs);
    console.log(tccs);
  }

  useEffect(() => {
    getTccsArea();
  }, []);

  return (
    <div key={index} className="item-resultado">
      <h1>{interesse}</h1>

      <div className="nav-filtros carrossel">
        <NavFiltrosGlobais
          status={status}
          setProfessores={handleSetProfessores}
          setTCCs={handleSetTCCs}
        />

        <hr className="line" />
      </div>

      {tccs.length > 0 ? ( //mudei de > = para >=0
        <CardGroup
          status={status}
          list={status == 'TCCs' ? tccs : listProfessores}
        />
      ) : (
        <CardGroup status={status} list={listProfessores} />
      )}
    </div>
  );
}
