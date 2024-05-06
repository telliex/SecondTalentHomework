import "./Detail.scss";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DetailImages from "./DetailImages";
import DetailInfoList from "./DetailInfoList";
import DetailRelated from "./DetailRelated";
function Detail() {
  const [products, setProducts] = useState({});
  const [params] = useSearchParams();
  useEffect(() => {
    const id = params.get("id");
    fetch("https://fakestoreapi.com/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log("data1111:", data);
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
    <>
      <div className="breadcrumbs">
        <ul className="items">
          <li className="item home">
            <a href="https://mabento2.test/" title="Go to Home Page">
              Home
            </a>
          </li>

          <li className="item category">
            <a href="https://mabento2.test/women.html" title="">
              Women
            </a>
          </li>

          <li className="item category">
            <a href="https://mabento2.test/women/tops-women.html" title="">
              Tops
            </a>
          </li>

          <li className="item category">
            <a
              href="https://mabento2.test/women/tops-women/jackets-women.html"
              title=""
            >
              Jackets
            </a>
          </li>

          <li className="item product">
            <strong>{products.title}</strong>
          </li>
        </ul>
      </div>

      <div className="columns product-detail">
        <div className="column main">
          <div className="product media">
            <DetailImages products={products} />
          </div>
          <div className="product-info-main">
            <div className="page-title-wrapper product">
              <h1 className="page-title">
                <span
                  className="base"
                  data-ui-id="page-title-wrapper"
                  itemProp="name"
                >
                  {products.title}
                </span>
              </h1>
            </div>
            <div className="summary">As low as</div>
            <div className="product-info-price">
              <div
                className="price-box price-final_price"
                data-role="priceBox"
                data-product-id="1396"
                data-price-box="product-id-1396"
              >
                <span className="normal-price">
                  <span
                    className="price-container price-final_price tax weee"
                    itemProp="offers"
                    itemScope=""
                    itemType="http://schema.org/Offer"
                  >
                    <span
                      id="product-price-1396"
                      data-price-amount="77"
                      data-price-type="finalPrice"
                      className="price-wrapper "
                    >
                      <span className="price">${products.price}</span>
                    </span>
                    <meta itemProp="price" content="77" />
                    <meta itemProp="priceCurrency" content="USD" />
                  </span>
                </span>
              </div>
              <div className="product-info-stock-sku">
                <div className="stock available" title="Availability">
                  <span>In stock</span>
                </div>

                <div className="product attribute sku">
                  <strong className="type">SKU#:</strong>
                  <div className="value" itemProp="sku">
                    {products.id}
                  </div>
                </div>
              </div>
            </div>
            <div className="product-add-form">
              <div className="product-options-bottom">
                <div className="box-tocart">
                  <div className="fieldset">
                    <div className="field qty">
                      <label className="label" htmlFor="qty">
                        <span>Quantity</span>
                      </label>
                      <div className="control">
                        <input
                          type="number"
                          name="qty"
                          id="qty"
                          min="0"
                          title="Qty"
                          className="input-text qty"
                          data-validate=""
                        />
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        type="submit"
                        title="Add to Cart"
                        className="action primary tocart"
                        id="product-addtocart-button"
                      >
                        <span>Add to Cart</span>
                      </button>

                      <div
                        id="instant-purchase"
                        data-bind="scope:'instant-purchase'"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-social-links">
              <div className="product-addto-links" data-role="add-to-links">
                <a
                  href="#"
                  className="action towishlist"
                  data-post='{"action":"https:\/\/mabento2.test\/wishlist\/index\/add\/","data":{"product":1396,"uenc":"aHR0cHM6Ly9tYWJlbnRvMi50ZXN0L29saXZpYS0xLTQtemlwLWxpZ2h0LWphY2tldC5odG1s"}}'
                  data-action="add-to-wishlist"
                >
                  <span>Add to Wish List</span>
                </a>

                <a
                  href="#"
                  data-post='{"action":"https:\/\/mabento2.test\/catalog\/product_compare\/add\/","data":{"product":"1396","uenc":"aHR0cHM6Ly9tYWJlbnRvMi50ZXN0L29saXZpYS0xLTQtemlwLWxpZ2h0LWphY2tldC5odG1s"}}'
                  data-role="add-to-links"
                  className="action tocompare"
                >
                  <span>Add to Compare</span>
                </a>
                <a
                  href="#"
                  data-post='{"action":"https:\/\/mabento2.test\/catalog\/product_compare\/add\/","data":{"product":"1396","uenc":"aHR0cHM6Ly9tYWJlbnRvMi50ZXN0L29saXZpYS0xLTQtemlwLWxpZ2h0LWphY2tldC5odG1s"}}'
                  data-role="add-to-mail"
                  className="action tomail"
                >
                  <span>EMAIL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product info detailed">
        <DetailInfoList />
      </div>

      <div className="block related">
        <DetailRelated />
      </div>
    </>
  );
}

export default Detail;
