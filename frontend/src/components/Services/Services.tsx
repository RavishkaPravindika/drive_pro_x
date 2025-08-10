// components/Services.tsx
"use client";

import React from 'react';
import { FaHeadphones, FaCreditCard, FaShieldAlt, FaTruck, FaCalendarAlt } from 'react-icons/fa';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.newsletterContainer}>
        <div className={styles.newsletterLeft}>
          <p className={styles.newsletterSmallGreen}>Join our newsletter for 10% offs</p>
          <h2 className={styles.newsletterTitle}>Get our emails for info on new items, sales and much more.</h2>
          <p className={styles.newsletterSubtitle}>Register now to get latest updates on promotions & coupons.</p>
        </div>
        <div className={styles.newsletterRight}>
          <form className={styles.subscriptionForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
          <p className={styles.termsText}>
            By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
          </p>
        </div>
      </div>
      <div className={styles.servicesBar}>
        <div className={styles.serviceItem}>
          <FaHeadphones className={styles.serviceIcon} />
          <div className={styles.serviceText}>
            <p className={styles.serviceTitle}>24/7 SUPPORT</p>
            <p className={styles.serviceSubtitle}>Support every time</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <FaCreditCard className={styles.serviceIcon} />
          <div className={styles.serviceText}>
            <p className={styles.serviceTitle}>ACCEPT PAYMENT</p>
            <p className={styles.serviceSubtitle}>Visa, Paypal, Master</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <FaShieldAlt className={styles.serviceIcon} />
          <div className={styles.serviceText}>
            <p className={styles.serviceTitle}>SECURED PAYMENT</p>
            <p className={styles.serviceSubtitle}>100% secured</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <FaTruck className={styles.serviceIcon} />
          <div className={styles.serviceText}>
            <p className={styles.serviceTitle}>FREE SHIPPING</p>
            <p className={styles.serviceSubtitle}>Order over LKR 50000</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <FaCalendarAlt className={styles.serviceIcon} />
          <div className={styles.serviceText}>
            <p className={styles.serviceTitle}>07 DAYS RETURN</p>
            <p className={styles.serviceSubtitle}>07 days guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}