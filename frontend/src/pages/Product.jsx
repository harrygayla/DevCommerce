import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://your-flyio-backend.fly.dev/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl">{product.name}</h1>
      <p className="mb-2">Price: ${product.price}</p>
      <button className="btn btn-primary mt-4">Add to Cart</button>
    </div>
  );
};

export default Product;
