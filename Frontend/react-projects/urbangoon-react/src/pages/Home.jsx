import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import FilterBar from "../components/FilterBar";
import BookingModal from "../components/BookingModal";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState(null);

  const cardRef = useRef(null);
  const [filters, setFilters] = useState({});

  // ⭐ NEW: DYNAMIC VILLAS FROM BACKEND
  const [villaList, setVillaList] = useState([]);

  useEffect(() => {
    async function loadVillas() {
      try {
        const res = await fetch(
          "http://localhost/Urbangoon-Fullstack/Backend/Urbangoon/api/get_villas.php"
        );
        const data = await res.json();
        setVillaList(data);
      } catch (err) {
        console.error("Error loading villas:", err);
      }
    }

    loadVillas();
  }, []);

  // ⭐ Intersection fade animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.show);
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      const cards = cardRef.current.querySelectorAll(`.${styles.card}`);
      cards.forEach((card) => observer.observe(card));
      return () => cards.forEach((card) => observer.unobserve(card));
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className={styles.hero}
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=")`,
        }}
      >
        <div className={styles.overlay}>
          <h1>Welcome to Urbangoon</h1>
          <p>Your dream villa in Karjat awaits</p>

          <button
            className={styles.btn}
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* FILTER BAR */}
      <FilterBar filters={filters} setFilters={setFilters} />

      {/* PROJECTS SECTION */}
      <section id="projects" className={styles.projects}>
        <h2>Featured Villas</h2>

        <div className={styles.cardContainer} ref={cardRef}>
          {villaList
            .filter((villa) => {
              if (filters.location && filters.location !== villa.location)
                return false;

              if (filters.amenity && !villa.amenities?.includes(filters.amenity))
                return false;

              if (filters.rating && villa.rating < 4.0) return false;

              if (filters.price) {
                const price = villa.price;

                if (filters.price === "Under ₹5000" && price >= 5000)
                  return false;
                if (
                  filters.price === "₹5000–₹10,000" &&
                  (price < 5000 || price > 10000)
                )
                  return false;
                if (
                  filters.price === "₹10,000–₹15,000" &&
                  (price < 10000 || price > 15000)
                )
                  return false;
                if (
                  filters.price === "₹15,000–₹25,000" &&
                  (price < 15000 || price > 25000)
                )
                  return false;
                if (filters.price === "Above ₹25,000" && price <= 25000)
                  return false;
              }

              return true;
            })
            .map((villa) => (
  <div key={villa.id} className={`${styles.card} ${styles.hidden}`}>
    <div className={styles.cardImg}>
      <img 
        src={`/villas/${villa.image}`} 
        alt={villa.title} 
      />
    </div>

    <div className={styles.cardInfo}>
      <div className={styles.cardTop}>
        <h3>{villa.title}</h3>
        <span className={styles.rating}>⭐ {villa.rating}</span>
      </div>

      <p className={styles.location}>{villa.location}</p>
      <p className={styles.desc}>{villa.description}</p>
      <p className={styles.price}>₹{villa.price}</p>

      <button
        className={styles.bookBtn}
        onClick={() => {
          setSelectedVilla(villa);
          setOpenModal(true);
        }}
      >
        Book Now
      </button>
    </div>
  </div>
))}
        </div>
      </section>

      {/* BOOKING MODAL */}
      <BookingModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        villa={selectedVilla}
      />
    </>
  );
}

export default Home;
