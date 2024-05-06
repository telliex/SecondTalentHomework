import { useState, useEffect, useRef } from "react";
import "./App.scss";
import ToolsBar from "./ToolsBar";
import ToolsBarFooter from "./ToolsBarFooter";
import ProductItem from "./ProductItem";

function App() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("rank");
  const footerToolsBar = useRef();
  const [itemType, setItemType] = useState("grid");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts([
          ...data.slice(0, 12).sort((a, b) => a.rating.rate - b.rating.rate),
        ]);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  function setProductItemsType(type) {
    setItemType(type);
  }

  function getFilter(data) {
    setFilter(data);
    if (footerToolsBar.current) {
      footerToolsBar.current.setDefaultPage();
    }

    if (data === "rank") {
      setProducts([...products.sort((a, b) => a.rating.rate - b.rating.rate)]);
    } else if (data === "name") {
      setProducts([
        ...products.slice(0, 12).sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        }),
      ]);
    } else {
      setProducts([...products.sort((a, b) => a.price - b.price)]);
    }
  }

  const reverseData = (data) => {
    setProducts([...products.reverse()]);
  };

  const getHowMany = (num) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (filter === "rank") {
          setProducts([
            ...data.slice(0, num).sort((a, b) => a.rating.rate - b.rating.rate),
          ]);
        } else if (filter === "name") {
          setProducts([
            ...data.slice(0, num).sort((a, b) => {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            }),
          ]);
        } else {
          setProducts([
            ...data.slice(0, num).sort((a, b) => a.price - b.price),
          ]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

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
          <ToolsBar
            getFilter={getFilter}
            reverseData={reverseData}
            products={products}
            setProductItemsType={setProductItemsType}
          />
          <div className="products wrapper grid products-grid">
            <ol
              className={
                "products items product-items product-items-list" +
                (itemType !== "grid" ? " list" : "")
              }
            >
              {products.map((item) => {
                return (
                  <ProductItem
                    key={item.id}
                    item={item}
                    type={itemType}
                  ></ProductItem>
                );
              })}
            </ol>
          </div>
          <ToolsBarFooter ref={footerToolsBar} getHowMany={getHowMany} />
        </div>
      </div>
    </div>
  );
}

export default App;
