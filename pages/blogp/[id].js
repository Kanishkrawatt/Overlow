import React, { useEffect, useState } from "react";
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
export default function Slug(props) {
  const [data] = props.myBlog;
  return (
    <BlogDiv>
      <Heading>{data.title}</Heading>
      <p>{data.content}</p>
    </BlogDiv>
  );
}
export async function getServerSideProps(content) {
  const { id } = content.query;
  const data = await db.collection("entries").where("fid", "==", id).get();
  let Alldata = data.docs.map((entry) => entry.data());

  return {
    props: { myBlog: Alldata },
  };
}
