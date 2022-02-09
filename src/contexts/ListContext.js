import { createContext, useEffect, useState } from 'react';

import api from '../services/api';

export const ListContext = createContext({});

export function ListProvider({ children }) {
  const [tccsAll, setTccsAll] = useState([]);
  const [profsAll, setProfsAll] = useState([]);

  const [resultDisponibilidade, setResultDisponibilidade] = useState('');
  const [resultPreferencia, setResultPreferencia] = useState('');
  const [resultModalidade, setResultModalidade] = useState('');
  const [resultSemestre, setResultSemestre] = useState('');

  async function getProfessoresAll() {
    const response = await api.get('/teachers_all');
    setProfsAll(response.data.teachers);
  }

  async function getTccsAll() {
    const response = await api.get('/tcc_all');
    setTccsAll(response.data.tccs);
  }
  useEffect(() => {
    getProfessoresAll();
    getTccsAll();
  }, []);

  return (
    <ListContext.Provider
      value={{
        tccsAll,
        profsAll,
        resultDisponibilidade,
        setResultDisponibilidade,
        resultPreferencia,
        setResultPreferencia,
        resultModalidade,
        setResultModalidade,
        resultSemestre,
        setResultSemestre,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
