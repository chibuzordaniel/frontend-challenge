import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import CardList from './components/CardList';
import Footer from './components/Footer';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <>
       <div>
        <Navbar/>
        <Showcase/>
        <CardList/>
        <Footer/>
        <ShopCart/>
       </div>
    </>
  );
}

export default App;
