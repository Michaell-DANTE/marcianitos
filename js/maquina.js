/******************************** M A Q U I N A *********************************/
function mover_bala()
{
    //console.log( balas.length );

    //Hay balas en el juego.
    if( balas.length > 0 )
    {
        console.log( ":::::::::" );
        
        for( var i = 0; i < balas.length; i ++ )
        {
            balas[ i ][ 1 ] -= 20;
            document.getElementById( "bala" + i ).style.top = balas[ i ][ 1 ] + "px";
        }        

        comprobacion_colision();
    }
}


function mover_marcianitos()
{
    //var marcianos_left = 10;
    //var marcianos_top = 30;
    var contenedor_marcianitos = document.getElementById( "contenedor-marcianitos" );
    //var tmp_txt = contenedor_marcianitos.style.left;
    //tmp_txt = tmp_txt.replace( "px", "" );
    //tmp_txt = parseInt( tmp_txt );
    
    //Avanzando.
    marcianos_left += 5 * sentido_movimiento;
    contenedor_marcianitos.style.left = marcianos_left + "px";
    contenedor_marcianitos.style.top = marcianos_top + "px";


    //console.log( marcianos_left + 920 );

    //Si excede la margen derecha, devuelvase.
    if( marcianos_left + 920 >= 996 )
    {
        //console.log( "Devolver." );
        sentido_movimiento = -1;
        marcianos_top += movimiento_vertical;
    }

    //Si excede la margen izquierda, devuelvase.
    if( marcianos_left <= 0 )
    {
        //console.log( "Devolver." );
        sentido_movimiento = 1;
        marcianos_top += movimiento_vertical;
    }

    //console.log( contenedor_marcianitos.style.left );
    //console.log( contenedor_marcianitos.style.height );
    //console.log( tmp_txt );
}



function organizadora_marcianitos()
{
    var marcianos = "";    
    var estilo = "";
    var tipo_marciano = "";  
    var contenedor_marcianitos = document.getElementById( "contenedor-marcianitos" );
    
    for( var i = 0; i <= n_marcianos; i = i + 20 )
    {
        if( Math.random() <= 0.5 ){ tipo_marciano = "X"; }
        else{ tipo_marciano = "O"; }

        estilo = "style='position: absolute; left: " + i + "px;";
        //marcianos += "<div id='m" + i + "' " + estilo + "'>" + tipo_marciano + "</div>";
        marcianos += "<div id='m" + i + "' " + estilo + "'>" + ( i / 10 ) + "</div>";
    }    
    
    contenedor_marcianitos.innerHTML = marcianos;
    contenedor_marcianitos.style.left = marcianos_left + "px";
    contenedor_marcianitos.style.top = marcianos_top + "px";

    contenedor_marcianitos.innerHTML += "<div style='position: absolute; left: 920px'>*</div>";   

}