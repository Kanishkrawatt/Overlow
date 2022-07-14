import { useState } from 'react';
import styles from '../styles/Home.module.css'
import * as fs from "fs";
import BlogFrame from "../components/blogFrame";




function Home(props) {
  const [blog, setblog] = useState(props.array.slice(-3,props.array.length));
  return (
    <div className={styles.container}>
      
      
      <main className={styles.main}>
      <div className='h-[100vh]'>
      <div className="absolute">

      <h1 className="absolute top-[15rem] font-Dosis text-5xl inline left-[25rem] -z-[0]"></h1>
      <p></p>
      </div>
      <img className={styles.banner} src='https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'/>
      
      {/* <img className={styles.banner} src="img/front.jpg" /> */}
      </div>
      <div className="block h-[35rem] w-[100vw] bg-white">
        <div className='grid min-h-[18rem] w-[90vw] mx-auto mt-[5vw] gap-[5rem] grid-cols-1 lg:grid-cols-3 md:grid-cols-2' >
        {blog.map((item)=>{return(
        <BlogFrame key={item.slug} Item ={item}/>)})}
          
        </div>

      </div>
      


      </main>


    </div>
  )
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


export default Home;