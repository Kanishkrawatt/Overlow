import React from "react";
import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D6D5CB;
  height: 20vh;
  width: 100%;
  color: black;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;`
function Foot() {
  return (
    <Footer>
      {/* <div className="text-center p-4" style={{ backgroundColor: "#D6D5CB" }}> */}
        © 2021 Copyright: Overlow<br/>
        Designed By Kanishk
    </Footer>
  );
}

export default Foot;
