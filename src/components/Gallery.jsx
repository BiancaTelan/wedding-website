import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const base = import.meta.env.BASE_URL;
  const images = [
  `${base}new-images/gallery5.jpg`,
  `${base}new-images/img2.jpg`,
  `${base}new-images/img3.png`,
  `${base}new-images/img4.jpg`,
  `${base}new-images/img1.jpg`,
  `${base}new-images/img6.png`,
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
          <img key={idx} src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
