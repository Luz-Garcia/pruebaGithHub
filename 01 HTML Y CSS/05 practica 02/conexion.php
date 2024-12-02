<?php
$serverb ="localhost:8080";
$user = "roott";
$pass ="";
$db = "bd_colegio";

$conexion = new mysqli($serverb,$user,$pass,$db,8080);

if ($conexion->connect_errno){
    die("conexion fallida" . $conexion->connect_errno);
}else{
    echo"conectado";
}

?>