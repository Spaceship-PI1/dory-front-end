import { createContext, useContext, useEffect, useState } from 'react';

import api from '../services/api';
import { AuthContext } from './AuthContext';

export const ListContext = createContext({});

export function ListProvider({ children }) {
  const [tccsAll, setTccsAll] = useState([]);
  const [profsAll, setProfsAll] = useState([]);

  useEffect(() => {
    getProfessoresAll();
    getTccsAll();
  }, []);

  async function getProfessoresAll() {
    const response = await api.get('/teachers_all');
    setProfsAll(response.data.teachers);
  }

  async function getTccsAll() {
    const response = await api.get('/tcc_all');
    setTccsAll(response.data.tccs);
    console.log(tccsAll);
  }

  return (
    <ListContext.Provider value={{ tccsAll, profsAll }}>
      {children}
    </ListContext.Provider>
  );
}

/*  
  useEffect(() => {
    getTeachers().then((response) => {
      // console.log('List', response);
      setTeacher(response);
    });
  }, []); */
