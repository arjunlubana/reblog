import React from "react";
import { CloudinaryContext, Image } from "cloudinary-react";

export default function ViewCover() {
  return (
    <CloudinaryContext cloudName="djneci6fi">
      <div>
        <Image publicId="Reblog/cover_1656483998268_197473747.png" width="720" />
      </div>
    </CloudinaryContext>
  );
}
