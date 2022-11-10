import React from "react";
import Reactplayer from 'react-player';
import video from './images/video.mp4';

const Cuerpo = () =>{
    return (
        <>
            <div class="h-auto mb-2 bg-dark">
                <div class="Banner"></div>
                <div class="tituloBan lead p-3 mb-2 bg-dark text-white h-auto">Coleccion Noviembre 2022 </div>
            </div>

            <div class="flex">
                <Reactplayer width="450px" height="1200px" class="video" url={video} autoplay loop mute></Reactplayer>
                <div class="foto1"></div>
                <div class="foto2"></div>
                <div class="foto3"></div>
                <div class="foto4"></div>
                <div class="foto5"></div>
                <div class="foto6"></div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>

    );
}

export default Cuerpo