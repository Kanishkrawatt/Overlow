import React, { useEffect, useState } from "react";
import style from "../styles/blog.module.css";
import BlogFrame from "../components/blogFrame";
import * as fs from "fs";
import Image from "next/image";

function Blog(props) {
  const [blog, setblog] = useState(props.array);
  return (
    <div>
      <div className={style.container}>
        <h1 className={style.blog}>Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
          {blog.map((item) => {
            return (
              <BlogFrame key={item.slug} Item={item} />
              
            );
          })}
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogpost");
  let array = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let file = await fs.promises.readFile("blogpost/" + item, "utf-8");
    array.push(JSON.parse(file));
  }
  // res.status(200).json(array);

  // let fetchreq = await fetch("http://localhost:3000/api/post")
  // let data = await fetchreq.json();
  return {
    props: { array }, // will be passed to the page component as props
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