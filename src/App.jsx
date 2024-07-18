import React, { useState } from 'react';
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Dropfile } from "./components/dropfile/dropfile";
import { Header } from "./components/navbar/navbar";
import { Login } from "./components/login/login";
import { Signup } from "./components/signup/signup";
import { Forgotpw } from "./components/forgotpw/forgotpw";
import { Home } from "./components/home/home";

function App() {
  const [view, setView] = useState('home');

  const handleForgotPassword = () => {
    setView('forgotpw');
  };

  const handleBackToLogin = () => {
    setView('login');
  };

  const handleSignup = () => {
    setView('signup');
  };

  const handleBackToDropfile = () => {
    setView('dropfile');
  };

  const handleBackToHome = () => {
    setView('home');
  };

  return (
    <div className={styles.container}>
      {/* <Header onSignup={handleSignup} onBackToLogin={handleBackToLogin} onBackToDropfile={handleBackToDropfile}/>
       */}
       {view !== 'home' && (
        <Header onSignup={handleSignup} onBackToLogin={handleBackToLogin} onBackToDropfile={handleBackToDropfile} onBackToHome={handleBackToHome}/>
      )}
      <div className={styles.components}>
        {view === 'login' && <Login onForgotPassword={handleForgotPassword} onSignup={handleSignup} />}
        {view === 'forgotpw' && <Forgotpw onBackToLogin={handleBackToLogin} />}
        {view === 'signup' && <Signup onBackToLogin={handleBackToLogin} />}
        {view === 'dropfile' && <Dropfile onBackToDropfile={handleBackToDropfile} />}
        {view === 'home' && <Home onBackToDropfile={handleBackToDropfile} onBackToLogin={handleBackToLogin}/>}
      </div>
    </div>
  );
}

export default App;
