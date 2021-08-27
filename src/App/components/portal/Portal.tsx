import React,{ useEffect } from 'react'
import  ReactDOM  from 'react-dom'

const Portal = ({ children }:any) => {
    
    const portalRoot = document.getElementById('portal')
    const newDiv = document.createElement('div')
    
    useEffect(()=>{
        portalRoot?.appendChild(newDiv)
    },[])

    return ReactDOM.createPortal(children, newDiv)
}

export default Portal