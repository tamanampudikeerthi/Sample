import React, { useState } from 'react'

const Sample = (e) => {
    const [msg,setMsg]=useState('hhh');
    const handleclick =()=>{
        setMsg('Hi Rajiiii');
        console.log("hii");
    };
  return (
    <div>
      <button onClick={handleclick}>clickme</button>
      <p>{msg}</p>
    </div>
  );
}

export default Sample;

