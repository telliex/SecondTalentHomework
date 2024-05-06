import { useState, useEffect } from "react";
import "./App.scss";
import ToolsBar from "./ToolsBar";
import ToolsBarFooter from "./ToolsBarFooter";
import ProductItem from "./ProductItem";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);

        setProducts([...data.sort((a, b) => a.rating.rate - b.rating.rate)]);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  function getFilter(data) {
    if (data === "rank") {
      console.log(products.sort((a, b) => a.rating.rate - b.rating.rate));
      setProducts([...products.sort((a, b) => a.rating.rate - b.rating.rate)]);
    } else if (data === "name") {
      console.log(products.sort((a, b) => a.name - b.name));
      setProducts([...products.sort((a, b) => a.name - b.name)]);
    } else {
      console.log(products.sort((a, b) => a.price - b.price));
      setProducts([...products.sort((a, b) => a.price - b.price)]);
    }
  }

  return (
    <div className="App">
      <div className="columns">
        <div className="sidebar sidebar-main">
          <div className="options">
            <div className="sub-title">Shopping Options</div>
            <ul>
              <li>Style</li>
              <li>Category</li>
              <li>Style</li>
              <li>Size</li>
              <li>Price</li>
              <li>Color</li>
            </ul>
          </div>
          <div className="compare">
            <div className="sub-title">
              Compare Products <span>(2 items)</span>
            </div>
            <ul>
              <li>Summit Watch</li>
              <li>Cruise Dual Analog Watch</li>
            </ul>
            <div className="compare-buttons">
              <button>Compare</button>
              <a href="#">Clear All</a>
            </div>
          </div>
          <div className="wishlist">
            <div className="sub-title">My Wish List</div>
            <p>You have no items in your wish list.</p>
          </div>
        </div>
        <div className="column main">
          <ToolsBar getFilter={getFilter} />
          <div className="products wrapper grid products-grid">
            <ol className="products list items product-items product-items-list">
              {products.map((item) => {
                return <ProductItem item={item}></ProductItem>;
              })}
            </ol>
          </div>
          <ToolsBarFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
