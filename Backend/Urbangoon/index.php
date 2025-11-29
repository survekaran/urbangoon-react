<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Urbangoon Developers</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Add dropdown styling if not already in style.css */
    .auth-section {
      margin-left: auto;
      margin-right: 20px;
    }

    .user-dropdown {
      position: relative;
      display: inline-block;
    }

    .user-btn {
      background: #2c3e50;
      color: white;
      padding: 10px 14px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: #fff;
      min-width: 150px;
      box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
      z-index: 999;
      border-radius: 6px;
    }

    .dropdown-content a {
      color: #2c3e50;
      padding: 10px 14px;
      text-decoration: none;
      display: block;
      transition: background 0.3s;
    }

    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }

    .user-dropdown:hover .dropdown-content {
      display: block;
    }

    .navbar button {
      background: #2c3e50;
      color: white;
      padding: 10px 14px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>

<!-- Navbar -->
<nav class="navbar">
  <div class="logo">Urbangoon Developers</div>
  <ul class="nav-links">
    <li><a href="/Urbangoon/Urbangoon/index.php">Home</a></li>
    <li><a href="/Urbangoon/Urbangoon/about.html">About</a></li>
    <li><a href="http://localhost/Urbangoon/Urbangoon/project.html">Projects</a></li>    
    <li><a href="/Urbangoon/Urbangoon/contact.html">Contact</a></li>
  </ul>

  <div class="auth-section">
    <?php if (isset($_SESSION['user'])): ?>
      <div class="user-dropdown">
        <button class="user-btn"><?= htmlspecialchars($_SESSION['user']['name']) ?> ⌄</button>
        <div class="dropdown-content">
          <a href="#">My Info</a>
          <a href="logout.php">Logout</a>
        </div>
      </div>
    <?php else: ?>
      <button onclick="toggleModal()">Login</button>
    <?php endif; ?>
  </div>
</nav>

<!-- Login Modal -->
<div id="authModal" class="modal hidden">
  <div class="modal-content">
    <span class="close" onclick="toggleModal()">&times;</span>
    <h2 id="auth-title">Login</h2>
    <form id="authForm">
      <input type="email" name="email" placeholder="Email" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
    <p id="toggleAuth" onclick="toggleAuthMode()">Don't have an account? Sign up</p>
  </div>
</div>

<!-- Carousel Section -->
<section class="carousel">
  <div class="slides fade">
    <img src="image1.jpg" alt="Project 1" Heights="320px" , width="100px">
    <div class="caption">Mega Project in Karjat</div>
  </div>
  <div class="slides fade">
    <img src="image2.jpg" alt="Project 2" Heights='320px'>
    <div class="caption">Luxury Villas Coming Soon</div>
  </div>
  <div class="slides fade">
    <img src="image3.jpg" alt="Project 3">
    <div class="caption">Urban Heights – Now Booking</div>
  </div>

  <!-- Dots -->
  <div class="dots">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
  </div>
</section>

<!-- About Us -->
<section class="about">
  <h1>Why use Urbangoon Developers</h1>
  <div>
    <ul>
      <li>Trusted by Thousands: Over 500 satisfied homeowners.</li>
      <li>Affordable Luxury: Quality homes at competitive prices.</li>
      <li>Prime Locations: Projects in Karjat and surrounding areas.</li>
      <li>Customer-Centric Approach: Personalized service from start to finish.</li>
    </ul>
  </div>
  <h2>About Urbangoon Developers</h2>
  <p>We are a Karjat-based construction company dedicated to building modern and affordable living spaces. Trust, quality, and commitment define us.</p>
</section>

<!-- Footer -->
<footer>

  <p>📍 Karjat | 📞 +91 8691808553 | 📧 survekaran71@gmail.com</p>
</footer>

<script src="script.js"></script>
</body>
</html>
