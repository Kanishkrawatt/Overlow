import React from "react";
import { useState } from "react";
import styles from "../styles/hamburgerNevbar.module.css";

function hamburgerNevbar() {
  const [effect, setEffect] = useState(false);

  return (
    <div
      id={`${styles.navicon1}`}
      className={`${effect && styles.open}`}
      onClick={() => {
        setEffect(!effect);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default hamburgerNevbar;
