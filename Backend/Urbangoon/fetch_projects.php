<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "urbangoon";

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die("DB Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM projects ORDER BY created_at DESC";
$result = $conn->query($sql);

$projects = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
}

echo json_encode($projects);

$conn->close();
?>
