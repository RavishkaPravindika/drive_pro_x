"use client";

import styles from "./Header.module.scss";
import { FaBars, FaFilter, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { HiBars3, HiAdjustmentsHorizontal} from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`${styles.leftLinks} ${menuOpen ? styles.showMenu : ""}`}>
            <a href="#">About Us</a>
            <a href="#">Your Dream Car</a>
            <a href="#">Contact Us</a>
            <a href="#">Become a Partner</a>
            <a href="#">Help Center</a>

            {/* Show rightInfo inside menu only for mobile */}
            <div className={styles.rightInfoMobile}>
                <span>Need Help? Call us: </span>
                <span><a href="tel:+94757744000">(+94) 75 7744 000</a></span>
                <span><a href="mailto:support@driveprox.com">support@driveprox.com</a></span>
            </div>
            </div>

            {/* Right info for desktop */}
            <div className={styles.rightInfo}>
            <span>Need Help? Call us: <a href="tel:+94757744000">(+94) 75 7744 000</a></span>
            <span>or</span>
            <span><a href="mailto:support@driveprox.com">support@driveprox.com</a></span>
            </div>
        <HiBars3 className={styles.mobileMenuIcon} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Search Section */}
      <div className={styles.searchSection}>
        <HiBars3 className={styles.menuIcon} />
        <img src="/images/logo.png" alt="DriveProX" className={styles.logo} /><span className={styles.logoText}>DriveProX</span>

        <div className={styles.centerSearch}>
          <HiAdjustmentsHorizontal className={styles.filterIcon} />
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search by Make Model Year, Product Type, Part Number or Brand"
            />
            <CiSearch className={styles.searchIcon} />
          </div>
        </div>

        <div className={styles.rightIcons}>
          <PiShoppingCartLight />
          <FaRegCircleUser />
        </div>
      </div>
    </header>
    
  );
}
