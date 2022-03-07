import React from 'react'
import './App.css';
import CoverList from './components/CoverList';
import FavoritesList from './components/FavoritesList';
import Header from './components/Header';
import covers from './data/coverData';
import favorites from './data/favoritesData';


function App() {
  return (
    <div className="App">
      <Header />
      <CoverList covers={ covers }/>
      <FavoritesList favorites={ favorites } />
    </div>
  );
}

export default App;
