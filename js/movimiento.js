
function izquierda()
{   
    var tanque = document.getElementById( "tanque" );
    tanque_x -= 10;
    tanque.style.left = tanque_x + "px";
    console.log( "Izquierda" );
}


function derecha()
{
    var tanque = document.getElementById( "tanque" );
    tanque_x += 10;
    tanque.style.left = tanque_x + "px";
    console.log( "Derecha" );
}

//No funciona...
function arriba()
{

    
    this.tanque = document.getElementById("tanque")
    tanque_y -= 10;
    console.log("movimiento arriba" + tanque_y);
    this.tanque.style.top = tanque_y + "px";

}


function disparar()
{
    //contenedor_juego
    console.log( "Disparo" );

    balas.push( [ tanque_x, 450, "bala" + n_balas, 1 ] );

    document.getElementById( "bala" + n_balas ).style.left = balas[ n_balas ][ 0 ];
    document.getElementById( "bala" + n_balas ).style.top = balas[ n_balas ][ 1 ];
    //contenedor_juego.innerHTML += "<div id='bala0' style='position: absolute; left: 30px; top: 450px;'>|</div>";
    
    n_balas ++;

    //console.log( balas );
}
