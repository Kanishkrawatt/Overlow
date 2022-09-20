// import React, { useState } from 'react'
// import style from '../../styles/each.module.css'
// import db from '../../db';


// function Slug(props) {
//   function createMarkup(d) {
//     return {__html: d};
//   }
  
//     const [data, setdata] = useState(props.myBlog)
//     // console.log(data);
//     return (
  
//       <div className={style.div1}>
//       <h1 className={style.title}>{data && data.title.toUpperCase()}</h1>
      
//       {data &&<div className={style.disc} dangerouslySetInnerHTML={createMarkup(data.content)} />}
//       <p className={style.date}>{data && data.date}</p>
//       </div>
//     )
// }
// export async function getStaticPaths() {
//   const Paths = [];
//   // let file = await fs.promises.readdir("blogpost");
//   const doc = await db.collection("entries").get();
//   console.log(doc);
//   doc.forEach((content)=>{
//     let obj = {params:{content}}
//     Paths.push(obj)
//   })

//   // for(let i = 0;i<file.length;i++){
//   //   let item = file[i];
//   //   let slug = item.slice(0,-5);
//   //   let obj = {params:{slug}}
//   //   files.push(obj);
//   // }
  
//   return {
    
//       paths: Paths,
//       fallback: true // false or 'blocking'
//   };
// }

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const doc = await db.collection('entries').doc(id).get();
//   let Alldata = doc.data()


//   return {
//       props: { myBlog:JSON.parse(Alldata)}, // will be passed to the page component as props
//   }
// }

// export default Slug


