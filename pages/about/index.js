import React from "react";
import styled from "styled-components";

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  height: 100vh;
  padding: 3rem;
  width: 100%;`

export const AboutHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-variant: small-caps;
  font-smooth: inherit;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;`

function about() {
  return (
    <AboutDiv>
      <AboutHeading>
        Learn More About Us.
      </AboutHeading>
      <p className="sm:px-[10vh] px-[3vh] text-xl text-Dosis tracking-wider">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        blanditiis omnis qui harum atque quod delectus et in, ullam dicta
        aliquam quae illum placeat tempora facere repellendus facilis
        accusantium ipsa quibusdam corrupti ipsum quam, incidunt culpa! Officia
        repudiandae culpa, natus accusantium velit expedita cupiditate mollitia,
        esse, distinctio quibusdam quam. Ad?
      </p>
    </AboutDiv>
  );
}

export default about;
