import React from 'react';

const Gallery = () => {
  return (
<>
  <div className="gallery">
    <button className="add-image-btn">Add New Image</button>
    <div className="gallery-grid" id="galleryGrid">
      {/* Gallery items will be dynamically rendered here */}
    </div>
  </div>
  {/* Add Image Modal */}
  <div id="addImageModal" className="modal">
    <div className="modal-content">
      <span className="close-btn">×</span>
      <h2>Add New Image</h2>
      <form id="addImageForm">
        <label htmlFor="imageOption">Choose Image Source:</label>
        <select id="imageOption" name="imageOption">
          <option value="url">Image URL</option>
          <option value="upload">Upload File</option>
        </select>
        <div id="urlInput">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter image URL"
            required=""
          />
        </div>
        <div id="uploadInput" style={{ display: "none" }}>
          <label htmlFor="imageFile">Upload Image:</label>
          <input type="file" id="imageFile" name="imageFile" accept="image/*" />
        </div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter image description"
          required=""
          defaultValue={""}
        />
        <button type="submit" className="submit-btn">
          Add Image
        </button>
      </form>
    </div>
  </div>
</>

  );
}

export default Gallery;
