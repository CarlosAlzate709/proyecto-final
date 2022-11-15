import React from 'react'

const Navbar = () =>{
    return (
        
        <nav class="Barra">
        <h1 class="Titulo">Thylong</h1>
        <ul class="Barramenu">
            <a class="opcion" href='#Coleccion'>Home</a>
            <a class="opcion" href='#Catalogo'>Catalogo</a>
            <a class="opcion" href="#Footer">Nosotros</a>
        </ul>


        <div class="botonIG">
            
            <div><a class="IG" href='https://www.instagram.com/thylong_/' target="_blank">Instagram</a></div>
            
           
        </div>
    </nav>


    );
}

export default Navbar