<?php

    require_once('../modelo/conexion.php');

    $con = conectar();

    $sql = "INSERT INTO puntaje(puntaje)";
    $sql .="VALUES($puntaje);";

    $resultado = $con -> query($sql);

    mysqli_close($con);

?>