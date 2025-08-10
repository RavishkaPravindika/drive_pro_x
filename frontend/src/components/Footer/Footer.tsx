import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.leftCol}>
          <Image
            src="/images/logo.png"
            alt="DriveProX Logo"
            width={150}
            height={40}
            className={styles.logo}
          />
          <p className={styles.tagline}>Powering Every Mile</p>
          <div className={styles.contactItem}>
            <Image src="/icons/mail.svg" alt="Email" width={20} height={20} />
            <span>support@driveprox.com</span>
          </div>
          <div className={styles.contactItem}>
            <Image
              src="/icons/headset.svg"
              alt="Phone"
              width={20}
              height={20}
            />
            <span>(+94) 75 7744 000</span>
          </div>
        </div>

        <div className={styles.rightCol}>
          <h4>DriveProX</h4>
          <hr />
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Become a Partner</Link></li>
            <li><Link href="#">Your Dream Car</Link></li>
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">My Account</Link></li>
          </ul>
        </div>
      </div>

      {/* Middle Section */}
      <div className={styles.middleSection}>
        <div className={styles.privacyLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Refunds & Returns</Link>
        </div>
        <div className={styles.paymentIcons}>
          <Image src="/images/visa.png" alt="Visa" width={50} height={30} />
          <Image src="/images/mastercard.png" alt="Mastercard" width={50} height={30} />
          <Image src="/images/koko.png" alt="Koko" width={50} height={30} />
          <Image src="/images/amex.png" alt="Amex" width={50} height={30} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.copyright}>
          © 2025 DriveProX. All rights reserved.
        </div>
        <div className={styles.tulu}>
          Architected and Spearheaded by
          <Image src="/images/tulu-logo.png" alt="Tulu Tech" width={80} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
