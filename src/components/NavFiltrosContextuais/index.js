import React, { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Filtro from "../Filtro";

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
    const handleChangePrefModalidade = (e) => setPrefModalidade(e.target.value); 
    const handleChangeSemestre = (e) => setSemestre(e.target.value); 
    const handleChangeModalidade = (e) => setModalidade(e.target.value); 

    //filtros professores
    useEffect(() => {
        setResultDisponibilidade(disponibilidade);
    }, [disponibilidade]);

    useEffect(() => {
        setResultPreferencia(prefModalidade);
    }, [prefModalidade]);

    //filtros tccs
    useEffect(() => {
        setResultModalidade(modalidade);
    }, [modalidade]);

    useEffect(() => {
        setResultSemestre(semestre);
    }, [semestre]);

    console.log(
        `disponibilidade:${disponibilidade}, prefModalidade:${prefModalidade}, modalidade:${modalidade}, semestre:${semestre}`
    );

    return (
        <>
        {status == "professores" ?
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: '16px',
                marginBottom: '16px'
            }}>
                <Filtro 
                    nome="Disponibilidade"
                    idFiltro="status"
                    value={disponibilidade}
                    onChange={handleChangeDisponibilidade}
                    itens={[
                        {
                            nome: "Disponível",
                            value: "disponível"
                        },
                        {
                            nome: "Indisponível",
                            value: "indisponível"
                        },
                        {
                            nome: "Em análise",
                            value: "análise"
                        }
                    ]}
                />

                <Filtro 
                    nome="Modalidade"
                    idFiltro="modalidade"
                    value={prefModalidade}
                    onChange={handleChangePrefModalidade}
                    itens={[
                        {
                            nome: "Artigo científico",
                            value: "Artigo científico"
                        },
                        {
                            nome: "Relatório Técnico",
                            value: "Relatório Técnico"
                        },
                        {
                            nome: "Monografia",
                            value: "Monografia"
                        }
                    ]}
                />
            </Box>
        :
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: '16px',
                marginBottom: '16px'
            }}>
                <Filtro 
                    nome="Semestre"
                    idFiltro="semestre"
                    value={semestre}
                    onChange={handleChangeSemestre}
                    itens={[
                        {
                            nome: "2021.2",
                            value: 20212
                        },
                        {
                            nome: "2021.1",
                            value: 20211
                        },
                        {
                            nome: "2020.2",
                            value: 20202
                        }
                    ]}
                />

                <Filtro 
                    nome="Modalidade"
                    idFiltro="modalidade"
                    value={modalidade}
                    onChange={handleChangeModalidade}
                    itens={[
                        {
                            nome: "Artigo científico",
                            value: "Artigo científico"
                        },
                        {
                            nome: "Relatório Técnico",
                            value: "Relatório Técnico"
                        },
                        {
                            nome: "Monografia",
                            value: "Monografia"
                        }
                    ]}
                />
            </Box>
        }
        </>
    );
}