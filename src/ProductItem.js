import "./ProductItem.scss";
// import { Link, useNavigate } from "react-router-dom";
import Detail from "./Detail";
function ProductItem({ item }) {
  return (
    <li key={item.title + item.id} className="item product product-item">
      <a
        href={"./detail?id=" + item.id}
        className="product photo product-item-photo-container"
        tabIndex="-1"
      >
        <span className="product-image-container product-image-container-1396">
          <span className="product-image-wrapper">
            <img
              className="product-image-photo"
              src={item.image}
              loading="lazy"
              width="213"
              alt={item.description}
            />
          </span>
        </span>
      </a>
      <div className="product details product-item-details">
        <strong className="product name product-item-name">
          <a
            className="product-item-link"
            href="https://mabento2.test/juno-jacket.html"
            alt={item.title}
          >
            {item.title}
          </a>
        </strong>
        <div
          className="price-box price-final_price product-price"
          data-role="priceBox"
          data-product-id="1380"
          data-price-box="product-id-1380"
        >
          <span className="normal-price">
            <span className="price-container price-final_price tax weee">
              <span
                id="product-price-1380"
                data-price-amount="77"
                data-price-type="finalPrice"
                className="price-wrapper "
              >
                <span className="price line-through">${item.price}</span>
              </span>
            </span>
          </span>
          <span className="discount-price">
            <span className="price-container price-final_price tax weee">
              <span
                id="product-price-1380"
                data-price-amount="77"
                data-price-type="finalPrice"
                className="price-wrapper "
              >
                <span className="price">${item.price}</span>
              </span>
            </span>
          </span>
        </div>
        <div className="product-reviews-summary short">
          <div className="rating-summary">
            <span className="label">
              <span>Rating:</span>
            </span>
            <div
              className="rating-result"
              id="rating-result_1380"
              title={(item.rating.rate / 5) * 100 + "%"}
            >
              <span style={{ width: (item.rating.rate / 5) * 100 + "%" }}>
                <span
                  style={{
                    width: (item.rating.rate / 5) * 100 + "%",
                  }}
                >
                  {(item.rating.rate / 5) * 100 + "%"}
                </span>
              </span>
            </div>
          </div>
          <div className="reviews-actions">
            <a
              className="action view"
              href="https://mabento2.test/juno-jacket.html#reviews"
            >
              {item.rating.count} &nbsp;<span>Reviews</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
