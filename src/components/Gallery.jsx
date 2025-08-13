import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const base = import.meta.env.BASE_URL;
  const images = [
  `${base}new-images/gallery1.jpg`,
  `${base}new-images/gallery2.jpg`,
  `${base}new-images/gallery3.jpg`,
  `${base}new-images/gallery4.jpg`,
  `${base}new-images/gallery5.jpg`,
  `${base}new-images/gallery1.jpg`,
];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <div className="gallery-label">GALLERY</div>
        <h2 className="gallery-title">
          Moments We’ll<br />Cherish Forever
        </h2>
      </div>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}
