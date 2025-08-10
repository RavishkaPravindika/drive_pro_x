import React from "react";
import styles from "./PostSection.module.scss";
import { ArrowRight } from "lucide-react";

interface PostSectionProps {
  backgroundImage: string;
}

const PostSection: React.FC<PostSectionProps> = ({ backgroundImage }) => {
  return (
    <section
      className={styles.postSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <span className={styles.badge}>On Sale This Week</span>
        <h2 className={styles.title}>
          Wide Selection of Quality Auto Parts at the Lowest Prices
        </h2>
        <p className={styles.description}>
          Plakore maheten. Astronens ultranirad. Dod. Mms pal. Fysisk cd megade vagisk.
        </p>
        <button className={styles.cta}>
          Shop Now <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default PostSection;
