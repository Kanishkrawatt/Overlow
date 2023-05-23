import React, { useEffect, useState } from "react";
import db from "../../firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Markup } from "interweave";
import styled from "styled-components";

export const Heading = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  font-family: "Rum Raisin", sans-serif;
  letter-spacing: 0.124rem;
`;

export const BlogDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 10vw;
  width: 100%;
  min-height: 100vh;
  height: auto;
  flex-direction: column;
  margin: 6rem 0;
  ol,
  ul {
    padding-left: 1rem;
  }
  h1 {
    font-family: "Rum Raisin", sans-serif;
    letter-spacing: 0.125rem;
    margin: 0 0 1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
  h2 {
    font-family: "Rum Raisin", sans-serif;
    letter-spacing: 0.125rem;
    margin: 2rem 0 1rem;
    font-size: 1.75rem;
    font-weight: 600;
  }
  h3 {
    font-family: "Rum Raisin", sans-serif;
    letter-spacing: 0.125rem;
    margin: 2rem 0 1rem;

    font-size: 1.5rem;
    font-weight: 600;
  }
  h4 {
    font-family: "Rum Raisin", sans-serif;
    letter-spacing: 0.125rem;
    margin: 2rem 0 1rem;

    font-size: 1.25rem;
    font-weight: 600;
  }
  h5 {
    font-family: "Rum Raisin", sans-serif;
    letter-spacing: 0.125rem;
    margin: 2rem 0 1rem;

    font-size: 1rem;
    font-weight: 600;
  }
  h6 {
    font-family: "Rum Raisin", sans-serif;
    letter-spacing: 0.125rem;
    margin: 2rem 0 1rem;

    font-size: 0.75rem;
    font-weight: 600;
  }
  p {
    margin: 1rem 0;
    word-break: break-word;
    word-break: break-word;
    font-size: 1rem;
    font-weight: 400;
  }
  ul {
    font-size: 1rem;
    font-weight: 400;
    list-style: circle;
  }
  ol {
    font-size: 1rem;
    font-weight: 400;
    list-style: decimal;
  }
  blockquote {
    height: auto;
    width: 100%;
    border-left: 5px solid #eaeaea;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    font-weight: 400;
    background-color: #f1f6f5;
  }
  code {
    display: flex;
    height: auto;
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1rem;
    white-space: pre;
    font-weight: 400;
    margin: 1rem 0;
    background-color: #f1f6f5;
  }
`;
export default function Slug(props) {
  const [[data], setdata] = useState("");
  useEffect(() => {
    setdata(props.myBlog);
  }, [props.myBlog]);
  return (
    <BlogDiv>
      <Markup content={data?.html} />
    </BlogDiv>
  );
}
export async function getServerSideProps(content) {
  const { id } = content.query;
  const q = query(collection(db, "blogs"), where("fid", "==", id));
  const querySnapshot = await getDocs(q);
  const Alldata = querySnapshot.docs.map((doc) => doc.data());
  return {
    props: { myBlog: Alldata },
  };
}
