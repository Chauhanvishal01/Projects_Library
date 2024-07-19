import React, { useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      // Using a unique URL each time to force random images
      const res = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 100)}`);
      if (!res.ok) {
        throw new Error("Images not found");
      }
      const data = await res.json();
      setImages(data.slice(0, 10)); // Get at least 10 images if available
    } catch (error) {
      console.log("Error fetching images", error);
    }
  };

  return (
    <div className="gallery">
      <div>
        <button onClick={fetchImages}>Click me</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.download_url}
            alt={image.author}
            width="300"
            height="200"
            style={{ margin: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
