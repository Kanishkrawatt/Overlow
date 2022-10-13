import React, { useState } from 'react'
import style from '../../styles/each.module.css'
import db from '../../db';


function Slug(props) {
  function createMarkup(d) {
    return {__html: d};
  }
  
    const [data]=props.myBlog
    return (
  
      <div className={style.div1}>
      <h1 className={style.title}>{data && data.title}</h1>
      
      {data &&<div className={style.disc} dangerouslySetInnerHTML={createMarkup(data.content)} />}
      <p className={style.date}>{data && data.date}</p>
      </div>
    )
}
export async function getStaticPaths() {
  let data = await db.collection('entries').get()
  let alldata = data.docs.map(entry =>entry.data() )
  const Paths =alldata.map((content)=>{
    return{
    params:{id:content.id.toString()},
  }
  });
  return {
    
      paths: Paths,
      fallback: true 
  };
}
export async function getStaticProps(context) {
  const {id} = context.params;
  const data = await db.collection("entries").where("id", "==", id).get();
  let Alldata = data.docs.map((entry) => entry.data());


  return {
      props: { myBlog:Alldata},
      revalidate: 10,
  }
}


export default Slug
