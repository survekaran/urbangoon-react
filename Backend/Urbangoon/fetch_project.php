<?php
$conn = new mysqli("localhost", "root", "", "urbangoon");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM projects";
$result = $conn->query($sql);

$projects = [];

while ($row = $result->fetch_assoc()) {
  $projects[] = $row;
}

header('Content-Type: application/json');
echo json_encode($projects);
?>
