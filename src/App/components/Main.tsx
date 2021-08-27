import React, { useState, useEffect } from 'react';
import CreateCandidate from './candidate/CreateCandidate';
import Principal from './candidate/Principal';
import  candidates from '../../api/candidates.json'

export default function App() {
  const [state, setState] = useState(candidates);

  const newCandidate = (candidate:any) => {
    setState([...state, candidate]);
  };
  useEffect(()=>{
    
  })
  return (
    <>
      <Principal state={state} setState={setState} newCandidate={newCandidate}/>
    </>
  );
}
