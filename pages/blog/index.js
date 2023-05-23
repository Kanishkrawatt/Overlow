import React, { useEffect, useState } from "react";
import BlogFrame from "../../components/BlogFrame/blogFrame";
import db from "../../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

import styled from "styled-components";

const BlogDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BlogTitle = styled.h1`
  font-size: 1.25rem;
  padding: 2rem 2rem 1rem;
  margin: 4rem 0rem;
  font-size: 3rem;
  font-family: "Rum Raisin", sans-serif;
  font-variant: small-caps;
  font-smooth: 2rem;
  cursor: pointer;
`;

const BlogData = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

function Blog(props) {
  const [blog, setblog] = useState(props.alldata);
  useEffect(() => {
    setblog(props.alldata);
  }, [props.alldata]);
  return (
    <BlogDiv>
      <BlogTitle>Blogs</BlogTitle>
      <BlogData>
        {blog.map((item, index) => {
          return <BlogFrame key={index} Item={item} />;
        })}
      </BlogData>
    </BlogDiv>
  );
}
export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, "entries"));
  const alldata = querySnapshot.docs.map((doc) => doc.data());
  return {
    props: { alldata },
    revalidate: 10,
  };
}

export default Blog;
