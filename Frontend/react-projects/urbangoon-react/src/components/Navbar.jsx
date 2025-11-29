import styles from "../styles/Navbar.module.css";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <nav className={styles.navbar}>
      
      {/* LEFT: LOGO */}
      <div className={styles.logo}>
        <Link to="/">Urbangoon</Link>
      </div>

      {/* CENTER: MENU */}
      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* RIGHT: SEARCH + USER */}
      <div className={styles.rightSection}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search villas..." />
        </div>

        {/* LOGIN / USER */}
        <div className={styles.userBox}>
          {user ? (
            <Link to="/profile" className={styles.profileBtn}>
              <FaUserCircle size={26} />
            </Link>
          ) : (
            <div className={styles.authLinks}>
              <Link to="/login">Login</Link>
              <span> / </span>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
