import idleImage from "assets/image.svg";
import { useState } from "react";
import { BASE_URL, FILES_URI } from "utils/api";
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
      labelIdle={`<img src=${idleImage} alt="idle cover">`}
      stylePanelLayout="compact"
      stylePanelAspectRatio="16:9"
      imageCropAspectRatio="16:9"
      server={{
        url: BASE_URL,
        process: FILES_URI,
        load: FILES_URI,
        revert: FILES_URI,
      }}
      credits={false}
    />
  );
}
