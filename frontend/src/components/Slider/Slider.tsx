"use client";

import styles from "./Slider.module.scss";
import { useState } from "react";

const slides = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={styles.sliderSection}>
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slides[current]})` }}
      >
        {/* Search Card */}
        <div className={styles.searchCard}>
          <h2>Powering Every Mile</h2>
          <p>
            Enhance every journey with the right auto parts and accessories
            built for performance and comfort.
          </p>

          <select>
            <option>Select Vehicle Make</option>
          </select>
          <select>
            <option>Select Vehicle Model</option>
          </select>
          <select>
            <option>Select Vehicle Year</option>
          </select>

          <button>Search</button>

          <small>
            Select your vehicle&apos;s make, model, and year to find the perfect
            fit!
          </small>
        </div>
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.active : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
