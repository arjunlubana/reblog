import { RichUtils } from "draft-js";
import {
  H2,
  H3,
  H4,
  H5,
  Bold,
  Italic,
  Underline,
  BlockQoute,
  CodeBlock,
  Monospace,
  OList,
  UList,
} from "components/Toolbar/Buttons";

export default function Toolbar({ blog, setBlog, focusEditor, readOnly }) {
  const styleBlock = async (style) => {
    await setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, style),
    });
    focusEditor();
  };

  const styleInline = async(style) => {
    await setBlog({ ...blog, body: RichUtils.toggleInlineStyle(blog.body, style) });
    focusEditor();
  };
  
  return readOnly ? (
    ""
  ) : (
    <div id="toolbar" className="mx-auto btn-group rounded">
      <H2 styleBlock={styleBlock} />
      <H3 styleBlock={styleBlock} />
      <H4 styleBlock={styleBlock} />
      <H5 styleBlock={styleBlock} />
      <Bold styleInline={styleInline} />
      <Italic styleInline={styleInline} />
      <Underline styleInline={styleInline} />
      <BlockQoute styleBlock={styleBlock} />
      <CodeBlock styleBlock={styleBlock} />
      <Monospace styleInline={styleInline} />
      <OList styleBlock={styleBlock} />
      <UList styleBlock={styleBlock} />
    </div>
  );
}
