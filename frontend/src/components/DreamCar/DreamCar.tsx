import React from "react";
import styles from "./DreamCar.module.scss";
import { ArrowRight, MapPin } from "lucide-react";

interface Car {
  id: number;
  name: string;
  location: string;
  price: string;
  miles: string;
  transmission: string;
  fuel: string;
  date: string;
  images: string[];
}

const count = 10; // number of demo cards to show

const demoCars: Car[] = Array.from({ length: count }).map((_, idx) => ({
  id: idx + 1,
  name: "Mercedes-benz W115, 1969",
  location: "Eheliyagoda",
  price: "4,900,000",
  miles: "100k miles",
  transmission: "Auto",
  fuel: "Electric",
  date: "2025-05-27",
  // use your real image paths in public/ or placeholders
  images: ["/images/car1.png", "/images/car2.jpg", "/images/car3.jpg"],
}));

const DreamCar: React.FC = () => {
  return (
    <section className={styles.dreamCarSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Dream Car</h2>
        <button className={styles.viewAll}>
          View All <ArrowRight size={14} />
        </button>
      </div>
      <div className={styles.scrollBar}></div>

      <div className={styles.cards}>
        {demoCars.map((car) => (
          <div className={styles.card} key={car.id}>
            <div className={styles.badge}>🏆</div>

            <div className={styles.imageSlider}>
              <img src={car.images[0]} alt={car.name} />
              <div className={styles.sliderDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.carName}>{car.name}</h3>
              <div className={styles.location}>
                <MapPin size={14} />
                <span>{car.location}</span>
              </div>
              <div className={styles.price}>
                <span className={styles.currency}>LKR</span>{" "}
                <span className={styles.amount}>{car.price}</span>
              </div>
              <div className={styles.labels}>
                <span>{car.miles}</span>
                <span>{car.transmission}</span>
                <span>{car.fuel}</span>
              </div>
              <div className={styles.date}>{car.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DreamCar;
