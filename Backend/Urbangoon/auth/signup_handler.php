<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Read JSON body
$json = file_get_contents("php://input");
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No data received"]);
    exit;
}

$username = $data["username"] ?? "";
$email = $data["email"] ?? "";
$password = $data["password"] ?? "";

if (!$username || !$email || !$password) {
    echo json_encode(["success" => false, "message" => "Missing fields"]);
    exit;
}

$conn = new mysqli("localhost", "root", "", "urbangoon_db");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "DB connection error"]);
    exit;
}

$hashed = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed')";

if ($conn->query($sql)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Insert failed"]);
}
?>
