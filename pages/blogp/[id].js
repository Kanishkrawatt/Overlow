import React, { useState } from "react";
import db from "../../db";
import styled from "styled-components";

export const Heading = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  font-family: "Rum Raisin", sans-serif;
  letter-spacing: 0.124rem;
`;
export const BlogDiv = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  margin-top: 6rem;
`;
function Slug(props) {
  function createMarkup(d) {
    return { __html: d };
  }

  const [data] = props.myBlog;
  return (
    <BlogDiv>
      <Heading>{data.title}</Heading>
      <p>{data.content}</p>
    </BlogDiv>
  );
}
export async function getStaticPaths() {
  let data = await db.collection("entries").get();
  let alldata = data.docs.map((entry) => entry.data());
  const Paths = alldata.map((content) => {
    return {
      params: { id: content.fid.toString() },
    };
  });
  return {
    paths: Paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { id } = context.params;
  const data = await db.collection("entries").where("fid", "==", id).get();
  let Alldata = data.docs.map((entry) => entry.data());

  return {
    props: { myBlog: Alldata },
    revalidate: 10,
  };
}

export default Slug;
