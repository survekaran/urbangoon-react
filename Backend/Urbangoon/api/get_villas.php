<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

// CONNECT TO CORRECT DATABASE
$conn = new mysqli("localhost", "root", "", "urbangoon_db");

// DEBUG: If database fails
if ($conn->connect_error) {
    echo json_encode(["error" => $conn->connect_error]);
    exit;
}

$result = $conn->query("SELECT * FROM villas");
$villas = [];

while ($row = $result->fetch_assoc()) {
    $row['amenities'] = explode(",", $row['amenities']);
    $villas[] = $row;
}

echo json_encode($villas);
