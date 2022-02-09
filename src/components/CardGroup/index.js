import React, { useContext } from 'react';
import { ListContext } from '../../contexts/ListContext';
import CardProfessor from '../CardProfessor';
import CardTCC from '../CardTCC';

import './style.css';

export default function CardGroup({ status, list }) {
  const {
    resultDisponibilidade,
    resultPreferencia,
    resultSemestre,
    resultModalidade,
  } = useContext(ListContext);
  return (
    <ul className="cards">
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
