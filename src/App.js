import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Cuerpo from './Components/cuerpo';
import Footer from './Components/Footer';
import styles from './Components/css/index.css';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Cuerpo></Cuerpo>
      <Footer></Footer>
    </>
  );
}

export default App;
