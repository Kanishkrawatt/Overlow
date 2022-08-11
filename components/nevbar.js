import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Autherntication from "./autherntication";
import HamburgerNevbar from "./hamburgerMenu"

function nevbar() {
  const [navbar, changeNavbar] = useState(true);
  const navbarcolor = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 40) {
      changeNavbar(false);
    } else {
      changeNavbar(true);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", navbarcolor);
  }
  return (
    <div className={navbar ? styles.nevbar : styles.activenevbar}>
      <ul className={styles.nevbarul}>
        <li className="absolute left-[10px] md:left-[10%] lg:left-[20%]">
          {" "}
          <p className={styles.logo}>O</p> Overlow
        </li>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <li>
          <Autherntication />
        </li>

      </ul>
      <HamburgerNevbar />
    </div>
  );
}

export default nevbar;
