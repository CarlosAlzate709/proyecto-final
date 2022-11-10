import React from 'react'

const Navbar = () =>{
    return (
        <nav class="Barra">
            <h1 class="Titulo">Thylong</h1>
            <ul class="Barramenu">
                <li class="opcion">Home</li>
                <li class="opcion">Catalogo</li>
                <li class="opcion">Contactanos</li>
            </ul>

            <div class="botonIG">
                <div class="IG">Instagram</div>
            </div>
        </nav>
    );
}

export default Navbar