import React, { useState } from 'react';
import Portal from '../portal/Portal';
import Modal from './Modal';

const CreateCandidate = ({ newCandidate } : any ) => {
  const [create, setCreate] = useState(false);

  const done = () => {
    setCreate(!create)
  }
  
  return (
    <div>
      {create ?<Portal><Modal newCandidate={newCandidate} done={done}/></Portal> : null}
      <button onClick={e => setCreate(!create)}>Agregar candidato</button>
    </div>
  );
};

export default CreateCandidate;
