import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://your-flyio-backend.fly.dev/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg">{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
