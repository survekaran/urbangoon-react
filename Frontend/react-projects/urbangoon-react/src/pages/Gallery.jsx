import { useState } from "react";
import styles from "../styles/Gallery.module.css";

import villa1 from "../assets/villa1.jpg";
import villa2 from "../assets/villa2.jpg";
import villa3 from "../assets/villa3.jpg";

const images = [villa1, villa2, villa3];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openViewer = (index) => {
    setCurrent(index);
    setOpen(true);
  };

  const closeViewer = () => setOpen(false);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <>
      <div className={styles.galleryHeader}>
        <h1>Gallery</h1>
      </div>

      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.imageCard}>
            <img src={img} onClick={() => openViewer(index)} />
          </div>
        ))}
      </div>

      {open && (
        <div className={styles.viewerOverlay}>
          <span className={styles.closeBtn} onClick={closeViewer}>×</span>

          <span className={styles.prevBtn} onClick={prev}>‹</span>
          <img src={images[current]} className={styles.fullImage} />
          <span className={styles.nextBtn} onClick={next}>›</span>
        </div>
      )}
    </>
  );
}

export default Gallery;
