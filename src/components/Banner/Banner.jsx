import React, { useState } from "react";
import "./Banner.css";
export const Banner = ({ setFilter, filter, execute }) => {
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const onClick = (e) => {
    e.preventDefault();
    setFilter({ ...filter, company: company, product: product });
    execute({ ...filter, company: company, product: product });
    setProduct("");
    setCompany("");
  };
  return (
    <div className="Home">
      <div className="Home-content">
        <h2>
          Chi cục vệ sinh an toàn thực phẩm <br /> Thành Phố Đà Nẵng
        </h2>
        <h3>Tra cứu kết quả tại đây </h3>
        <form>
          <input
            type="text"
            placeholder="Nhập Ten Cong Ty"
            className="input-box"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nhập Ten San Pham / Thuc Pham"
            className="input-box"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <button onClick={(e) => onClick(e)}>Tra Cứu</button>
        </form>
      </div>
    </div>
  );
};
