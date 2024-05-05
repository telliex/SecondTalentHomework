import { useState, useEffect } from "react";
import "./DetailRelated.scss";
import ProductItem from "./ProductItem";

function DetailRelated() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        // if (data.status === "OK") {
        setProducts(data);
        // } else {
        //   console.error("Failed to fetch products");
        // }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <div className="detail-related">
      <div className="block-title title h2">
        <strong id="block-related-heading">Related Products</strong>
      </div>
      <div
        className="block-content content"
        aria-labelledby="block-related-heading"
      >
        <div className="products wrapper grid products-grid products-related">
          <ol className="products list items product-items product-items-list">
            {products.map((item, index) => {
              return <ProductItem item={item}></ProductItem>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default DetailRelated;
