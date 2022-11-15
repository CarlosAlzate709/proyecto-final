import React from 'react'
import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg'
import slider3 from './images/slider3.jpg'
import slider4 from './images/slider4.jpg'
import slider5 from './images/slider5.jpg'
import slider6 from './images/slider6.jpg'
import slider7 from './images/foto4.jpeg'
import slider8 from './images/foto1.jpeg'

const Catalogo = () => {
  return (
    <div id="Catalogo">
       <div class="tituloBan lead p-3 mb-2 bg-dark text-white h-auto">Catalogo</div>
       <div class="slider-frame">
        <ul>          
            <li><img src={slider2} alt=""/></li>
            <li><img src={slider3} alt=""/></li>
            <li><img src={slider4} alt=""/></li>
            <li><img src={slider5} alt=""/></li>
            <li><img src={slider6} alt=""/></li>
            <li><img src={slider1} alt=""/></li>
            <li><img src={slider7} alt=""/></li>
            <li><img src={slider8} alt=""/></li>
        </ul>
    </div>
    </div>
  )
}

export default Catalogo