import React, { useState } from "react";
import Box from '@mui/material/Box';
import Filtro from "../Filtro";

export default function NavFiltrosContextuais({ status }) {
    const [disponibilidade, setDisponibilidade] = useState('');
    const [preferenciaModalidade, setPreferenciaModalidade] = useState('');
    const [semestre, setSemestre] = useState('');
    const [modalidade, setModalidade] = useState('');

    const handleChangeDisponibilidade = (e) => setDisponibilidade(e.target.value); 
    const handleChangePreferenciaModalidade = (e) => setPreferenciaModalidade(e.target.value); 
    const handleChangeSemestre = (e) => setSemestre(e.target.value); 
    const handleChangeModalidade = (e) => setModalidade(e.target.value); 

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
                            value: 1
                        },
                        {
                            nome: "Indisponível",
                            value: 2
                        },
                        {
                            nome: "Em análise",
                            value: 3
                        }
                    ]}
                />

                <Filtro 
                    nome="Modalidade"
                    idFiltro="modalidade"
                    value={preferenciaModalidade}
                    onChange={handleChangePreferenciaModalidade}
                    itens={[
                        {
                            nome: "Artigo científico",
                            value: 1
                        },
                        {
                            nome: "Relatório Técnico",
                            value: 2
                        },
                        {
                            nome: "Monografia",
                            value: 3
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
                            value: 1
                        },
                        {
                            nome: "Relatório Técnico",
                            value: 2
                        },
                        {
                            nome: "Monografia",
                            value: 3
                        }
                    ]}
                />
            </Box>
        }
        </>
    );
}