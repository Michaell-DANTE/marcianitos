<?php

function conectar()
{

    $host_bbd = "localhost";
    $usuario_bbd = "root";
    $pass_bbd = "toor";
    $bd_bbd = "marcianito";

    $con = mysqli_connect($host_bbd, $usuario_bbd,  $pass_bbd, $bd_bbd);
    

    return $con;
}


?>