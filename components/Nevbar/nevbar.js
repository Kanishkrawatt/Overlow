import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NevbarUl, Nevbarli, HameBig, Hamli, Logo } from "./nevbarComponents";
import styles from "../../styles/hamburgerNevbar.module.css";
import Autherntication from "../Authentication/authentication";

function Nevbar() {
  let NevbarContent = [
    { Name: "Home", Link: "/" },
    { Name: "About", Link: "/about" },
    { Name: "Contact", Link: "/contact" },
    { Name: "Blog", Link: "/blog" },
  ];
  const [Ham, setHam] = useState(false);
  const toggleHeight = {
    width: Ham ? "100vw" : "0",
    transition: "width 0.5s",
  };
  const [navbar, changeNavbar] = useState(true);
  const navbarcolor = () => {
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
    <>
      <NevbarUl
        style={
          !navbar
            ? { backgroundColor: "white" }
            : { backgroundColor: "transparent" }
        }
      >
        <Link href="/">
          <Nevbarli className="absolute left-[10px] md:left-[10%] lg:left-[20%]">
            {" "}
            <Logo>O</Logo> Overlow
          </Nevbarli>
        </Link>
        {NevbarContent.map((content, index) => {
          return (
            <Link href={content.Link} key={index}>
              <Nevbarli>{content.Name}</Nevbarli>
            </Link>
          );
        })}
        <div
          id={`${styles.navicon1}`}
          className={`${Ham && styles.open}`}
          onClick={() => {
            setHam(!Ham);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <HameBig style={toggleHeight}>
          {NevbarContent.map((content, index) => {
            return (
              <Hamli key={index} onClick={() => setHam(!Ham)}>
                <Link href={content.Link}>{content.Name}</Link>
              </Hamli>
            );
          })}
        </HameBig>
      </NevbarUl>
      <Autherntication />
    </>
  );
}

export default Nevbar;
