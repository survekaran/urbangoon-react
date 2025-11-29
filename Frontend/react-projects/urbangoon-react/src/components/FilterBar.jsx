import { useState } from "react";
import styles from "../styles/FilterBar.module.css";
import { FaChevronDown } from "react-icons/fa";

function FilterBar({ filters, setFilters }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const setFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setOpenMenu(null);
  };

  return (
    <div className={styles.filterBar}>
      
      {/* LOCATION */}
      <div className={styles.filter} onClick={() => toggleMenu("location")}>
        Location <FaChevronDown className={styles.icon} />
        {openMenu === "location" && (
          <div className={styles.dropdown}>
            {[
              "Karjat Hills",
              "Karjat Lake",
              "Karjat Forest",
              "Lonavala Road",
              "Bhivpuri",
              "Neral"
            ].map((loc, i) => (
              <p key={i} onClick={() => setFilter("location", loc)}>
                {loc}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* PRICE */}
      <div className={styles.filter} onClick={() => toggleMenu("price")}>
        Price <FaChevronDown className={styles.icon} />
        {openMenu === "price" && (
          <div className={styles.dropdown}>
            {[
              "Under ₹5000",
              "₹5000–₹10,000",
              "₹10,000–₹15,000",
              "₹15,000–₹25,000",
              "Above ₹25,000"
            ].map((price, i) => (
              <p key={i} onClick={() => setFilter("price", price)}>
                {price}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* AMENITIES */}
      <div className={styles.filter} onClick={() => toggleMenu("amenity")}>
        Amenities <FaChevronDown className={styles.icon} />
        {openMenu === "amenity" && (
          <div className={styles.dropdown}>
            {[
              "Private Pool",
              "AC",
              "Indoor Games",
              "Pet Friendly"
            ].map((amenity, i) => (
              <p key={i} onClick={() => setFilter("amenity", amenity)}>
                {amenity}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* RATING */}
      <div className={styles.filter} onClick={() => toggleMenu("rating")}>
        Rating <FaChevronDown className={styles.icon} />
        {openMenu === "rating" && (
          <div className={styles.dropdown}>
            <p onClick={() => setFilter("rating", "4.0+")}>4.0+ (Top Rated)</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default FilterBar;
