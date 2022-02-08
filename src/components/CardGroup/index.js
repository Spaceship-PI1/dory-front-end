import React, { useContext } from 'react';
import { ListContext } from '../../contexts/ListContext';
import CardProfessor from '../CardProfessor';
import CardTCC from '../CardTCC';

import './style.css';

export default function CardGroup({ status, list }) {
  const { resultDisponibilidade } = useContext(ListContext);
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
        : list?.map((professor) => (
            <CardProfessor
              key={professor?._id}
              idProfessor={professor?._id}
              srcPerfil={professor?.foto}
              nome={professor?.firstName + ' ' + professor?.lastName}
              email={professor?.email}
              areas={professor?.researchAreas}
              status={professor?.availability}
            />
          ))}

      {status == 'TCCs' &&
        list?.map((TCC) => (
          <CardTCC
            key={TCC?.id}
            idTCC={TCC.id}
            title={TCC.title}
            aluno={TCC.student}
            professor={TCC.teacher}
            areas={TCC.areas}
          />
        ))}
    </ul>
  );
}
