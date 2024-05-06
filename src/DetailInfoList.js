import "./DetailInfoList.scss";
function DetailInfoList() {
  let properties = [
    {
      title: "Details",
      content:
        "The sofa quickly and easily turns into a spacious bed. It is recommended to use as a sleeping place for guests, not intended for daily use as a bed.",
    },
    { title: "Size", content: "" },
    { title: "Care instructions", content: "" },
    { title: "Quality and environmental information", content: "" },
    { title: "Packing Information", content: "" },
    { title: "Instructions and documents", content: "" },
    { title: "Product Availability", content: "" },
    { title: "Reviews", content: "" },
  ];
  return (
    <>
      <ul className="product-info">
        {properties.map((property, index) => (
          <li
            key={index + property.title}
            className={index === 0 ? "extend" : ""}
          >
            <div className="properties-title">{property.title}</div>
            <div className="properties-content">{property.content}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DetailInfoList;
