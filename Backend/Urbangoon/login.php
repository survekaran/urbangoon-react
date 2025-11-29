<?php
session_start();
$conn = new mysqli("localhost", "root", "", "urbangoon");

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password_hash'])) {
  $_SESSION['user'] = $user;
  echo json_encode(['status' => 'success', 'name' => $user['name']]);
} else {
  echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
}
?>