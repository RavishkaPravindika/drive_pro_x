// components/Category.tsx
"use client";

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import styles from './Category.module.scss';

const categories = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  title: 'Maintenance & Service Parts',
  image: '/images/category.png',
}));

const labels = ['All', ...Array.from({ length: 12 }, () => 'Wiper Blades')];

function useDragScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const ele = ref.current;
    if (!ele) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - ele.offsetLeft;
      scrollLeft = ele.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
    };

    const mouseUp = () => {
      isDown = false;
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - ele.offsetLeft;
      const walk = (x - startX) * 2; // Adjust speed as needed
      ele.scrollLeft = scrollLeft - walk;
    };

    ele.addEventListener('mousedown', mouseDown);
    ele.addEventListener('mouseleave', mouseLeave);
    ele.addEventListener('mouseup', mouseUp);
    ele.addEventListener('mousemove', mouseMove);

    return () => {
      ele.removeEventListener('mousedown', mouseDown);
      ele.removeEventListener('mouseleave', mouseLeave);
      ele.removeEventListener('mouseup', mouseUp);
      ele.removeEventListener('mousemove', mouseMove);
    };
  }, [ref]);
}

export default function Category() {
  const categoryRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useDragScroll(categoryRef);
  useDragScroll(labelRef);

  return (
    <section className={styles.categorySection}>
      <div ref={categoryRef} className={styles.categoryList}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.categoryCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={cat.image}
                alt={cat.title}
                width={100}
                height={100}
                className={styles.categoryImage}
              />
            </div>
            <p className={styles.categoryTitle}>{cat.title}</p>
          </div>
        ))}
      </div>
      <div ref={labelRef} className={styles.labelList}>
        {labels.map((label, index) => (
          <button key={index} className={styles.labelButton}>
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}