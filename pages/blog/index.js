import React, { useEffect, useState } from "react";
import style from "../../styles/blog.module.css";
import BlogFrame from "../../components/blogFrame";
import db from "../../db";

function Blog(props) {
  const [blog, setblog] = useState(props.alldata);
  return (
    <div>
      <div className={style.container}>
        <h1 className={`${style.blog} mb-5`}>Blogs</h1>
        <div className="flex justify-center flex-wrap gap-5  sm:gap-20 ">
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
  let data = await db.collection('entries').get()
  let alldata = data.docs.map(entry =>entry.data() )
  return {
    props: { alldata }, // will be passed to the page component as props
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