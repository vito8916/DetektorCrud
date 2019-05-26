<?php

class Conexion {

    private $conexion;
    private $configuracion = [
        "driver" => "pgsql",
        "host" => "localhost",
        "database" => "test",
        "port" => "3306",
        "username" => "root",
        "password" => "root",
        "charset" => "utf8mb4"
    ];

    public function __construct() {

    }

    public function conectar() {
        try {
            $CONTROLADOR = $this->configuracion["driver"];
            $SERVIDOR = $this->configuracion["host"];
            $BASE_DATOS = $this->configuracion["database"];
            $PUERTO = $this->configuracion["port"];
            $USUARIO = $this->configuracion["username"];
            $CLAVE = $this->configuracion["password"];
            $CODIFICACION = $this->configuracion["charset"];

            $url = "{$CONTROLADOR}:host={$SERVIDOR};"
                . "dbname={$BASE_DATOS};";
            //Se crea la conexión.
            $this->conexion = new PDO($url, $USUARIO, $CLAVE);
            return $this->conexion;
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
    }

}
