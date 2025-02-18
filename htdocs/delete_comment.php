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

      $sql = "DELETE FROM comments WHERE idComment = '$id'";
      if ($conn->query($sql) === TRUE) {
        echo "Comment deleted successfully";
      } else {
        echo "Error deleting comment: " . $conn->error;
      }
      
$conn->close();
?>