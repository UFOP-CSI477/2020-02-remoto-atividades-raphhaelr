<?php

require '../vendor/autoload.php';

use App\Database\Connection;
use App\Database\AdapterSQLite;

$connection = new Connection(new AdapterSQLite());

$connection->getAdapter()->open();

$estados = $connection->getAdapter()->get()->query('SELECT * FROM estados');

$cidades = $connection->getAdapter()->get()->query('SELECT * FROM cidades');

$produtos = $connection->getAdapter()->get()->query('SELECT * FROM produtos');


require '../App/Views/cidades/index.php';
require '../App/Views/estados/index.php';
require '../App/Views/produtos/index.php';