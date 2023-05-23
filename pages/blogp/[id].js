import React, { useEffect, useState } from "react";
import db from "../../firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

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
      <Heading>{data?.title}</Heading>
      <p>{data?.content}</p>
    </BlogDiv>
  );
}
export async function getServerSideProps(content) {
  const { id } = content.query;
  const q = query(collection(db, "entries"), where("fid", "==", id));
  const querySnapshot = await getDocs(q);
  const Alldata = querySnapshot.docs.map((doc) => doc.data());
  return {
    props: { myBlog: Alldata },
  };
}
