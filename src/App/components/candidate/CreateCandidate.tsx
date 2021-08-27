import React, { useState } from 'react';
import Modal from './Modal';

const CreateCandidate = ({ newCandidate } : any ) => {
  const [create, setCreate] = useState(false);
  const done = () => {
    setCreate(!create)
  }
  return (
    <div>
      {create ? <Modal newCandidate={newCandidate} done={done}/> : null}
      <button onClick={e => setCreate(!create)}> Create a new candidate</button>
    </div>
  );
};

export default CreateCandidate;
