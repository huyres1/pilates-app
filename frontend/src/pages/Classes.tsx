import React, {useEffect, useState} from 'react';

export default function Classes(){
  const [list,setList] = useState([]);
  useEffect(()=>{ 
    /* fetch('/api/classes') */ 
    setList([{id:1,name:'Pilates Basics'}]); 
  },[]);
  return (
    <div>
      <h1>Classes</h1>
      <ul>{list.map(c=> <li key={c.id}>{c.name}</li>)}</ul>
    </div>
  );
}
