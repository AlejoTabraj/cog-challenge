import React from 'react';
import CreateCandidate from './CreateCandidate';
import Candidate from './Candidate';
import FieldLegend from '../elements/FieldLegend';

export default function Principal({ setState, state, newCandidate }:any) {
  const fields = [
    'Entrevista inicial',
    'Entrevista técnica',
    'Oferta',
    'Asignación',
    'Rechazo'
  ];

  const upadateComments = (index: any, comment:any) => {
    state[`${index}`].comments = comment;
    setState([...state]);
  }
  const updateFields = (index:Number, newStep:String) => {
    state[`${index}`].step = newStep;
    setState([...state]);
  };

  return (
    <div className="wrapper">
        {fields &&
          fields.map(field => (
            <div key={field}>
                <h2>{field}</h2>
                {state && state.some( (candidate:any) => candidate.step == field) ? null : <FieldLegend/>}
                {field == fields[0]? <CreateCandidate newCandidate={newCandidate} /> : null}
              {state &&
                state.map((candidato:any, i:any) =>
                  candidato.step == field ? (
                    <Candidate
                      i={i}
                      updateFields={updateFields}
                      updateComents={upadateComments}
                      name={candidato.name}
                      init={candidato.step}
                      comments={candidato.comments}
                      key={candidato + i}
                    />
                  ) : null
                )}
            </div>
          ))}
    </div>
  );
}
