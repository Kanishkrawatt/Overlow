import styled from "styled-components";

export const NevbarUl = styled.ul`
  display: flex;
  position: fixed;
  width: 100vw;
  top: 0px;
  height: 4rem;
  background-color: transparent;
  padding-inline-start: 0;
  margin: 0px;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
`;
export const Nevbarli = styled.li`
  list-style: none;
  margin-top: 1.3rem;
  padding: 0 1.25rem;
  font-size: smaller;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  &:hover {
    color: #f7f6dc;
  }
  &:active {
    color: darkgrey;
  }
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
export const HamMenu = styled.div`
  display: none;
  height: 40px;
  width: 40px;
  margin: 10px;
  margin-right: 5px;
  margin-top: 17px;
  position: absolute;
  right: 0px;
  cursor: pointer;
  z-index: 5;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const HamburgerMenu = styled.span`
  position: absolute;
  display: block;
  background-color: black;
  border-radius: 100px;
  height: 3px;
  width: 30px;
  opacity: 1;
  left: 0;
  top: ${(prompt) => prompt.top}px;
`;
export const HameBig = styled.div`
  height: 100vh;
  position: fixed;
  right: 0px;
  top: 0px;
  padding-top: 20vh;
  list-style: none;
  display: block;
  background-color: white;
`;

export const Hamli = styled.li`
  margin-bottom: 5rem;
  margin-left: 45%;
`;

export const Logo = styled.div`
  display: block;
  height: 20px;
  width: 20px;
  color: white;
  font-size: x-small;
  border-radius: 50%;
  background-color: black;
  transform: translateX(8px);
`;
