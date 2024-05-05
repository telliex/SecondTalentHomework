import "./ToolsBarFooter.scss";
function ToolsBarFooter() {
  return (
    <>
      <div className="toolbar toolbar-products toolbar-footer">
        <div className="field limiter">
          <label className="label" htmlFor="limiter">
            <span>Show</span>
          </label>
          <div className="control">
            <select
              id="limiter"
              data-role="limiter"
              className="limiter-options"
            >
              <option value="12">12 </option>
              <option value="24">24 </option>
              <option value="36">36 </option>
            </select>
          </div>
          <span className="limiter-text">per page</span>
        </div>
        <div className="navigation-bar">
          <div> </div>
          <ul>
            <li className="focus">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <button> &gt; </button>
        </div>
      </div>
    </>
  );
}

export default ToolsBarFooter;
