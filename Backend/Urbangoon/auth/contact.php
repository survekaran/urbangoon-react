<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

// Read incoming JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["name"]) || !isset($data["email"]) || !isset($data["message"])) {
    echo json_encode(["status" => "error", "message" => "Invalid data"]);
    exit;
}

// Extract variables
$name = trim($data["name"]);
$email = trim($data["email"]);
$message = trim($data["message"]);

// 📝 For now, we’ll just save it in a file (later DB)
$file = fopen("../messages.txt", "a");
fwrite($file, "Name: $name | Email: $email | Message: $message\n");
fclose($file);

// Send success response back to React
echo json_encode(["status" => "success", "message" => "Message received"]);
