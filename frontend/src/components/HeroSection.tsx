import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, #f0f4f8, #d1d9e6)', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <Head>
        <title>DriveProX</title>
      </Head>
      <header style={{ 
        backgroundColor: '#2c3e50', 
        color: '#ecf0f1', 
        padding: '10px 20px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px'
      }}>
        <nav style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '15px' 
        }}>
          <a href="#" style={{ color: '#ecf0f1', marginRight: '15px', fontSize: '16px' }}>About Us</a>
          <a href="#" style={{ color: '#ecf0f1', marginRight: '15px', fontSize: '16px' }}>Your Dream Car</a>
          <a href="#" style={{ color: '#ecf0f1', marginRight: '15px', fontSize: '16px' }}>Contact Us</a>
          <a href="#" style={{ color: '#ecf0f1', marginRight: '15px', fontSize: '16px' }}>Become a Partner</a>
          <a href="#" style={{ color: '#ecf0f1', marginRight: '15px', fontSize: '16px' }}>Help Center</a>
        </nav>
        <div style={{ 
          color: '#ecf0f1', 
          fontSize: '14px', 
          textAlign: 'center' 
        }}>
          Need help? Call us: (+91) 9744 4000 | <a href="mailto:support@driveprox.com" style={{ color: '#ecf0f1' }}>support@driveprox.com</a>
        </div>
      </header>
      <main style={{ 
        padding: '20px', 
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ color: '#2c3e50', fontSize: '24px' }}>Powering Every Mile</h1>
        <p style={{ color: '#34495e', fontSize: '16px' }}>
          Enhance every journey with the right auto parts and accessories built for performance and comfort.
        </p>
        <form style={{ 
          backgroundColor: '#ffffff', 
          padding: '20px', 
          borderRadius: '5px', 
          display: 'inline-block', 
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <div style={{ marginBottom: '10px' }}>
            <label>Select Vehicle Make</label>
            <select style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}>
              <option value="">Select</option>
              <option value="make1">Make 1</option>
              <option value="make2">Make 2</option>
            </select>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Select Vehicle Model</label>
            <select style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}>
              <option value="">Select</option>
              <option value="model1">Model 1</option>
              <option value="model2">Model 2</option>
            </select>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Select Vehicle Year</label>
            <select style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}>
              <option value="">Select</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <button type="submit" style={{ 
            backgroundColor: '#27ae60', 
            color: '#ffffff', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            Search
          </button>
        </form>
        <p style={{ color: '#34495e', fontSize: '14px', marginTop: '10px' }}>
          Select your vehicle's make, model, and year to find the perfect fit!
        </p>
      </main>
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            flex-direction: column;
            padding: 10px;
          }
          nav {
            flex-direction: column;
            text-align: center;
          }
          nav a {
            margin: 5px 0;
          }
          main {
            padding: 10px;
          }
          form {
            max-width: 100%;
            padding: 15px;
          }
          select, button {
            width: 100% !important;
            margin: 5px 0;
          }
        }
      `}</style>
    </div>
  );
}