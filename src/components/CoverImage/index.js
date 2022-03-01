import { useState } from "react";
import api_url from "../../lib/api-url";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "./styles.css";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageCrop,
  FilePondPluginFileValidateType,
  FilePondPluginImageTransform
);

export default function CoverImage({
  coverImage,
  setCoverImage,
  blogUpdate,
  setBlogUpdate,
  readOnly,
}) {
  return readOnly ? (
    coverImage ? (
      <img
        src={`${api_url}/${coverImage.filename}`}
        alt="cover image"
        className="img-fluid"
      />
    ) : (
      ""
    )
  ) : (
    <FilePond
      allowMultiple={false}
      acceptedFileTypes={["image/*"]}
      labelIdle='
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="64px" height="64px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <g>
        <path d="M368,224c26.5,0,48-21.5,48-48c0-26.5-21.5-48-48-48c-26.5,0-48,21.5-48,48C320,202.5,341.5,224,368,224z"/>
        <path d="M452,64H60c-15.6,0-28,12.7-28,28.3v327.4c0,15.6,12.4,28.3,28,28.3h392c15.6,0,28-12.7,28-28.3V92.3
        C480,76.7,467.6,64,452,64z M348.9,261.7c-3-3.5-7.6-6.2-12.8-6.2c-5.1,0-8.7,2.4-12.8,5.7l-18.7,15.8c-3.9,2.8-7,4.7-11.5,4.7
        c-4.3,0-8.2-1.6-11-4.1c-1-0.9-2.8-2.6-4.3-4.1L224,215.3c-4-4.6-10-7.5-16.7-7.5c-6.7,0-12.9,3.3-16.8,7.8L64,368.2V107.7
        c1-6.8,6.3-11.7,13.1-11.7h357.7c6.9,0,12.5,5.1,12.9,12l0.3,260.4L348.9,261.7z"/>
        </g>
       </svg>'
      stylePanelLayout="compact"
      stylePanelAspectRatio="16:9"
      imageCropAspectRatio="16:9"
      onpreparefile={(file, output) => {
        if (blogUpdate.has("cover")) {
          blogUpdate.set("cover", output);
        } else {
          blogUpdate.append("cover", output);
        }
        setBlogUpdate(blogUpdate);
      }}
      credits={false}
    />
  );
}
