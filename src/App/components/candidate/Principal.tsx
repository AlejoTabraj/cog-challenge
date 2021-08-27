import React, { useState } from 'react';
import Candidate from './Candidate';

const candis = [
  {
    id: 'goncy',
    name: 'Gonzalo Pozzo',
    step: 'Entrevista técnica',
    comments: 'Medio pelo'
  },
  {
    id: 'doe',
    name: 'John Doe',
    step: 'Entrevista inicial',
    comments: ''
  }
];

export default function Principal({ setState, state }:any) {
  const fields = [
    'Entrevista inicial',
    'Entrevista técnica',
    'Oferta',
    'Asignación',
    'Rechazo'
  ];

  const updateFields = (index:any, newStep:any) => {
    state[index].step = newStep;
    setState([...state]);
  };

  return (
    <div className="wrapper">
        {fields &&
          fields.map(field => (
            <div>
                <h2>{field}</h2>
              {state &&
                state.map((candidato:any, i:any) =>
                  candidato.step == field ? (
                    <Candidate
                      i={i}
                      updateFields={updateFields}
                      name={candidato.name}
                      init={candidato.step}
                    />
                  ) : null
                )}
            </div>
          ))}
    </div>
  );
}
