<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

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

$sql = "SELECT * FROM questions";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  $forum_data = array();
  while($row = $result->fetch_assoc()) {
    array_push($forum_data, $row);
  }
  echo json_encode($forum_data);
} else {
  echo "0 results";
}
$conn->close();
?>
