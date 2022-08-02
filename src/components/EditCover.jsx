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
      name="file"
      labelIdle={'<div class="filepond--label-action" >Browse files</div>'}
      allowImageResize={true}
      allowImageCrop={true}
      imageCropAspectRatio="16:9"
      imageResizeMode="cover"
      imagePreviewMaxHeight="480"
      allowMultiple={false}
      acceptedFileTypes={["image/*"]}
      files={files}
      onupdatefiles={setFiles}
      credits={false}
      server={{
        url: process.env.REACT_APP_CLOUDINARY_URL,
        timeout: 7000,
        process: {
          url: "/upload",
          method: "POST",
          onload: (response) => response.key,
          onerror: (response) => response.data,
          ondata: (formData) => {
            formData.append(
              "upload_preset",
              process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
            );
            formData.append(
              "api_key",
              process.env.REACT_APP_CLOUDINARY_API_KEY
            );
            return formData;
          },
        },
        remove: (source, load, error) => {
          error("oh my goodness");
          load();
        },
      }}
    />
  );
}
