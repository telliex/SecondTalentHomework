import { useState, useEffect } from "react";
import "./DetailRelated.scss";
import ProductItem from "./ProductItem";

function DetailRelated() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
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
          <ol className="products items product-items product-items-list">
            {products.slice(0, 4).map((item, index) => {
              return (
                <ProductItem
                  key={item.id}
                  item={item}
                  type="grid"
                ></ProductItem>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default DetailRelated;
