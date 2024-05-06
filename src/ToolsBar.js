import "./ToolsBar.scss";
import { useState } from "react";
function ToolsBar({ getFilter, reverseData }) {
  const [selectedOption, setSelectedOption] = useState("rank");
  const [order, setOrder] = useState(false);
  // 當選擇改變時觸發的函數
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setOrder(false);
    getFilter(value);

    // 在這裡添加你想要觸發的其他函數
    // 舉例：handleOtherFunction(value);
  };

  const changeOrder = () => {
    setOrder(!order);
    reverseData(selectedOption);
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
            className="modes-mode active mode-grid"
            data-value="grid"
          >
            <span>Grid</span>
          </strong>
          <a
            className="modes-mode mode-list"
            title="List"
            href="#"
            data-role="mode-switcher"
            data-value="list"
            id="mode-list"
            aria-labelledby="modes-label mode-list"
          >
            <span>List</span>
          </a>
        </div>
        <p className="toolbar-amount" id="toolbar-amount">
          <span className="toolbar-number">12</span> Items{" "}
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
