import React, { useState } from 'react'
import style from '../../styles/each.module.css'
import * as fs from "fs"; 



function Slug(props) {
  function createMarkup(d) {
    return {__html: d};
  }
  
    const [data, setdata] = useState(props.myBlog)
    // console.log(data);
    return (
  
      <div className={style.div1}>
      <h1 className={style.title}>{data && data.title.toUpperCase()}</h1>
      
      {data &&<div className={style.disc} dangerouslySetInnerHTML={createMarkup(data.content)} />}
      <p className={style.date}>{data && data.date}</p>
      </div>
    )
}
export async function getStaticPaths() {
  const files = [];
  let file = await fs.promises.readdir("blogpost");
  for(let i = 0;i<file.length;i++){
    let item = file[i];
    let slug = item.slice(0,-5);
    // console.log(item.slice(0,-5));
    let obj = {params:{slug}}
    // console.log(obj);
    files.push(obj);
  }
  // console.log(files);
  
  return {
    
      paths: files,
      fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  // console.log("hi");

  let myBlog = await fs.promises.readFile(`blogpost/${slug}.json`, 'utf-8')

  return {
      props: { myBlog:JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}

export default Slug


