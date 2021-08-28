import React, { useState, useEffect } from 'react';
import Principal from './candidate/Principal';
import  candidates from '../../api/candidates.json'
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [state, setState] = useLocalStorage('candidates', candidates);

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
