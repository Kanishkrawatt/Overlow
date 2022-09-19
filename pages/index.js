import { useState } from "react";
import Foot from "../components/Foot";
import BlogFrame from "../components/blogFrame";
import db from "../db";
import styled from "styled-components";

export const flexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HomePage = styled(flexCenter)`
  height: 100vh;
  width: 100%;
  color: black;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
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
  min-height: 80vh;
  height: auto;
  width: 100%;
  color: black;
  gap: 2rem;
  text-align: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;
  margin-bottom: 2rem;`

export const BlogsTitle = styled(flexCenter)`
  height: auto;
  margin: 2rem 0rem;
  width: 100%;
  color: black;
  font-size: 2rem;
  gap: 2rem;
  text-align: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;`

export const HomeTitle = styled(flexCenter)`
  font-size: 4rem;
  font-weight: 700;
  color: black;
  transform: translateY(-100px);
  `
function Home(props) {
  const [blog, setblog] = useState(props.Alldata.slice(-3, props.Alldata.length));
  return (
    <>
    <HomePage>
      <HomeTitle>Overlow</HomeTitle>
    </HomePage>
    <BlogsTitle>LATEST BLOGS</BlogsTitle>
    <Blogs>
    {blog.map((item) => {
      return <BlogFrame key={item.id} Item={item} />;
    })}
    </Blogs>
    <BlogsTitle>POPULAR BLOGS</BlogsTitle>
    <Blogs>
    {blog.map((item) => {
      return <BlogFrame key={item.id} Item={item} />;
    })}
    </Blogs>
    <Foot />
    </>
  );
}
export async function getStaticProps(context) {
  let data = await db.collection("entries").get()
  let Alldata = data.docs.map(entry=>entry.data())
  return{
    props: { Alldata }, // will be passed to the page component as props
    revalidate: 1,
  };
}

export default Home;
