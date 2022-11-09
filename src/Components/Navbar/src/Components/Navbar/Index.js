import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Titulo,
} from './NavbarElements';

import ban from './images/Ban.jpg'
import styles from './css/index.css';
import Reactplayer from 'react-player';
import video from './images/video1.mp4';
import Footer from '../Footer';

const Navbar = () => {
  return (
    <>
      <Nav>

        
        <Bars />
        <div className='fotologo'>
          
        </div>
        <Titulo>Thylong</Titulo>
        <NavMenu>

          <NavLink to='/' activeStyle>
            Home
          </NavLink>

          <NavLink to='/events' activeStyle>
            Catalogo
          </NavLink>

          <NavLink to='/AnnualReport' activeStyle>
            Contactanos
          </NavLink>


        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Instagram</NavBtnLink>
        </NavBtn>
      </Nav>
      <br></br>

      <div class="h-auto mb-2 bg-dark">
        <div class="Banner"></div>
        <div class="tituloBan lead p-3 mb-2 bg-dark text-white h-auto">Coleccion Noviembre 2022</div>
      </div>

      <div class="flex">
        <Reactplayer width="450px" height="1200px" class="video" url={video} autoplay loop controls></Reactplayer>
        <div class="foto1">

        </div>
        <div class="foto2">

        </div>
        <div class="foto3">

        </div>
        <div class="foto4">

        </div>
        <div class="foto5">

        </div>
        <div class="foto6">

        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <Footer/>
    </>
  );
};

export default Navbar;