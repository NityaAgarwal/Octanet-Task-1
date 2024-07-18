import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./signup.module.css";

export const Signup = ({ onBackToLogin }) => {
  const handleSendClick = () => {
    alert("This page/functionality is under development");
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>
            Sign-up
        </div>
        <div className={styles.userDetails}>
<form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id={styles.labels}>Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name here"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id={styles.labels}>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email here"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" id={styles.labels}>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password here"/>

      </div>
      <div class="d-grid gap-2">
  <button class="btn btn-secondary" id="custom-border" type="button" onClick={handleSendClick}>Signup</button>
{/* ----------------------------- */}
  <div className={styles.otherOptions}>
    <hr></hr>
            <div className={styles.small}>Already have an account? <span><a href="#" onClick={onBackToLogin}>Back to Login</a></span></div>
        </div>
{/* ---------------------------------- */}
</div>
    </form>

        </div>
        <div className={styles.forgotpw}>
        <img  src="forgotpw.png" alt="forgotpw image" />
        </div>
      </div>
    </section>
  );
};
