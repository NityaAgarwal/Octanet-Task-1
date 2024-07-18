import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./forgotpw.module.css";

export const Forgotpw = ({ onBackToLogin }) => {
  const handleSendClick = () => {
    alert("This page/functionality is under development");
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
            Forgot Password
        </div>
        <div className={styles.userDetails}>
            {/* email
            password
            login button */}

<form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id={styles.labels}>Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email here"/>
      </div>
      
      <div class="d-grid gap-2">
  <button class="btn btn-secondary" id="custom-border" type="button"  onClick={handleSendClick}>Submit</button>
</div>
<div className={styles.loginWith} ><a href="#" onClick={onBackToLogin}>Back to login</a></div>
    </form>

        </div>
        
        <div className={styles.forgotpw}>
        <img  src="forgotpw.png" alt="forgotpw image" />
        </div>
      </div>
    </section>
  );
};
