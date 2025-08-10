'use client';

import React, { useEffect, useState, useRef } from "react";
import styles from "./FastMoving.module.scss";
import { FaShoppingCart, FaChevronRight, FaStar } from "react-icons/fa";

interface ProductImage {
  url: string;
}

interface Product {
  id: number;
  name: string;
  discountPercentage: number;
  images: ProductImage[];
  rating: number;
  reviewsCount: number;
  originalPrice: number;
  finalPrice: number;
  isSkeleton?: boolean;
}

const SKELETON_COUNT = 8; // number of loading placeholders shown while fetching
const POLL_INTERVAL_MS = 8000; // poll every 8 seconds until real data arrives

const FastMoving: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const abortRef = useRef<AbortController | null>(null);
  const intervalRef = useRef<number | null>(null);

  // fetch helper returns array | null (null on aborted)
  const fetchProductsOnce = async (signal?: AbortSignal): Promise<Product[] | null> => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/products", { signal });
      if (!res.ok) {
        console.warn("FastMoving: fetch status", res.status);
        return [];
      }
      const data = await res.json();

      if (Array.isArray(data)) {
        return data as Product[];
      } else if (data && Array.isArray(data.products)) {
        return data.products as Product[];
      } else if (data && Array.isArray(data.data)) {
        return data.data as Product[];
      } else {
        return [];
      }
    } catch (err) {
      if ((err as any)?.name === "AbortError") return null;
      console.error("FastMoving fetch error:", err);
      return [];
    }
  };

  useEffect(() => {
    abortRef.current = new AbortController();

    // initial fetch attempt
    (async () => {
      const result = await fetchProductsOnce(abortRef.current!.signal);
      if (result === null) return; // aborted
      if (Array.isArray(result) && result.length > 0) {
        setProducts(result);
        setLoading(false);
      } else {
        // no data yet — keep loading = true and start polling
        setLoading(true);
        // start polling
        if (intervalRef.current == null) {
          intervalRef.current = window.setInterval(async () => {
            // each poll has its own abort controller (not the main one)
            const controller = new AbortController();
            const r = await fetchProductsOnce(controller.signal);
            controller.abort(); // cleanup this poll's controller
            if (r === null) return; // aborted poll
            if (Array.isArray(r) && r.length > 0) {
              setProducts(r);
              setLoading(false);
              if (intervalRef.current) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
            }
            // otherwise keep polling
          }, POLL_INTERVAL_MS);
        }
      }
    })();

    return () => {
      // cleanup on unmount
      if (abortRef.current) abortRef.current.abort();
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skeletonCards: Product[] = Array.from({ length: SKELETON_COUNT }).map((_, i) => ({
    id: -1 - i,
    name: "",
    discountPercentage: 0,
    images: [{ url: "" }],
    rating: 0,
    reviewsCount: 0,
    originalPrice: 0,
    finalPrice: 0,
    isSkeleton: true,
  }));

  // show skeletons while loading (keeps skeleton until real data arrived)
  const displayProducts = loading ? skeletonCards : products;

  return (
    <section className={styles.fastMovingSection}>
      <div className={styles.header}>
        <h2>Fast Moving</h2>
        <button className={styles.viewAll}>
          View All <FaChevronRight size={12} />
        </button>
      </div>
      <div className={styles.scrollBar}></div>

      <div className={styles.productList}>
        {displayProducts.map((product) => {
          const isSkeleton = !!product.isSkeleton;

          return (
            <div
              key={product.id}
              className={`${styles.card} ${isSkeleton ? styles.skeleton : ""}`}
            >
              {isSkeleton ? (
                // skeleton placeholder structure (keeps same layout but blank)
                <>
                  <div className={styles.skeletonDiscount} />
                  <div className={styles.skeletonImage} />
                  <div className={styles.skeletonLine} />
                  <div className={styles.skeletonLineSmall} />
                  <div className={styles.skeletonMeta}>
                    <div className={styles.skeletonTag} />
                    <div className={styles.skeletonTagShort} />
                    <div className={styles.skeletonDate} />
                  </div>
                </>
              ) : (
                // actual product card (unchanged from your original design)
                <>
                  <div className={styles.discountBox}>
                    {product.discountPercentage}%
                  </div>

                  <div className={styles.imageSlider}>
                    <div className={styles.imageWrapper}>
                      <img src={product.images[0]?.url || ""} alt={product.name} />
                    </div>
                    <div className={styles.sliderDots}>
                      {product.images.map((_, index) => (
                        <span
                          key={index}
                          className={index === 0 ? styles.activeDot : styles.dot}
                        />
                      ))}
                    </div>
                  </div>

                  <hr className={styles.separator} />

                  <div className={styles.productName}>{product.name}</div>

                  <div className={styles.rating}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={12}
                        color={i < product.rating ? "#FFC107" : "#E0E0E0"}
                      />
                    ))}
                    <span className={styles.reviewCount}>
                      {product.reviewsCount} Review{product.reviewsCount > 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className={styles.priceRow}>
                    <span className={styles.originalPrice}>
                      LKR {product.originalPrice}
                    </span>
                    <span className={styles.finalPrice}>LKR {product.finalPrice}</span>
                    <FaShoppingCart className={styles.cartIcon} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FastMoving;
