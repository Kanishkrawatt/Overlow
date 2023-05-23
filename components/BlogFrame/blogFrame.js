import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
const BlogTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0 1rem;
  border-radius: 5rem;
  background-color: #303030;
  color: #fcfcfc;
`;
// white: {
//     100: "#fcfcfc",
//     200: "#fafafa",
//     300: "#f7f7f7",
//     400: "#f5f5f5",
//     500: "#f2f2f2",
//     600: "#c2c2c2",
//     700: "#919191",
//     800: "#616161",
//     900: "#303030"
// }
const BlogFrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  height: ${(props) => props.height};
  min-width: ${(props) => props.width};
  width: 25%;
  border-radius: 3rem;
  max-height: 65vh;
  color: black;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-family: "Rum Raisin", sans-serif;
  line-height: 1.2;
  @media (max-width: 984px) {
    width: 70vw;
    min-width: 70vw;
    height: 60vh;
  }
`;

const BlogImg = styled(Image)`
  height: 75%;
  width: 100%;
  z-index: 3;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  object-fit: cover;
  /*  Add Data on hover */
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: blur(4px);
  }
`;
const BlogTitle = styled.h1`
  font-size: 1.25rem;
  height: 10vh;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const Star = styled.div`
  font-size: 1.5rem;
  color: #ffd700;
`;
const EmptyStar = styled.div`
  font-size: 1.5rem;
  color: #d3d3d3;
  &:hover {
    color: #ffd700;
  }
`;
const BlogInfo = styled.div`
  display: flex;
  position: absolute;
  height: 49vh;
  min-width: 40vh;
  width: 22%;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  padding: 0 2rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;
`;

const StarRatings = ({ rating }) => {
  const stars = [];
  rating = rating > 5 ? 5 : rating;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star>★</Star>);
    } else {
      stars.push(<EmptyStar>☆</EmptyStar>);
    }
  }
  return <StarRating>{stars}</StarRating>;
};

const BlogDate = styled.p`
  font-size: 0.75rem;
  padding: 0 2rem 0rem;
`;

const BlogImgDiv = styled.div`
  height: 75%;
  position: relative;
  width: 100%;
  z-index: 3;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  object-fit: cover;
  /*  Add Data on hover */
  &:hover {
    cursor: pointer;
    opacity: 0.5;
    filter: blur(4px);
  }
`;

function blogFrame(props) {
  let item = props.Item;
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let size = props?.size;
  let height = 0;
  let width = 0;
  switch (size) {
    case "s":
      height = "40vh";
      width = "12vw";
      break;
    case "m":
      height = "50vh";
      width = "28vw";
      break;
    case "l":
      height = "60vh";
      width = "70vw";
      break;
    default:
      height = "60vh";
      width = "40vw";
  }
  return (
    <BlogFrameDiv
      height={item?.image ? height : item?.describe ? "30vh" : "10vh"}
      width={width}
    >
      {item?.describe && <BlogInfo>{item.describe}</BlogInfo>}
      {item?.image && (
        <BlogImgDiv>
          <BlogImg
            src={item.image}
            alt={item.title}
            placeholder="blur"
            layout="fill"
            blurDataURL={item.image}
          />
        </BlogImgDiv>
      )}
      <BlogTitleDiv>
        <Profile>K</Profile>
        <BlogTitle>
          {item?.title && <Link href={`/blogp/${item.fid}`}>{item.title}</Link>}
          {item?.date && (
            <BlogDate>
              {item.date.split("/")[1]} {months[item.date.split("-")[1] - 1]}{" "}
            </BlogDate>
          )}
        </BlogTitle>
      </BlogTitleDiv>
    </BlogFrameDiv>
  );
}

export default blogFrame;
