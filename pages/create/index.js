import React, { useState } from "react";
import axios from "axios";

function admin() {
  const [BlogTitle, setBlogTitle] = useState("");
  const [BlogSlug, setBlogSlug] = useState("");
  const [BlogContent, setBlogContent] = useState("");
  const [BlogDisc, setBlogDisc] = useState("");
  const [BlogImg, setBlogImg] = useState("");

  function submitfunc(e) {
    e.preventDefault();

    const d = new Date();
    let img = BlogImg;

    let data = {
      title: BlogTitle,
      disc: BlogDisc,
      slug: BlogSlug,
      content: BlogContent,
      img,
    };
    axios.post("/api/blogEntry", data);
    setBlogTitle("");
    setBlogSlug("");
    setBlogContent("");
    setBlogDisc("");
    setBlogImg("");
  }

  return (
    <form className="w-full max-w-lg mx-auto my-[5%]" onSubmit={submitfunc}>
      <h1 className="text-2xl text-center font-bold mb-[50px] mt-5">
        Create Blog
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="grid-first-name"
          >
            Blog Title
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            value={BlogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-password"
          >
            Blog Slug
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={BlogSlug}
            onChange={(e) => setBlogSlug(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-password"
          >
            Blog Disciption
          </label>
          <textarea
            rows="3"
            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  resize-none"
            type="text"
            value={BlogDisc}
            onChange={(e) => setBlogDisc(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-password"
          >
            Blog Img
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={BlogImg}
            onChange={(e) => setBlogImg(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
            htmlFor="grid-password"
          >
            Blog Content
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            value={BlogContent}
            onChange={(e) => setBlogContent(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded"
            type="submit"
          >
            Create Blog
          </button>
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
  );
}

export default admin;
