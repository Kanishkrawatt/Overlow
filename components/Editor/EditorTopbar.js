import React from "react";
import styled from "styled-components";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CodeIcon from "@mui/icons-material/Code";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ImageIcon from "@mui/icons-material/Image";
import LinkIcon from "@mui/icons-material/Link";
import SaveIcon from "@mui/icons-material/Save";

const Topbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  justify-content: space-evenly;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background-color: #eaeaea;
  }
`;

const EditorTopbar = ({ textref, save }) => {
  const Operation = (symbol, symbol2 = "") => {
    const text = textref.current;
    const selectedText = text.value.substring(
      text.selectionStart,
      text.selectionEnd
    );
    const beforeText = text.value.substring(0, text.selectionStart);
    const afterText = text.value.substring(
      text.selectionEnd,
      text.value.length
    );
    if (symbol2) {
      text.value = beforeText + symbol + selectedText + symbol2 + afterText;
    } else {
      text.value = beforeText + symbol + selectedText + symbol + afterText;
    }
    if (selectedText.length === 0) {
      text.selectionStart = beforeText.length + symbol.length;
      text.selectionEnd = beforeText.length + symbol.length;
    }
    text.focus();
  };
  const Heading = () => {
    const text = textref.current;
    const start = text.selectionStart;
    const textArray = text.value.split("\n");
    const line = text.value.substring(0, start).split("\n").length - 1;
    const selectedText = textArray[line];
    const hCount = selectedText.match(/^#*/)[0].length + 1;
    textArray[line] =
      "#".repeat(hCount) + " " + selectedText.substring(hCount - 1).trim();
    text.value = textArray.join("\n");
    text.focus();
  };

  return (
    <Topbar>
      <Option
        onClick={() => {
          Operation("**");
        }}
      >
        <FormatBoldIcon />
      </Option>
      <Option
        onClick={() => {
          Heading();
        }}
      >
        <TextFieldsIcon />
      </Option>
      <Option
        onClick={() => {
          Operation("*");
        }}
      >
        <FormatItalicIcon />
      </Option>
      <Option
        onClick={() => {
          Operation("- ", " ");
        }}
      >
        <FormatListBulletedIcon />
      </Option>
      <Option
        onClick={() => {
          Operation("1. ", " ");
        }}
      >
        <FormatListNumberedIcon />
      </Option>
      <Option
        onClick={() => {
          Operation("> ", " ");
        }}
      >
        <FormatQuoteIcon />
      </Option>
      <Option
        onClick={() => {
          Operation("`");
        }}
      >
        <CodeIcon />
      </Option>
      <Option onClick={() => {}}>
        <BackupTableIcon />
      </Option>
      <Option onClick={() => {}}>
        <ImageIcon />
      </Option>
      <Option onClick={() => {}}>
        <LinkIcon />
      </Option>
      <Option
        onClick={() => {
          save();
        }}
      >
        <SaveIcon />
      </Option>
    </Topbar>
  );
};

export default EditorTopbar;
