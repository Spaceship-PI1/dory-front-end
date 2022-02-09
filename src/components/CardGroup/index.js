import React, { useContext } from 'react';
import { ListContext } from '../../contexts/ListContext';
import CardProfessor from '../CardProfessor';
import CardTCC from '../CardTCC';

import './style.css';

export default function CardGroup({ status, list }) {
  let isActiveCard;
  list.length > 0 ? (isActiveCard = true) : (isActiveCard = false);
  const {
    resultDisponibilidade,
    resultPreferencia,
    resultSemestre,
    resultModalidade,
  } = useContext(ListContext);
  let result = [];
  /* list.map((professor) => {
    if (
      professor.availability === resultDisponibilidade &&
      professor.preferredModalities === resultPreferencia
    ) {
      result = result.concat(professor);
    } else if (professor.availability === resultDisponibilidade) {
      mostrar;
    }
  }) */ if (list)
    return (
      <ul className="cards">
        {status == 'professores' ? (
          isActiveCard ? (
            list.map((professor) => {
              (professor.availability === resultDisponibilidade) === false ? (
                <CardProfessor
                  key={professor?._id}
                  idProfessor={professor?._id}
                  srcPerfil={professor?.photo}
                  nome={professor?.firstName + ' ' + professor?.lastName}
                  email={professor?.email}
                  areas={professor?.researchAreas}
                  status={professor?.availability}
                />
              ) : (
                <label className="no-results">Não há resultados!</label>
              );
            })
          ) : (
            <label className="no-results">Não há resultados!</label>
          )
        ) : isActiveCard ? (
          list.map((TCC) => (
            <CardTCC
              key={TCC?._id}
              idTCC={TCC?._id}
              title={TCC?.title}
              aluno={TCC?.student}
              professor={TCC?.teacher}
              areas={TCC?.areas}
            />
          ))
        ) : (
          <label className="no-results">Não há resultados!</label>
        )}

        {status == 'professores' && resultDisponibilidade
          ? list?.map(
              (professor) =>
                professor.availability == resultDisponibilidade && (
                  <CardProfessor
                    key={professor?._id}
                    idProfessor={professor?._id}
                    srcPerfil={professor?.foto}
                    nome={professor?.firstName + ' ' + professor?.lastName}
                    email={professor?.email}
                    areas={professor?.researchAreas}
                    status={professor?.availability}
                  />
                )
            )
          : ''}

        {status == 'professores' && resultPreferencia
          ? list?.map(
              (professor) =>
                professor.preferredModalities == resultPreferencia && (
                  <CardProfessor
                    key={professor?._id}
                    idProfessor={professor?._id}
                    srcPerfil={professor?.foto}
                    nome={professor?.firstName + ' ' + professor?.lastName}
                    email={professor?.email}
                    areas={professor?.researchAreas}
                    status={professor?.availability}
                  />
                )
            )
          : ''}

        {status == 'professores' && !resultPreferencia && !resultDisponibilidade
          ? list?.map((professor) => (
              <CardProfessor
                key={professor?._id}
                idProfessor={professor?._id}
                srcPerfil={professor?.foto}
                nome={professor?.firstName + ' ' + professor?.lastName}
                email={professor?.email}
                areas={professor?.researchAreas}
                status={professor?.availability}
              />
            ))
          : ''}

        {status == 'TCCs' && resultModalidade
          ? list?.map(
              (TCC) =>
                TCC.modality == resultModalidade && (
                  <CardTCC
                    key={TCC?.id}
                    idTCC={TCC.id}
                    title={TCC.title}
                    aluno={TCC.student}
                    professor={TCC.teacher}
                    areas={TCC.areas}
                  />
                )
            )
          : ''}

        {status == 'TCCs' && resultSemestre
          ? list?.map(
              (TCC) =>
                TCC.semester == resultSemestre && (
                  <CardTCC
                    key={TCC?.id}
                    idTCC={TCC.id}
                    title={TCC.title}
                    aluno={TCC.student}
                    professor={TCC.teacher}
                    areas={TCC.areas}
                  />
                )
            )
          : ''}

        {status == 'TCCs' && !resultModalidade && !resultSemestre
          ? list?.map((TCC) => (
              <CardTCC
                key={TCC?.id}
                idTCC={TCC.id}
                title={TCC.title}
                aluno={TCC.student}
                professor={TCC.teacher}
                areas={TCC.areas}
              />
            ))
          : ''}
      </ul>
    );
}
