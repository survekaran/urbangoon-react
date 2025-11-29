<?php
session_start();
if (!isset($_SESSION['user']) || $_SESSION['user']['email'] !== 'admin@example.com') {
  header("Location: ../index.html");
  exit();
}
?>
