import { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function CoverImage() {
  const [showPreview, setShowPreview] = useState(false);
  

  return (
    <div className="cover-image-container">
      {showPreview ? (
        <div className="preview">
          <p>No files currently selected for upload</p>
        </div>
      ) : (
        <div className="cover-image-upload">
          <label for="cover_image">
            <FaImage size={100, 100}/>
            <small>Recommended: 720 x 640px</small>
          </label>
          <input
            type="file"
            id="cover_image"
            name="cover_image"
            accept=".jpg, .jpeg, .png"
          />
        </div>
      )}
    </div>
  );
}
