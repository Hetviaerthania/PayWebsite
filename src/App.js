import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setname] = useState("hetvi aerthania");
  let val = name;
  const chageName = () => {
     if (val === "hetvi aerthania") {
    setname("hettu");
  }
  else {
    setname("hetvi aerthania");
  }
};

  return (
    <>
      <h1>{name}</h1>

      <button className='btn' onClick={chageName}>click</button>
    </>
  );
}

export default App;
