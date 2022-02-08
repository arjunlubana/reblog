import { useState } from "react";
import { FaImage, FaEdit } from "react-icons/fa";
import "./styles.css";

export default function CoverImage({ coverImage, setCoverImage }) {
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (event) => {
    const cover_image = event.target.files[0];
    setCoverImage(cover_image);
    setShowPreview(true);
  };

  return (
    <div className="cover-image-upload">
      <label htmlFor="cover_image">
        {showPreview ? (
          <div className="cover-image-preview">
            <FaEdit className="image-edit" />
            <img
              src={coverImage}
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
