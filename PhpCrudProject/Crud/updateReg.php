<?php
require_once '../Connection/Conexion.php';
require_once '../Clases/Crud.php';

//Make sure that it is a POST request.
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT') != 0){
    throw new Exception('Request method must be PUT!');
}

//Make sure that the content type of the POST request has been set to application/json
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(strcasecmp($contentType, 'application/json') != 0){
    throw new Exception('Content type must be: application/json');
}
//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));
//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode($content, true);

$motivo = $decoded["motivo"];


$crud = new Crud("motivos_es_gt");

$update = $crud->where("motivo", "=", $motivo)->update($decoded);

echo $update;
