import React from 'react'
import './App.css';
import CoverList from './components/CoverList';
import Header from './components/Header';
import covers from './data/coverData';


function App() {
  return (
    <div className="App">
      <Header />
      <CoverList covers={ covers }/>
    </div>
  );
}

export default App;
