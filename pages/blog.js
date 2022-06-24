import React, { useEffect, useState } from "react";
import style from "../styles/blog.module.css";
import Link from "next/link";
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
              <div key={item.slug} className="flex ">
              <Link  href={`/blogp/${item.slug}`}>
                <div className="flex flex-col md:flex-row  bg-white shadow-lg">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={item.img} alt="Sunset in the mountains"/>
                  <div className="p-6 flex flex-col justify-start">
                    <h1 className="text-gray-900 text-xl font-medium mb-5">
                      {item.title.toUpperCase()}
                    </h1>
                    
                    <p className="text-gray-700 mb-4">
                      {item.disc.substr(0,100)}
                    </p>
                    
                    <p className="text-gray-600 text-sm italic mt-5 ">{item.date}</p>
                  </div>
                </div>
                </Link>
              </div>
              
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