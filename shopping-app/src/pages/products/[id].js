import { useSelector } from "react-redux";

export default function Product() {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>${selectedProduct.price.toFixed(2)}</p>
      <p>{selectedProduct.description}</p>
    </div>
  );
}
