import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Filtro from '../Filtro';
import { ListContext } from '../../contexts/ListContext';

export default function NavFiltrosContextuais({ status }) {
  const {
    setResultDisponibilidade,
    setResultPreferencia,
    setResultSemestre,
    setResultModalidade,
  } = useContext(ListContext);

  const [disponibilidade, setDisponibilidade] = useState('');
  const [prefModalidade, setPrefModalidade] = useState('');
  const [semestre, setSemestre] = useState('');
  const [modalidade, setModalidade] = useState('');

  const handleChangeDisponibilidade = (e) => setDisponibilidade(e.target.value);
  const handleChangeprefModalidade = (e) => setPrefModalidade(e.target.value);
  const handleChangeSemestre = (e) => setSemestre(e.target.value);
  const handleChangeModalidade = (e) => setModalidade(e.target.value);

  //filtros professores
  useEffect(() => {
    setResultPreferencia('');
    setPrefModalidade('');
    setResultDisponibilidade(disponibilidade);
  }, [disponibilidade]);

  useEffect(() => {
    setResultDisponibilidade('');
    setDisponibilidade('');
    setResultPreferencia(prefModalidade);
  }, [prefModalidade]);

  //filtros tccs
  useEffect(() => {
    setResultSemestre('');
    setResultModalidade(modalidade);
  }, [modalidade]);

  useEffect(() => {
    setResultModalidade('');
    setResultSemestre(semestre);
  }, [semestre]);

  console.log(semestre);

  return (
    <>
      {status == 'professores' ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          <Filtro
            nome="Disponibilidade"
            idFiltro="status"
            value={disponibilidade}
            onChange={handleChangeDisponibilidade}
            itens={[
              {
                nome: 'Disponível',
                value: 'Disponível',
              },
              {
                nome: 'Indisponível',
                value: 'Indisponível',
              },
              {
                nome: 'Análise',
                value: 'Análise',
              },
            ]}
          />

          <Filtro
            nome="Modalidade"
            idFiltro="modalidade"
            value={prefModalidade}
            onChange={handleChangeprefModalidade}
            itens={[
              {
                nome: 'Artigo Científico',
                value: 'Artigo Científico',
              },
              {
                nome: 'Relatório Técnico',
                value: 'Relatório Técnico',
              },
              {
                nome: 'Monografia',
                value: 'Monografia',
              },
            ]}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          <Filtro
            nome="Semestre"
            idFiltro="semestre"
            value={semestre}
            onChange={handleChangeSemestre}
            itens={[
              {
                nome: '2021.2',
                value: 20212,
              },
              {
                nome: '2021.1',
                value: 20211,
              },
              {
                nome: '2020.2',
                value: 20202,
              },
            ]}
          />

          <Filtro
            nome="Modalidade"
            idFiltro="modalidade_tcc"
            value={modalidade}
            onChange={handleChangeModalidade}
            itens={[
              {
                nome: 'Artigo Científico',
                value: 'Artigo Científico',
              },
              {
                nome: 'Relatório Técnico',
                value: 'Relatório Técnico',
              },
              {
                nome: 'Monografia',
                value: 'Monografia',
              },
            ]}
          />
        </Box>
      )}
    </>
  );
}
