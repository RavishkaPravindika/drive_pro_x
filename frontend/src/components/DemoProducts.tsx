// import './DemoProducts.css';

interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number | string;
  stock: number;
}

export default function DemoProducts() {
  const demoProducts: Product[] = [
    { id: 6, name: 'Demo Wiper Blade', description: 'High-quality wiper', price: 19.99, stock: 100 },
    { id: 7, name: 'Demo Oil Filter', description: 'Engine protection', price: 29.99, stock: 150 },
    { id: 8, name: 'Demo Brake Pad', description: 'Durable braking', price: 39.99, stock: 200 },
  ];

  return (
    <section className="demo-products-section">
      <h2 className="section-title">Demo Products</h2>
      <div className="product-grid">
        {demoProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`/demo-product-${product.id}.jpg`} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="price">
              LKR {typeof product.price === 'number' ? product.price.toFixed(2) : parseFloat(String(product.price)).toFixed(2) || '0.00'}
            </p>
            <button className="btn-primary">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}