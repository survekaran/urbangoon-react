<?php
session_start();
if (!isset($_SESSION['user']) || $_SESSION['user']['email'] !== 'admin@example.com') {
  header("Location: ../index.html");
  exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Add Project</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div class="admin-panel">
        <h1>Add New Property/Project</h1>
        <form action="submit_project.php" method="post">
            <input type="text" name="project_name" placeholder="Project Name" required><br><br>
            <input type="text" name="location" placeholder="Location" required><br><br>
            <input type="text" name="price" placeholder="Price" required><br><br>
            <textarea name="description" rows="4" placeholder="Project Description"></textarea><br><br>
            <button class="admin-btn" type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
