<?php
$host = "localhost";
$username = "root"; // change if not using XAMPP or similar
$password = "";     // default password is blank in XAMPP
$database = "urbangoon";

// Connect to DB
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect POST data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Sanitize & Insert into DB
$sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
