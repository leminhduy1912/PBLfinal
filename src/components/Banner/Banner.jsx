import React from "react";
import "./Banner.css";
export const Banner = () => {
  return (
    <div className="Home">
      <div className="Home-content">
        <h2>
          Chi cục vệ sinh an toàn thực phẩm <br /> Thành Phố Đà Nẵng{" "}
        </h2>
        <h3>Tra cứu kết quả tại đây </h3>
        <form>
          <input type="text" placeholder="Nhập số ĐKKD" className="input-box" />
          <input type="text" placeholder="Nhập số ĐKKD" className="input-box" />
          <button>Tra Cứu</button>
        </form>
      </div>
    </div>
  );
};
