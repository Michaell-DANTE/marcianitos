<?php

    $contenido = ("../index.phtml");
    
    if(isset($_GET['enviar']))
    {
        require_once('entrada.php');
        require_once('../modelo/insertar.php');

        header('Location: ../index.phtml');

    }else{

        echo "error";

    }

    require_once('../index.phtml');

?>