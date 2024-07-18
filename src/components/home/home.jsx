import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './home.module.css';

export const Home = ({onBackToDropfile, onBackToLogin}) => {
  const handleSendClick = () => {
    alert("This page/functionality is under development");
  };
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.header}>
         <div className={styles.project}>
          <img src="favicon.ico" alt="project logo" />
          <div>File Fly</div>
         </div>
         <div className={styles.headerBtns}>
         <div className={styles.demo} onClick={handleSendClick}>Watch Demo</div>
         <div className={styles.demoNarrow} onClick={handleSendClick}>
<img src="/videoIcon.svg" alt="watch demo" />

         </div>


         <div className={styles.getStartedBtn} onClick={onBackToLogin}>Get Started</div>
         <div className={styles.getStartedNarrow} onClick={onBackToLogin}>
<img src="/user.svg" alt="login"/>

         </div>
         </div>
          
        </div>
        <div className={styles.heading}>
        <div>Share your files <span>on the fly</span></div>
        <div className={styles.narrowScreens}>on the fly</div>
        </div>
        <div className={styles.subheading}>
            <div>Simplify file transfers. Empower your productivity with our intuitive interface.</div>
        </div>
        <div className={styles.startNow}>
        <div  onClick={onBackToDropfile}>Start for free</div>


        </div>


        
        </div>
    </div>
  );
};

/*
header - 5%
heading - 40%
subheading - 20%
start now - 35%
*/