import React from "react";
import styles from "../styles/BookingModal.module.css";

export default function BookingModal({ open, onClose, villa }) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        <h2>Book {villa.title}</h2>
        <p className={styles.price}>{villa.price}</p>

        <form className={styles.form}>
          <label>Name</label>
          <input type="text" placeholder="Your full name" required />

          <label>Phone</label>
          <input type="tel" placeholder="Your phone number" required />

          <label>Date</label>
          <input type="date" required />

          <label>Guests</label>
          <input type="number" placeholder="Number of guests" required />

          <button type="submit" className={styles.submitBtn}>
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
