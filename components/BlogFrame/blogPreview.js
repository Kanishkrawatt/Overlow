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
  const values = value.split("  ").join("\n");
  const html = converter.makeHtml(values);
  return <Markup content={html} />;
};

export default Preview;
