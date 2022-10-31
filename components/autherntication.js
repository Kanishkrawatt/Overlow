import React, { useState } from "react";
import styled from "styled-components";

import {
  signInWithGoogle,
  signOutWithGoogle,
  UserInfo,
} from "../firebase/firebasefunction";

export const DropDownMenu = styled.div`
  height: 20vh;
  width: 10vw;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: white;
  top: 0.5rem;
  gap: 0.5rem;
  right: 1rem;
  border-radius: 2rem;
  padding-bottom: 2rem;
`;
export const RoundButton = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  z-index: 20;
  position: fixed;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  top: 0.75rem;
  right: 1.25rem;
  cursor: pointer;
  &::selection {
    background-color: transparent;
  }
  @media (max-width: 600px){
    display: none;
}
`;  
export const SButton = styled.div`
  border: 1px solid #c2c2c2;
  padding: 1.2rem 2rem;
  width: 80%;
  height: 2rem;
  display: flex;
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;
function autherntication() {
  const [menu, setMenu] = useState(false);
  const user = UserInfo();
  const signIn = () => {
    signInWithGoogle();
  };
  const signOut = () => {
    signOutWithGoogle();
  };
  let photoURL;
  if (user !== null) {
    photoURL = user.photoURL;
  }
  const ButtonClickEffect = {
    backgroundColor: "#f2f2f2",
    color: "black",
    border: "0px",
    height: "2.5rem",
    width: "2.5rem",
    margin: "5px",
  };

  return (
    <>
      <RoundButton
        style={menu ? ButtonClickEffect : {}}
        onClick={() => {
          setMenu((m) => !m);
        }}
      >
        {menu ? (
          "X"
        ) : user ? (
          <img className="rounded-full " src={photoURL} alt="P" />
        ) : (
          "N/A"
        )}
      </RoundButton>
      {menu && (
        <DropDownMenu>
          <SButton>Profile</SButton>
          <SButton
            onClick={() => {
              user ? signOut() : signIn();
              setMenu((m) => !m);
            }}
          >
            {user ? "SignOut" : "SignIn"}
          </SButton>
        </DropDownMenu>
      )}
    </>
  );
}

export default autherntication;
