import React,  { useContext } from "react";
import CardProfessor from "../CardProfessor";
import CardTCC from "../CardTCC";

import { ListContext } from '../../contexts/ListContext';

import './style.css';

export default function CardGroup({ status, list }) {
    const {
        resultDisponibilidade,
        resultPreferencia,
        resultSemestre,
        resultModalidade,
    } = useContext(ListContext);

    let isActiveCard = true;

    list.length > 0 ? isActiveCard = true : isActiveCard = false;

    console.log(resultDisponibilidade, resultPreferencia, resultSemestre, resultModalidade);

    let filterDuplo = false;
    let noFilter = true;

    if (resultPreferencia && resultDisponibilidade || resultSemestre && resultModalidade) {
        filterDuplo = true;
    }

    if (resultPreferencia || resultDisponibilidade || resultSemestre || resultModalidade) {
        noFilter = false;
    }

    return (
        <>
            {isActiveCard ?
                <ul className="cards">
                {status == "professores" ?
                        noFilter && !filterDuplo ?
                            list.map(professor => (
                                <CardProfessor 
                                    key={professor?._id}
                                    idProfessor={professor?._id}
                                    srcPerfil={professor?.photo}
                                    nome={professor?.firstName + ' ' + professor?.lastName}
                                    email={professor?.email}
                                    areas={professor?.researchAreas}
                                    status={professor?.availability}
                                />
                            ))
                        :
                            ''
                    :
                        noFilter &&  !filterDuplo?
                            list.map(TCC => (
                                <CardTCC 
                                    key={TCC?._id}
                                    idTCC={TCC?._id}
                                    title={TCC?.title}
                                    aluno={TCC?.student}
                                    professor={TCC?.teacher}
                                    areas={TCC?.areas}
                                />
                            ))
                        :
                        ''        
                }
    
                {status == "professores" ?
                        isActiveCard ?
                            list.map(professor => (
                                filterDuplo && !noFilter ? 
                                    professor.preferredModalities === resultPreferencia && professor.availability === resultDisponibilidade ?
                                        <CardProfessor 
                                        key={professor?._id}
                                        idProfessor={professor?._id}
                                        srcPerfil={professor?.photo}
                                        nome={professor?.firstName + ' ' + professor?.lastName}
                                        email={professor?.email}
                                        areas={professor?.researchAreas}
                                        status={professor?.availability}
                                    />
                                    :
                                    ' '
                                    // <label className="no-results">Não há resultados!</label>
                                :
                                    !noFilter && professor.availability === resultDisponibilidade ?
                                        <CardProfessor 
                                            key={professor?._id}
                                            idProfessor={professor?._id}
                                            srcPerfil={professor?.photo}
                                            nome={professor?.firstName + ' ' + professor?.lastName}
                                            email={professor?.email}
                                            areas={professor?.researchAreas}
                                            status={professor?.availability}
                                        />
                                    :
                                    !noFilter &&  professor.preferredModalities === resultPreferencia ?
                                        <CardProfessor 
                                        key={professor?._id}
                                        idProfessor={professor?._id}
                                        srcPerfil={professor?.photo}
                                        nome={professor?.firstName + ' ' + professor?.lastName}
                                        email={professor?.email}
                                        areas={professor?.researchAreas}
                                        status={professor?.availability}
                                    />
                                    :
                                    ' '
                                    // <label className="no-results">Não há resultados!</label>
                                ))     
                        :
                            ''
                    :
                        isActiveCard ?
                            list.map(TCC => (
                                filterDuplo && !noFilter ?
                                    TCC.semestre === resultSemestre && TCC.modalidade === resultModalidade ?
                                        <CardTCC 
                                            key={TCC?._id}
                                            idTCC={TCC?._id}
                                            title={TCC?.title}
                                            aluno={TCC?.student}
                                            professor={TCC?.teacher}
                                            areas={TCC?.areas}
                                        />
                                    :
                                ' '
                                    // <label className="no-results">Não há resultados!</label>  
                                :
                                !noFilter && TCC.semestre === resultSemestre ?
                                        <CardTCC 
                                            key={TCC?._id}
                                            idTCC={TCC?._id}
                                            title={TCC?.title}
                                            aluno={TCC?.student}
                                            professor={TCC?.teacher}
                                            areas={TCC?.areas}
                                        />
                                    :
                                !noFilter && TCC.modalidade === resultModalidade ?
                                        <CardTCC 
                                            key={TCC?._id}
                                            idTCC={TCC?._id}
                                            title={TCC?.title}
                                            aluno={TCC?.student}
                                            professor={TCC?.teacher}
                                            areas={TCC?.areas}
                                        />
                                    :
                                ' '
                                    // <label className="no-results">Não há resultados!</label>
                            ))
                        :
                        ''     
                    }
            </ul>
            :
                <label className="no-results">Não há resultados!</label> 
            }
        </>
        
    )
}