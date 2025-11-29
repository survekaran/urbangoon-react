import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ⭐ TEMPORARY STYLE TO MAKE SIGNUP FORM VISIBLE
  const containerStyle = {
    width: "400px",
    margin: "120px auto",
    padding: "30px",
    background: "#ffffff",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "8px",
    background: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
  };

  const handleSignup = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost/Urbangoon/Urbangoon/auth/signup_handler.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Account created!");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error connecting to server.");
    }

    setLoading(false);
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Create Account
      </h2>

      <input
        type="text"
        placeholder="Username"
        style={inputStyle}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        style={inputStyle}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={buttonStyle} onClick={handleSignup} disabled={loading}>
        {loading ? "Creating account..." : "Signup"}
      </button>
    </div>
  );
}

export default Signup;
