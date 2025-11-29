import React from "react";
import styles from "../styles/WhatsApp.module.css";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Props:
 * - phone: string — international number without plus or spaces (e.g. "918691808553")
 * - message: string — prefilled message
 */
export default function WhatsAppButton({ phone = "919999999999", message = "Hi, I want to know about a villa." }) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className={styles.whatsapp}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <div className={styles.iconWrap}>
        <FaWhatsapp className={styles.icon} />
      </div>
      <div className={styles.tooltip}>Chat on WhatsApp</div>
    </a>
  );
}
