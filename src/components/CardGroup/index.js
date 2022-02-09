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

    return (
        <ul className="cards">
            {
                status == "professores" ?
                    isActiveCard ?
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
                        <label className="no-results">Não há resultados!</label>
                :
                    isActiveCard ?
                        list.map(TCC => (
                            <CardTCC 
                                key={TCC?.id}
                                idTCC={TCC?.id}
                                title={TCC?.title}
                                aluno={TCC?.student}
                                professor={TCC?.teacher}
                                areas={TCC?.areas}
                            />
                        ))
                    :
                        <label className="no-results">Não há resultados!</label>        
                }
        </ul>
    )
}