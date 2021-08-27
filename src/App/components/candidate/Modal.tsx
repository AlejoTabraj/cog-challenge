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
    setCandidate({ ...candidate, id: e.target.value });
  };
  const onChangeName = (e:any) => {
    setCandidate({ ...candidate, name: e.target.value });
  };
  const onChangeComments = (e:any) => {
    setCandidate({ ...candidate, comments: e.target.value });
  };
  return (
    <div className="modal">
      {JSON.stringify(candidate)}
      id
      <input onChange={e => onChangeId(e)} />
      name
      <input onChange={e => onChangeName(e)} />
      <input type="textarea" onChange={e => onChangeComments(e)} />
      <button onClick={e => handleClick(e)}>create</button>
    </div>
  );
};

export default Modal;
