<?php

require_once '../Connection/Conexion.php';
require_once '../Clases/Crud.php';

//Make sure that it is a POST request.
if (strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE') != 0) {
    throw new Exception('Request method must be DELETE!');
}

$crud = new Crud("motivos_es_gt");

if(isset($_GET["motivo"])) {

    $id = (int)$_GET["motivo"];
    $delete = $crud->where("motivo", "=", $id)->delete();
}

echo $delete;
