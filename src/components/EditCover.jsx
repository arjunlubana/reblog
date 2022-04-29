import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageCrop,
  FilePondPluginFileValidateType,
  FilePondPluginImageTransform
);


export default function EditCover({ blog, setBlog }) {
  const [files, setFiles] = useState(
    blog.cover ? [{ source: blog.cover, options: { type: "local" } }] : []
  );

  return (
    <FilePond
      name="cover"
      allowMultiple={false}
      acceptedFileTypes={["image/*"]}
      files={files}
      onupdatefiles={setFiles}
      onprocessfile={(error, file) => {
        if (!error) {
          setBlog({ ...blog, cover: file.serverId });
        }
      }}
      labelIdle={
        '<div class="filepond--label-action" style="display: flex, justify-content: center, align-items:center">Browse files</div>'
      }
      stylePanelLayout="compact"
      stylePanelAspectRatio="16:9"
      imageCropAspectRatio="16:9"
      server={{
        url: `${process.env.REACT_APP_API_URL}`,
        process: {
          url: `./blogs/${blog.id}`,
          method: "PUT",
          withCredentials: false,
          onload: null,
          onerror: null,
          ondata: null,
        },
        load: async function (source, load, error, progress, abort, headers) {
          let response = await fetch(source);
          let file = await response.blob();
          progress(true, 0, 1024);
          load(file);
        },
      }}
      credits={false}
    />
  );
}
