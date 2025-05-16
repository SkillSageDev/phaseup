<?php 
header("Content-type: application/json");
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
    while ($row = mysqli_fetch_assoc($result)) {
        $cards[] = $row;
    }

    // mysqli_close($connection);
    echo json_encode($cards); // Return the assoc array containing all cards
}
get_cards();

?>