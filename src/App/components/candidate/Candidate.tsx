import React, { useState } from 'react';

const CANDIDATE_STATE_MACHINE :any = {
  initial: 'Entrevista inicial',
  states: {
    'Entrevista inicial': {
      on: {
        NEXT: 'Entrevista técnica'
      }
    },
    'Entrevista técnica': {
      on: {
        NEXT: 'Oferta',
        PREVIUS: 'Entrevista inicial'
      }
    },
    Oferta: {
      on: {
        NEXT: 'Asignación',
        PREVIUS: 'Entrevista técnica'
      }
    },
    Asignación: {
      on: {
        NEXT: 'Rechazo',
        PREVIUS: 'Oferta'
      }
    },
    Rechazo: {
      on: {
        PREVIUS: 'Asignación'
      }
    }
  }
};

const updateState: any = (state:any, evento: any)  => {
  console.log(state, evento);
  return CANDIDATE_STATE_MACHINE.states[state]?.on?.[evento] || state;
};
const Candidate = ({ name, updateFields, i, init }:any) => {
 
  const [state, setState] = useState( init);

  const handleClick =  (_:any, evento:any) => {
    _.preventDefault();

    let newState = updateState(state, evento)
    setState(newState)
    updateFields(i, newState)
  };
  return (
    <article>
        <div className='data'>
      <h3>{name}</h3>
      <div className='navigation'>
        <button onClick={_ => handleClick(_, 'PREVIUS')}>{'<'}</button>
        <button onClick={_ => handleClick(_, 'NEXT')}>{'>'}</button>
      </div>
      </div>
      <p contentEditable>¡Edítame!</p>
      
    </article>
  );
};

export default Candidate;
