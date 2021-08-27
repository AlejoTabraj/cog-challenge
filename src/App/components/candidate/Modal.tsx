import React, { useState } from 'react';

const Modal = ({ newCandidate, done }:any) => {
  const [candidate, setCandidate] = useState({
    id: '',
    name: '',
    step: 'Entrevista inicial',
    comments: ''
  });

  const handleClick = (e:any) => {
    e.preventDefault();
    newCandidate(candidate);
    done();
  };

  const onChangeId = (e:any) => {
    e.preventDefault();
    setCandidate({ ...candidate, id: e.target.value });
  };
  const onChangeName = (e:any) => {
    e.preventDefault();
    setCandidate({ ...candidate, name: e.target.value });
  };
  const onChangeComments = (e:any) => {
    e.preventDefault();
    setCandidate({ ...candidate, comments: e.target.value });
  };
  return (
    <div  className="modal">
      <div className="modal-card">
      <label htmlFor='id'>Id</label>
      <input id='id' value={candidate.id} onChange={onChangeId} />
      <label>Nombre</label>
      <input value={candidate.name} onChange={e => onChangeName(e)} />
      <label>Comentario</label>
      <input value={candidate.comments} type="textarea" onChange={e => onChangeComments(e)} />
      <button onClick={e => handleClick(e)}>create</button>
      </div>
      <div onClick={ e => done()} className='close-modal'></div>
    </div>
  );
};

export default Modal;
