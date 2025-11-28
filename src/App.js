import React, { useState } from 'react';
import './App.css';
import Clubinfo from './Clubinfo';
import { clubs } from './clubs';

function App() {
  const [index, setIndex] = useState(0);

  const nextClub = () => {
    setIndex((prevIndex) => (prevIndex + 1) % clubs.length);
  };

  return (

      <div className="ShowClub">
        <Clubinfo club={clubs[index]} />
        <button className="next" onClick={nextClub}>Наступний Клуб</button>
      </div>
  );
}

export default App;
