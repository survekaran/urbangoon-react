<?php
session_start();
if (!isset($_SESSION['admin_name'])) {
    header("Location: login.php");
    exit;
}
?>


<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <style>
        .profile-box {
            cursor: pointer;
            background: #f0f0f0;
            padding: 10px;
            display: inline-block;
            border-radius: 5px;
            position: relative;
        }

        .dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 10px;
            z-index: 999;
        }

        .dropdown a {
            display: block;
            text-decoration: none;
            color: black;
            padding: 5px 0;
        }

        .dropdown a:hover {
            background-color: #f4f4f4;
        }
    </style>
    <script>
        function toggleDropdown() {
            const dropdown = document.getElementById("dropdown-menu");
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }

        window.onclick = function(event) {
            if (!event.target.closest('.profile-box')) {
                document.getElementById("dropdown-menu").style.display = "none";
            }
        }
    </script>
</head>
<body>

    <h1>Welcome, <?php echo $_SESSION['admin_name']; ?></h1>

    <div class="profile-box" onclick="toggleDropdown()">
        <?php echo $_SESSION['admin_name']; ?> ▼
        <div id="dropdown-menu" class="dropdown">
            <a href="#">My Info</a>
            <a href="logout.php">Logout</a>
        </div>
    </div>

    <!-- Your dashboard content below -->

</body>
</html>
