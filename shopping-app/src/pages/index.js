import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../store/actions/productsActions";
import Link from "next/link";

export default function Home() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleSelectProduct = (product) => {
    dispatch(selectProduct(product));
  };

  return (
    <div>
      <h1>Welcome to Our Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link href={`/products/${product.id}`}>
              <a onClick={() => handleSelectProduct(product)}>View Details</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
