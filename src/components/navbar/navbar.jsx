import React, {useState} from "react";
import styles from "./navbar.module.css";

// export const Header = () => {
  export const Header = ({onSignup, onBackToLogin, onBackToDropfile, onBackToHome}) => {
    const [menuOpen, setMenuOpen] = useState(false );
    const handleSendClick = () => {
      alert("This page/functionality is under development");
    };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="favicon.ico" alt="file fly logo" />
      </div>
      <div className={styles.menu}>
        <img 
        className={styles.menuBtn}
        src={
          menuOpen 
          ? "closeIcon.png" 
          : "menuIcon.png"
        } 
        alt="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
          <li><a href="/#" onClick={onBackToHome}>Home</a></li>
          <li><a href="/#" onClick={onBackToDropfile}>Send</a></li>
          <li><a href="/#" onClick={handleSendClick}>Receive</a></li>
          <li><a href="/#" onClick={onBackToLogin}>Login</a></li>
          <li><a href="/#" onClick={onSignup}>Signup</a></li>
        </ul>
      </div>
    </nav>
  );
};
