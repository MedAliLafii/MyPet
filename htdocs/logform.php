<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

$data = json_decode(file_get_contents("php://input"), true);

// Establish a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mypet";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Retrieve the form data
$name = $_POST['NameH'];
$region = $_POST['RegionH'];
$phone = $_POST['PhoneH'];
$email = $_POST['EmailH'];
$address = $_POST['AddressH'];

// Construct the SQL query
$sql = "INSERT INTO housing (NameH, RegionH, PhoneH, EmailH, AddressH)
        VALUES ('$name', '$region', '$phone', '$email', '$address')";

// Execute the SQL query
if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the database connection
mysqli_close($conn);
?>