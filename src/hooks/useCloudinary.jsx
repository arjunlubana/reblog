import { Cloudinary } from "@cloudinary/url-gen";

export default function useCloudinary() {
  const imageStore = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
    },
  });
  return imageStore;
}
