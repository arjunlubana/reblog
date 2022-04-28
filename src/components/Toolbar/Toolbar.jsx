import { RichUtils } from "draft-js";
import ButtonGroup from "@mui/material/ButtonGroup";

import ToolbarButtons from "./ToolbarButtons";
import ToolbarButton from "./ToolbarButton";

export default function Toolbar({ blog, setBlog, focusEditor, readOnly }) {
  const styleBlock = async (style) => {
    await setBlog({
      ...blog,
      body: RichUtils.toggleBlockType(blog.body, style),
    });
    focusEditor();
  };

  const styleInline = async (style) => {
    await setBlog({
      ...blog,
      body: RichUtils.toggleInlineStyle(blog.body, style),
    });
    focusEditor();
  };

  return readOnly ? (
    ""
  ) : (
    <ButtonGroup
      variant="text"
      aria-label="outlined primary button group"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {ToolbarButtons.map(({ style, styleType, icon }) => {
        return (
          <ToolbarButton
            key={style}
            icon={icon}
            toggleStyle={() =>
              styleType === "Block" ? styleBlock(style) : styleInline(style)
            }
          />
        );
      })}
    </ButtonGroup>
  );
}
