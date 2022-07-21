import { Cloudinary } from "@cloudinary/url-gen";

export default function useCloudinary() {
  const imageStore = new Cloudinary({
    cloud: {
      cloudName: "djneci6fi",
    },
  });
  return imageStore;
}
