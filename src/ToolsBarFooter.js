import "./ToolsBarFooter.scss";
import { useState, forwardRef, useImperativeHandle } from "react";
const ToolsBarFooter = forwardRef((props, ref) => {
  const [selectedOption, setSelectedOption] = useState(12);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(Number(value));
    props.getHowMany(Number(value));
  };

  useImperativeHandle(ref, () => ({
    setDefaultPage() {
      setSelectedOption(12);
    },
  }));

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
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="12">12</option>
              <option value="50">50</option>
              <option value="100">100</option>
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
});

export default ToolsBarFooter;
