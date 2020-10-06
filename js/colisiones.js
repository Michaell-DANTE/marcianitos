function comprobacion_colision()
{
    var txt_bala = "";

    //Ciclo marcianos
    for( var i = 0; i <= n_marcianos; i = i + 20 )
    {
        //Ciclo balas.
        for( var j = 0; j < balas.length; j ++ )
        {
            if( i + marcianos_left >= balas[ j ][ 0 ] - 5 && i + marcianos_left <= balas[ j ][ 0 ] + 5 )
            {
                if( marcianos_top >= balas[ j ][ 1 ] && marcianos_top <= balas[ j ][ 0 ] + 10 )
                {
                    //Una bala activa, colisiona.
                    if( balas[ j ][ 3 ] == 1 )
                    {
                        //console.log( "Le dimos al marciano " + i );
                        document.getElementById( "m" + i ).style.visibility  = "hidden";
                        balas[ j ][ 3 ] = 0;
                        document.getElementById( balas[ j ][ 2 ] ).style.visibility = "hidden";
                        //Puntaje.
                        puntaje = puntaje + 1;
                        document.getElementById('tabla_puntaje').value = puntaje;
                        console.log("PUNTAJE:" + puntaje);


                    }
                }
                
            }
        }        
    }

    //for( var i = 0; i <= n_marcianos; i = i + 20 )
    console.log( "--LEFT--> " + marcianos_left );
    console.log( "--TOP--> " + marcianos_top );


    //230 funciona
    if(marcianos_top >= 200)
    {

        document.location.href="vista/gameOver.html";

    }


    /*txt_bala += "<div style='position: absolute; left: " + balas[ 0 ][ 0 ] + "px;"; 
    txt_bala += " top: " + balas[ 0 ][ 1 ] + "px; border: 1px solid; ";
    txt_bala += " width: 10px; height: 20px; '>.";
    txt_bala += "</div>";

    contenedor_juego.innerHTML += txt_bala;*/
    
}

