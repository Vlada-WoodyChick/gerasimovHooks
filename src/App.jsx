import React, { useState, useMemo } from 'react';

import './App.css'


const list = [1, 4, 7, 8, 2];
const sortList = () => {
  console.log('sort');
  return list.sort((a, b) => a - b)
}


function App() {

  const [update, updateChange] = useState(false);
  const sortedList =useMemo( sortList, []);
  console.log('App render');

  return (
    <div>
      {sortedList.map( (item) =>  {
     return <div key={item}>{item}</div>  }) }

<button onClick={() => updateChange(!update)}>v</button>
    </div>
  )
}

export default App

