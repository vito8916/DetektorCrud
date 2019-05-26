<?php

require_once '../Connection/Conexion.php';
require_once '../Clases/Crud.php';

//Make sure that it is a POST request.
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'GET') != 0){
    throw new Exception('Request method must be GET!');
}

$crud = new Crud("motivos_es_gt");

$lista = $crud->get();

echo json_encode($lista);
