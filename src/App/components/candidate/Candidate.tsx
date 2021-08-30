import React, { useState } from 'react';
import { CANDIDATE_STATE } from '../elements/candidateState';


const Candidate = ({ name, updateFields, i, init, comments, updateComents }:any) => {
  const [state, setState] = useState( init);


  const updateState = CANDIDATE_STATE.methods.updateState

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
      <p suppressContentEditableWarning={true} contentEditable onBlur={e => updateComents( i, e.target.textContent)}>{comments}</p>
      
    </article>
  );
};

export default Candidate;
