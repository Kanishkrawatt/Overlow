import { useState } from "react";
import Foot from "../components/Footer/Foot";
import BlogFrame from "../components/BlogFrame/blogFrame";
import db from "../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";
import { SButton } from "../components/Authentication/authentication";
import Link from "next/link";

export const flexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomePage = styled(flexCenter)`
  height: 100vh;
  width: 100%;
  color: black;
  flex-direction: column;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  font-variant: small-caps;
  font-smooth: inherit;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: -1;
    opacity: 0.5;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.8;
  }
`;

export const Blogs = styled(flexCenter)`
  min-height: 50vh;
  height: auto;
  width: 90vw;
  color: black;
  gap: 2rem;
  text-align: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;
  margin-bottom: 2rem;
`;

export const BlogsTitle = styled(flexCenter)`
  height: auto;
  padding: 2rem 0;
  margin: 2rem;
  width: auto;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  border-radius: 1rem;
  color: black;
  font-size: 2rem;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-variant: small-caps;
  font-smooth: inherit;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;
`;

export const HomeTitle = styled(flexCenter)`
  font-size: 4rem;
  font-weight: 700;
  color: black;
  transform: translateY(-100px);
`;
function Home(props) {
  const [blog, setblog] = useState(
    props.Alldata.slice(-3, props.Alldata.length)
  );
  return (
    <>
      <HomePage>
        <HomeTitle>Overlow</HomeTitle>
        <Link href="/create">
          <SButton
            style={{
              minWidth: "11%",
              fontSize: "0.75rem",
              backgroundColor: "white",
              border: "1px solid black",
              transform: "translateY(-70px)",
            }}
          >
            Create Blog
          </SButton>
        </Link>
      </HomePage>
      <BlogsTitle>
        LATEST BLOGS
        <Blogs>
          {blog.map((item, index) => {
            return <BlogFrame key={index} Item={item} size={"m"} />;
          })}
        </Blogs>
      </BlogsTitle>
      <BlogsTitle>
        POPULAR BLOGS
        <Blogs>
          {blog.map((item, index) => {
            return <BlogFrame key={index} Item={item} size={"m"} />;
          })}
        </Blogs>
      </BlogsTitle>
    </>
  );
}
export async function getStaticProps(context) {
  const querySnapshot = await getDocs(collection(db, "entries"));
  const Alldata = querySnapshot.docs.map((doc) => doc.data());
  return {
    props: { Alldata }, // will be passed to the page component as props
    revalidate: 1,
  };
}

export default Home;
