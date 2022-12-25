import showdown from "showdown";
import { Markup } from "interweave";
const Preview = ({ value }) => {
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
  const html = converter.makeHtml(value);

  return <Markup content={html} />;
};

export default Preview;
