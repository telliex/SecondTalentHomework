import "./ToolsBar.scss";
import { useState } from "react";
function ToolsBar({ getFilter, reverseData, products, setProductItemsType }) {
  const [selectedOption, setSelectedOption] = useState("rank");
  const [order, setOrder] = useState(false);
  const [itemTye, setItemType] = useState("grid");
  // 當選擇改變時觸發的函數
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setOrder(false);
    getFilter(value);
  };

  const changeOrder = () => {
    setOrder(!order);
    reverseData(selectedOption);
  };

  const changeItemType = (data) => {
    setItemType(data);
    setProductItemsType(data);
  };

  return (
    <>
      <div className="toolbar toolbar-products toolbar-header">
        <div className="shop-by">
          <button>Shop By</button>
        </div>
        <div className="modes">
          <strong className="modes-label" id="modes-label">
            View as
          </strong>
          <strong
            title="Grid"
            className={
              "modes-mode mode-grid " + (itemTye === "grid" ? " active" : "")
            }
            data-value="grid"
            onClick={() => changeItemType("grid")}
          >
            <span>Grid</span>
          </strong>
          <strong
            title="List"
            className={
              "modes-mode  mode-list" + (itemTye !== "grid" ? " active" : "")
            }
            data-value="list"
            id="mode-list"
            onClick={() => changeItemType("list")}
          >
            <span>List</span>
          </strong>
        </div>
        <p className="toolbar-amount" id="toolbar-amount">
          <span className="toolbar-number">{products.length}</span> Items
        </p>
        <div className="toolbar-sorter sorter">
          <label className="sorter-label" htmlFor="sorter">
            Sort By
          </label>
          <select
            id="sorter"
            data-role="sorter"
            className="sorter-options"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="rank">Rating</option>
            <option value="name">Product Name </option>
            <option value="price">Price </option>
          </select>
          <div
            className={
              "action sorter-action sort-asc" +
              (order === true ? " reverse" : "")
            }
            onClick={changeOrder}
          >
            <span>Set Descending Direction</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolsBar;
