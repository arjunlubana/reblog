import { IconContext } from "react-icons";
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Button,
  ButtonGroup,
} from "@mui/material";
import {
  IoSaveOutline,
  IoTrashOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";

export default function EditorActionBar({
  blog,
  update_blog,
  publish_blog,
  delete_blog,
}) {
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{
          display: { xs: "flex", lg: "none" },
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
      <ButtonGroup
        orientation="vertical"
        aria-label="Blog Editor Desktop Action Bar"
        sx={{
          display: { xs: "none", lg: "flex" },
          position: "fixed",
          bottom: "50%",
          top: "50%",
          right: 10,
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Button
          variant="contained"
          startIcon={<IoSaveOutline />}
          color="secondary"
          sx={{
            height: 50,
            borderRadius: 5,
            py: 3,
            outline: "2px solid #ead6db",
          }}
          onClick={() => update_blog(blog.id)}
        >
          Save
        </Button>
        <Button
          variant="contained"
          startIcon={<IoCloudUploadOutline />}
          color="secondary"
          sx={{
            height: 50,
            py: 3,
            outline: "2px solid #ead6db",
          }}
          onClick={() => publish_blog(blog.id)}
        >
          Publish
        </Button>
        <Button
          variant="contained"
          startIcon={<IoTrashOutline />}
          color="secondary"
          sx={{
            height: 50,
            py: 3,
            borderRadius: 5,
            outline: "2px solid #ead6db",
          }}
          onClick={() => delete_blog(blog.id)}
        >
          Delete
        </Button>
      </ButtonGroup>
    </IconContext.Provider>
  );
}
