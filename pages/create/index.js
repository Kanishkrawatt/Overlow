import React, { useRef } from "react";
import EditorTopbar from "../../components/Editor/EditorTopbar";
import styled from "styled-components";
import PreviewSection from "../../components/Editor/PreviewSection";
import { useId } from "react";
export const EditorPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
  background-color: #f5f5f5;
  margin-top: 10vh;
  padding: 0 2rem;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 10rem;
    height: 180vh;
  }
`;

export const EditorText = styled.div`
  width: 45%;
  height: 80%;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const Preview = styled.div`
  width: 45%;
  height: 80%;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  white-space: pre;
  padding: 1rem 2rem;
  overflow-y: scroll;
  @media (max-width: 1000px) {
    width: 100%;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  ol,
  ul {
    padding-left: 1rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  h2 {
    font-size: 1.75rem;
    font-weight: 600;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
  }
  h5 {
    font-size: 1rem;
    font-weight: 600;
  }
  h6 {
    font-size: 0.75rem;
    font-weight: 600;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
  }
  ul {
    font-size: 1rem;
    font-weight: 400;
    list-style: circle;
  }
  ol {
    font-size: 1rem;
    font-weight: 400;
    list-style: decimal;
  }
  blockquote {
    height: auto;
    width: 100%;
    border-left: 5px solid #eaeaea;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    font-weight: 400;
    background-color: #f1f6f5;
  }
  code {
    display: flex;
    height: auto;
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1rem;
    white-space: pre;
    font-weight: 400;
    background-color: #f1f6f5;
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  resize: none;
  background-color: #f1f6f5;
  overflow: auto;
  border-bottom: 1px solid black;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eaeaea;
  }
`;
export const PreviewTop = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding: 0 1rem;
  font-family: "Rum Raisin", sans-serif;
  letter-spacing: 0.125rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
`;

import showdown from "showdown";
import axios from "axios";
import auth from "../../firebase/auth";
const Editor = () => {
  const id = useId();
  const [text, setText] = React.useState("");
  const textref = useRef(null);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const user = auth?.currentUser;
  const save = React.useCallback(() => {
    const textToSave = textref.current.value;
    const converter = new showdown.Converter({
      disableForced4SpacesIndentedSublists: true,
      emoji: true,
      ghCodeBlocks: true,
      tables: true,
      strikethrough: true,
      tasklists: true,
      underline: true,
      backslashEscapesHTMLTags: true,
    });
    const values = textToSave.split("  ").join("\n");
    const html = converter.makeHtml(values);
    const title = values.split("\n")[0].split("# ")[1];
    const content = html.split("\n").slice(1).join("\n");
    axios.post("/api/blogEntry", {
      title,
      content,
      html,
      fid: id,
      author:
        auth?.currentUser?.displayName ??
        auth?.currentUser?.email ??
        "Anonymous",
      date: new Date(),
    });
  }, [textref]);

  return (
    <>
      {user ? (
        <EditorPage>
          <EditorText>
            <EditorTopbar textref={textref} save={save} />
            <TextArea ref={textref} onChange={handleChange} />
          </EditorText>
          <Preview>
            <PreviewTop>Preview</PreviewTop>
            <PreviewSection value={text} />
          </Preview>
        </EditorPage>
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Sign in to write a blog post</h1>
        </div>
      )}
    </>
  );
};

export default Editor;
