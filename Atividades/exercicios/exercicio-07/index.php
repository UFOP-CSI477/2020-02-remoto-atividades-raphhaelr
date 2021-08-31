<?php
    require_once 'connection.php';
    
    $products = $connection->query("SELECT * FROM products");

    require 'productsView.php';