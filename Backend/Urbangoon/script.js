let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // Remove active from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and activate dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change slide every 4 seconds
    setTimeout(showSlides, 4000);
}

function toggleModal() {
  document.getElementById("authModal").classList.toggle("hidden");
}

let mode = 'login';
function toggleAuthMode() {
  const title = document.getElementById("auth-title");
  const toggleText = document.getElementById("toggleAuth");
  mode = mode === 'login' ? 'signup' : 'login';
  title.textContent = mode === 'login' ? "Login" : "Sign Up";
  toggleText.textContent = mode === 'login' ?
    "Don't have an account? Sign up" : "Already have an account? Login";
}

document.getElementById("authForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch(`auth/${mode}_handler.php`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    if (msg.includes("success")) {
      toggleModal();
      location.reload();
    }
  });
});

const userBox = document.getElementById("userBox");
const userName = document.getElementById("userName");
const userDropdown = document.getElementById("userDropdown");

document.getElementById("authForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const res = await fetch("login.php", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  if (data.status === "success") {
    document.getElementById("authModal").classList.add("hidden");
    userBox.classList.remove("hidden");
    userName.innerText = data.name;
  } else {
    alert("Invalid login");
  }
});

userBox.addEventListener("click", () => {
  userDropdown.classList.toggle("hidden");
});
