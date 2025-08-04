'use client';

import Head from 'next/head';
import { styles } from '@/styles/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DriveProX</title>
      </Head>
      <header>
        <div className="nav-bar-top">
          <div className="links">
            <a href="#">About Us</a>
            <a href="#">Your Dream Car</a>
            <a href="#">Contact Us</a>
            <a href="#">Become a Partner</a>
            <a href="#">Help Center</a>
          </div>
          <div className="contact-info">
            <span>Need help? Call us: (+91) 9744 4000</span>
            <a href="mailto:support@driveprox.com">support@driveprox.com</a>
          </div>
        </div>
        <div className="nav-bar-bottom">
          <div className="left">
            <div className="menu-icon">≡</div>
            <div className="logo">DriveProX</div>
          </div>
          <div className="center">
            <div className="filter-icon">🔍</div>
            <input type="text" placeholder="Search" />
          </div>
          <div className="right">
            <div className="cart-icon">🛒</div>
            <div className="user-icon">👤</div>
          </div>
        </div>
      </header>
      <main>
        <div className="hero-section">
          <div className="image-slider">
            <div style={{ height: '100%', backgroundColor: '#ccc' }}></div>
            <div className="slider-dots">
              <span>•</span>
              <span>•</span>
              <span>•</span>
            </div>
          </div>
          <div className="search-card">
            <h1>Powering Every Mile</h1>
            <p>Enhance every journey with the right auto parts and accessories built for performance and comfort.</p>
            <form>
              <select name="make">
                <option>Select Vehicle Make</option>
              </select>
              <select name="model">
                <option>Select Vehicle Model</option>
              </select>
              <select name="year">
                <option>Select Vehicle Year</option>
              </select>
              <button type="submit">Search</button>
            </form>
            <p>Select your vehicle's make, model, and year to find the perfect fit!</p>
          </div>
        </div>
      </main>
      <style jsx>{styles}</style>
    </div>
  );
}