import React from "react";
import {
  AdvancedImage,
  responsive,
  lazyload,
  placeholder,
} from "@cloudinary/react";
import { useCloudinary } from "hooks";

export default function ViewCover() {
  const imageStore = useCloudinary();
  console.log(imageStore);
  const img = imageStore.image("Reblog/cover_1656483998268_197473747");
  return (
    <AdvancedImage
      cldImg={img}
      plugins={[lazyload(), responsive(100), placeholder()]}
    />
  );
}
