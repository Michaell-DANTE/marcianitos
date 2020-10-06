/************************* C A R G U E ***********************************************/
window.onload = function()
{
    /*var pp = "400px";
    console.log( pp.replace( "px", "" ) );*/

    console.log( "Iniciando." );
    contenedor_juego = document.getElementById( "contenedor-juego" );
    organizadora_marcianitos();
    setInterval( jugar, 1000 );
}


/********************************************************************************/
