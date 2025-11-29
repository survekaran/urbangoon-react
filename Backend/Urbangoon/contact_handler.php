<?php
header("Content-Type: application/json");

// Allow CORS (React → PHP)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Read JSON body
$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"];
$email = $data["email"];
$message = $data["message"];

// MySQL connection
$conn = new mysqli("localhost", "root", "", "urbangoon_db");

if ($conn->connect_error) {
    echo json_encode(["success" => false, "msg" => "DB Error"]);
    exit();
}

$stmt = $conn->prepare("INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

$stmt->close();
$conn->close();
?>
