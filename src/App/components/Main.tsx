import React, { useState, useEffect } from 'react';
import Principal from './candidate/Principal';
import  candidates from '../../api/candidates.json'
import { useLocalStorage } from './hooks/useLocalStorage';
import { Candidate } from '../../types/candidate';

export default function App() {
  const [state, setState] = useLocalStorage('candidates', candidates);

  const newCandidate = (candidate: Candidate) => {
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
