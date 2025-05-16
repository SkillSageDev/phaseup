<?php
// Include the utility file (assuming it's in the same folder)
include('sql_commands.php');



// Get all cards from the database
$cards = get_cards();
// Display all cards
foreach ($cards as $card) {
    var_dump($card["id"]);
    echo "\n";
}
?>


