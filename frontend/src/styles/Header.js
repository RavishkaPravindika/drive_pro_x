export const styles = `
  .nav-bar-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #3498db, #ecf0f1);
    padding: 10px 20px;
  }
  .links {
    display: flex;
    gap: 20px;
  }
  .links a {
    color: white;
    text-decoration: none;
  }
  .contact-info {
    display: flex;
    gap: 10px;
    color: white;
  }
  .contact-info a {
    color: white;
    text-decoration: none;
  }
  .nav-bar-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
  }
  .left, .center, .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .center input {
    padding: 5px;
    width: 200px;
  }
  .hero-section {
    position: relative;
    height: 500px;
  }
  .image-slider {
    width: 100%;
    height: 100%;
  }
  .slider-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }
  .search-card {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 300px;
  }
  .search-card h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .search-card p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .search-card form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .search-card select, .search-card button {
    padding: 10px;
    font-size: 16px;
  }
  .search-card button {
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .nav-bar-top {
      flex-direction: column;
      align-items: flex-start;
    }
    .contact-info {
      margin-top: 10px;
    }
    .nav-bar-bottom {
      flex-wrap: wrap;
    }
    .center {
      flex-grow: 1;
      margin: 10px 0;
    }
    .center input {
      width: 100%;
    }
    .hero-section {
      height: auto;
    }
    .search-card {
      position: static;
      transform: none;
      width: 100%;
      margin-top: 20px;
    }
  }
`;