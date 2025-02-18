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


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Retrieve comments for a specific question
    $id = $_GET["id"];
    $sql = "SELECT * FROM comments WHERE Questions_idQuestion = '$id'";
    $result = $conn->query($sql);
  
    if ($result->num_rows > 0) {
      $comments = array();
      while ($row = $result->fetch_assoc()) {
        $comments[] = $row;
      }
      echo json_encode($comments);
    } else {
      echo "No comments found";
    }
  } 
  
  if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $id = $_GET["id"];
      $sql = "DELETE FROM questions WHERE idQuestion = '$id'";
      if ($conn->query($sql) === TRUE) {
        echo "Topic deleted successfully";
      } else {
        echo "Error deleting topic: " . $conn->error;
      }
    }
  


$conn->close();
?>