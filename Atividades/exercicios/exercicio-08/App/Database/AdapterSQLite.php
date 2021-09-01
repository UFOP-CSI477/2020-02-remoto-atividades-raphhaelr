<?php

namespace App\Database;

use PDO;

class AdapterSQLite implements AdapterInterface
{
    private $connection;

    public function open()
    {
        $dbfile = './db/database.sqlite';

        $strConnection = 'sqlite:' . $dbfile;

        $this->connection = new PDO($strConnection);

        return $this->connection;
    }

    public function close()
    {
        echo "<br>AdapterSQLite: close()</br>";
    }

    public function get()
    {
        return $this->connection;
    }
}
