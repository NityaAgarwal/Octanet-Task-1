import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./login.module.css";

export const Login = ({ onForgotPassword, onSignup }) => {
  const handleSendClick = () => {
    alert("This page/functionality is under development");
  };
  return (
    <section className={styles.container}>
      
      <div className={styles.content}>
        <div className={styles.heading}>
            Log-in
        </div>
        <div className={styles.userDetails}>

<form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id={styles.labels}>Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email here"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" id={styles.labels}>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password here"/>
        <div id="emailHelp" className={`${styles.small} ${styles.forgotQues}`} ><span>
          <a href="#" onClick={onForgotPassword} >Forgot password?</a></span></div>

      </div>
      <div class="d-grid gap-2">
  <button class="btn btn-secondary" id="custom-border" type="button" onClick={handleSendClick}>Login</button>
</div>
    </form>

        </div>
        <div className={styles.otherOptions}>
            <div className={styles.small}>Don't have an account? <span><a href="#" onClick={onSignup}>Sign up</a></span></div>
            <div>
              <hr></hr>
              <div className={styles.loginWith} id={styles.loginWithID}>Or login with</div>
              <div className={styles.icons}>
                <img src="/icons8-facebook.svg"></img>
                <img src="/icons8-gmail.svg"></img>
              </div>
            </div>
        </div>
        <div className={styles.forgotpw}>
        <img  src="forgotpw.png" alt="forgotpw image" />
        </div>
      </div>
    </section>
  );
};
