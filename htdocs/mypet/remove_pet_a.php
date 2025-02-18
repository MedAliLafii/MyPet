<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mypet";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$id = $_GET["id"];

$sql = "DELETE FROM adoptions WHERE idAdoption = '$id'";
if ($conn->query($sql) === TRUE) {
  echo "Pet removed successfully";
} else {
  echo "Error removing Pet: " . $conn->error;
}
$conn->close();
?>