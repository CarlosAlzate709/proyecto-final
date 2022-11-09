import React from 'react'
import Styles from './Navbar/css/index.css'

const Footer = () => {
  return (
    <div>
            <footer class="pie-pagina">
        <div class="grupo-1">
          <div class="box">
            <figure>

            </figure>
          </div>
          <div class="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>ThyLong es una empresa independiente lista para satistafacer tus necesidades</p>
            <p>Recuerda lo más importante, siempre facha, nunca infacha</p>
          </div>
          <div class="box">
            <h2>SIGUENOS</h2>
            <div class="red-social">
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-instagram"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-youtube"></a>
            </div>
          </div>
        </div>
        <div class="grupo-2">
          <small>&copy; 2022 <b>ThyLong</b> - Todos los Derechos Reservados.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer