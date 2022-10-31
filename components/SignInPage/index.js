import Image from "next/image";
import { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebasefunction";
import styled from "styled-components";
import { AboutDiv } from "../../pages/about";
import { SButton } from "../Authentication/authentication";
export const Page = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 25%;
  border-radius: 2rem;
  padding: 2rem;
  background: linear-gradient(45deg, #97c4b8 30%, #ccf3ee 70%);
`;
export const InputBox = styled.input`
  padding: 1rem;
  width: 100%;
  margin: 10px 0 10px 0;
  border-radius: 1rem;
`;
export const Submitbtn = styled(SButton)`
  background: white ;
  padding: 1.5rem;
  color: black;
  width: 100%;
  margin: 2rem;
`;
export const MainDiv = styled(AboutDiv)``;
function SigninPage() {
  const [state, setState] = useState(false);

  return (
    <MainDiv>
      <Page>
        <Image src="/user.png" height="100px" width="100px" alt="user" />
        {state && <InputBox type="text" id="Email" placeholder="Email" />}
        <InputBox type="text" id="username" placeholder="Username" />
        <InputBox type="Password" id="password" placeholder="Password" />
        <Submitbtn style={{ marginBottom: "1rem" }} type="button" id="button">
          {state ? "Sign up" : "Login"}
        </Submitbtn>
        <Submitbtn type="button" id="button" style={{ marginTop: "0" }} onClick={()=>{signInWithGoogle();console.log("hi")}}>
          {state ? "Sign up" : "Login"} with Google
        </Submitbtn>
        <p style={{cursor:"pointer"}}
          onClick={() => {
            setState((s) => !s);
          }}
        >
          {state ? "Already have account ." : "Create account"}
        </p>
      </Page>
    </MainDiv>
  );
}

export default SigninPage;
