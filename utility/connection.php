<?php
     // Database connection
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "phaseup";
    $connection = mysqli_connect($hostname, $username, $password, $database);
    
    // Check if the connection is successful
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    } 
?>


