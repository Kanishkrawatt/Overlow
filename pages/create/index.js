import React, { useEffect, useId, useRef, useMemo,useState } from "react";
import axios from "axios";
import { CheckUser, UserInfo } from "../../firebase/firebasefunction";
import SigninPage from "../../components/SignInPage";

function admin() {
  const Title = useRef();
  const Content = useRef();
  const Describe = useRef();
  const Img = useRef();
  const fid = useId();
  const u = useRef();
  const user = UserInfo();

  function submitfunc(e) {
    e.preventDefault();
    console.log(u);
    const date = new Date();
    let data = {
      fid,
      title: Title.current.value,
      content: Content.current.value,
      describe: Describe.current.value,
      image: Img.current.value,
      date,
      user:u,
    };
    console.log(data);
    axios.post("/api/blogEntry", data);
    Title.current.value = "";
    Content.current.value = "";
    Describe.current.value = "";
    Img.current.value = "";
  }

  return (
    <>
      {user ? (
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
                ref={Title}
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
                htmlFor="grid-password"
              >
                Uname
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                value={user.displayName}
                ref={user}

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
                ref={Describe}
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
                ref={Img}
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
                ref={Content}
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
      ) : (
        <SigninPage />
      )}
    </>
  );
}

export default admin;
