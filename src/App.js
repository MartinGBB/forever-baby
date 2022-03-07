import React from 'react'
import './App.css';
import CoverList from './components/CoverList';
import FavoritesList from './components/FavoritesList';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import covers from './data/coverData';
import favorites from './data/favoritesData';


function App() {
  return (
    <div className="App">
      <Header />
      <CoverList covers={ covers }/>
      <FavoritesList favorites={ favorites } />
      <Newsletter />
      ,Footer />
    </div>
  );
}

export default App;
