import "./ToolsBar.scss";
function ToolsBar() {
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
          <select id="sorter" data-role="sorter" className="sorter-options">
            <option value="position">Position </option>
            <option value="name">Product Name </option>
            <option value="price">Price </option>
          </select>
          <a
            title="Set Descending Direction"
            href="#"
            className="action sorter-action sort-asc"
            data-role="direction-switcher"
            data-value="desc"
          >
            <span>Set Descending Direction</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ToolsBar;
