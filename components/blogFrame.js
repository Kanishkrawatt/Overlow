import React from "react";
import Link from "next/link";

function blogFrame(props) {
  let item = props.Item;
  return (
    <div key={item.slug} className="flex ">
      
        <div  className="w-[300px] md:min-w-[400px] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          {/* <a href="#" >
            <img
               className="rounded-t-lg"
              src={item.img}
              alt=""
            />
          </a> */}
          <div  className="p-5">
            <a href="#">
              <h5  className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title.toUpperCase()}
              </h5>
            </a>
            <p  className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.disc.substr(0,100)}
            </p>
            <Link href={`/blogp/${item.slug}`}>
            <a
              href="#"
               className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                 className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            </Link>
            
          </div>
        </div>
      
    </div>
  );
}

export default blogFrame;

// <div key={item.slug} className="flex ">
//               <Link  href={`/blogp/${item.slug}`}>
//                 <div className="flex flex-col md:flex-row  bg-white shadow-lg">
//                     <img className=" w-full h-%{} md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={item.img} alt="Sunset in the mountains"/>
//                   <div className="p-6 flex flex-col justify-start max-w-[200px] max-h-[300px]">
//                     <h1 className="text-gray-900 text-xl font-medium mb-5">
//                       {item.title.toUpperCase()}
//                     </h1>

//                     <p className="text-gray-700 mb-4">
//                       {item.disc.substr(0,100)}
//                     </p>

//                     <p className="text-gray-600 text-sm italic bg-red-300 absolute -bottom-[300px]" >-{item.date}</p>
//                   </div>
//                 </div>
//                 </Link>
//               </div>
