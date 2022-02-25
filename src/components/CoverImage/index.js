import { useState } from "react";
import { IoImageOutline, IoCreateOutline } from "react-icons/io5";
import "./styles.css";


export default function CoverImage({ coverImage, setCoverImage }) {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();

  const handleChange = (event) => {
    setCoverImage(event.target.files[0]);
    console.log(coverImage)
    reader.onload = (event) => {
      setPreview(event.target.result);
    };
    reader.readAsDataURL(coverImage);
  };

  return (
    <div className="cover-image-upload">
      <label htmlFor="cover_image">
        {preview ? (
          <div className="cover-image-preview">
          <IoCreateOutline />
            <img
              src={preview}
              alt="Blog Cover"
              className="image-fluid w-75 mx-auto"
            />
          </div>
        ) : (
          <IoImageOutline size={(300, 300)} />
        )}
      </label>
      <input
        type="file"
        id="cover_image"
        name="cover_image"
        accept=".jpg, .jpeg, .png"
        onChange={handleChange}
      />
    </div>
  );
}
