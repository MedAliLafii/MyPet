<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$data = json_decode(file_get_contents("php://input"), true);

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


// Retrieve the form data
$name = $_POST['NameH'];
$phone = $_POST['PhoneH'];
$email = $_POST['EmailH'];
$address = $_POST['AddressH'];
$id = $_GET["id"];

$sql = "UPDATE housing
SET NameH = '$name', PhoneH = '$phone', EmailH = '$email', AddressH = '$address'
WHERE idHousing = '$id'";

// Execute the SQL query
if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
  // Close the database connection
  mysqli_close($conn);
?>