import { createContext, useEffect, useState } from 'react';

import api from '../services/api';

export const ListContext = createContext({});

export function ListProvider({ children }) {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    getTeachers().then((response) => {
      // console.log('List', response);
      setTeacher(response);
    });
  }, []);

  async function getTeachers() {
    const response = await api.get('/teachers');
    return response.data;
  }

  return (
    <ListContext.Provider value={{ teacher }}>{children}</ListContext.Provider>
  );
}
