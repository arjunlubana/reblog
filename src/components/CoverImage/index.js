import { useState } from "react";
import { FaImage, FaEdit } from "react-icons/fa";
import "./styles.css";


export default function CoverImage({ coverImage, setCoverImage }) {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();

  const handleChange = (event) => {
    setCoverImage(event.target.files[0]);
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
            <FaEdit className="image-edit" />
            <img
              src={preview}
              alt="Blog Cover"
              className="image-fluid w-75 mx-auto"
            />
          </div>
        ) : (
          <FaImage size={(100, 100)} />
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
