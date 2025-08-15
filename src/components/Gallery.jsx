import React, { useState } from "react";
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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (src) => {
    setSelectedImg(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <div className="gallery-label">GALLERY</div>
          <h2 className="gallery-title">
            Moments We’ll<br />Cherish Forever
          </h2>
        </div>
        <div className="gallery-grid">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              loading="lazy"
              onClick={() => openModal(src)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <span className="image-modal-close" onClick={closeModal}>
            &times;
          </span>
          <img
            src={selectedImg}
            alt="Full Size"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
