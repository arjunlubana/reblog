import { IconContext } from "react-icons";
import {
  IoSaveOutline,
  IoTrashOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";

import useBlog from "hooks/useBlog";
import { EditCover, BlogTitle, BlogBody } from "components";

export default function EditBlog() {
  const { isLoading, blog, setBlog, delete_blog, update_blog, publish_blog } =
    useBlog();

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 2 }}>
      <EditCover blog={blog} setBlog={setBlog} />
      <BlogTitle blog={blog} setBlog={setBlog} readOnly={false} />
      <BlogBody blog={blog} setBlog={setBlog} readOnly={false} />
      <IconContext.Provider value={{ size: 24 }}>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{
            position: "fixed",
            bottom: 16,
            right: { xs: 16, sm: 64, md: 128, lg: 128 },
          }}
          icon={
            <SpeedDialIcon
              icon={<IoSaveOutline onClick={() => update_blog(blog.id)} />}
              openIcon={<IoSaveOutline />}
            />
          }
        >
          {!blog.publish && (
            <SpeedDialAction
              icon={<IoCloudUploadOutline />}
              tooltipTitle="Publish"
              tooltipOpen
              onClick={() => publish_blog(blog.id)}
            />
          )}
          <SpeedDialAction
            icon={<IoTrashOutline />}
            tooltipTitle="Delete"
            tooltipOpen
            onClick={() => delete_blog(blog.id)}
          />
        </SpeedDial>
      </IconContext.Provider>
    </Box>
  );
}
