import React, { useEffect, useState } from "react";
import style from "../../styles/blog.module.css";
import BlogFrame from "../../components/blogFrame";
import db from "../../db";

// @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap');

// .container{
//     text-align: center;
    
// }

// .blog{
//     margin-top: 100px;
//     font-size: 4rem;
//     font-family: 'Dosis', sans-serif;

// }

// .container div{
//     cursor: pointer;
// }
// .container div h3{
//     font-size: 2rem;

// }
// .container div p{
//     font-size: 1rem;
// }
import styled from "styled-components";

const BlogDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  
  `
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

const BlogData= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  `;


function Blog(props) {
  const [blog, setblog] = useState(props.alldata);
  useEffect(() => {
    setblog(props.alldata)
}, [props.alldata])
  return (
      <BlogDiv>
        <BlogTitle>Blogs</BlogTitle>
        <BlogData>
          {blog.map((item,index) => {
            return (
              <BlogFrame key={index} Item={item} />
              
            );
          })}
        </BlogData>
      </BlogDiv>
  );
}
export async function getStaticProps() {
  let data = await db.collection('entries').get()
  let alldata = data.docs.map(entry =>entry.data() )
  return {
    props: { alldata }, // will be passed to the page component as props
    revalidate: 10,
  };
}

export default Blog;

{
  /* <div key={item.title}>
                <Link  href={`/blogp/${item.slug}`}>
                <div >
                <h3 >{item.title}</h3>
                <p>{item.disc.substr(0,100)}...</p>
  
}
<img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
/> */}