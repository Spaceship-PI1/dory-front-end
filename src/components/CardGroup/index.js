import React from 'react';
import CardProfessor from '../CardProfessor';
import CardTCC from '../CardTCC';

import './style.css';

export default function CardGroup({ status, list }) {
  return (
    <ul className="cards">
      {status == 'professores' &&
        list?.map((professor) => (
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
