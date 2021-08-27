import React, { useState } from 'react';
import CreateCandidate from './candidate/CreateCandidate';
import Principal from './candidate/Principal';

const candidates = [
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

export default function App() {
  const [state, setState] = useState(candidates);

  const newCandidate = (candidate:any) => {
    console.log(candidate)
    setState([...state, candidate]);
    console.log(state)
  };
  return (
    <>
      <Principal state={state} setState={setState}/>
      <CreateCandidate newCandidate={newCandidate} />
    </>
  );
}
