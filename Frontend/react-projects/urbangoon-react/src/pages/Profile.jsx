import styles from "../styles/Profile.module.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  if (!user) {
    return (
      <div className={styles.profileBox}>
        <h2>You are not logged in</h2>
        <a href="/login" className={styles.loginBtn}>Go to Login</a>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className={styles.profileBox}>
      <img
        src="https://api.dicebear.com/7.x/identicon/svg?seed=user"
        className={styles.avatar}
      />

      <h1>{user.username}</h1>
      <p>{user.email}</p>

      <button onClick={handleLogout} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
