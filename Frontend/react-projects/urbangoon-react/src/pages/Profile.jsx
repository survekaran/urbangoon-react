function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div style={{ padding: "50px" }}>
      <h1>Your Profile</h1>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}

export default Profile;
