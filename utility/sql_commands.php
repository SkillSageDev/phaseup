<?php

function get_cards() {
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
    
    $get_cards = "SELECT * FROM cards;";
    $result = mysqli_query($connection, $get_cards);

    if (!$result) {
        die("Query failed: " . mysqli_error($connection));
    }

    // Create an array to store the fetched rows
    $cards = [];

    // Fetch all rows and store them in the $cards array
    while ($row = mysqli_fetch_array($result)) {
        $cards[] = $row;
    }

    return $cards; // Return the array containing all cards
}


/*
$hostname = "localhost";
$username = "root";
$password = "";
$datebase = "phaseup";

$connection = mysqli_connect($hostname, $username, $password, $datebase);

if(!$connection){
    die("Something Went Wrong");
} else{
    echo "Successful Connection";
}

$get_cards = "SELECT * FROM cards";

// ?[1] apply the sql, on true returns a resource that references the actual result, on false returns false.
// ?[2] a resource it’s like a container for the data, but it’s not the data itself.

$result = mysqli_query($connection, $get_cards); 

// ?returns the first row in the table, when you run it again it will return the second row, then the third and so on.
// *$row = mysqli_fetch_array($result); 

if($result){
    while($row = mysqli_fetch_array($result)){
        $id = $row["id"];
        $image = $row["image"];
        $alt = $row["alt"];
        $title = $row["title"];
        $description = $row["description"];
        $hours = $row["hours"];
        $link = $row["link"];
    }
}

var_dump($id);
var_dump($image);
var_dump($alt);
var_dump($title);
var_dump($description);
var_dump($hours);
var_dump($link);
*/
?>