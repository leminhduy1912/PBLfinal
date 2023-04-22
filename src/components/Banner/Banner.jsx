import React, { useState } from "react";
import "./Banner.css";
import { useProduct } from "~hooks";
import { Product } from "../Product/Product";
import { Pagination } from "@mui/material";
export const Banner = () => {
  const [isHome,setIsHome]= useState(true)
  const [tabCurrent,setTabCurrent]= useState(0);
  const [filter, setFilter] = useState({ product: "", company: "", page: 1 });
  const [page, setPage] = useState(1);
  const { data, error, loading, execute } = useProduct();
  const onChange = (event, value) => {
    setPage(page);
    setFilter({ ...filter, page: value });
  };




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
    <div>
    <div className="Home">
      <div className="Home-content">
        <h2>
          Chi cục vệ sinh an toàn thực phẩm <br /> Thành Phố Đà Nẵng
        </h2>
        <h3>Tra cứu kết quả tại đây </h3>
        <form>
          <input
            type="text"
            placeholder="Nhập Tên Công Ty"
            className="input-box"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nhập Tên Sản Phẩm / Thực Phẩm"
            className="input-box"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <button onClick={(e) => onClick(e)}>Tra Cứu</button>
        </form>
      </div>
    </div>


    {/* {<div> loading ? <>Loading...</> : <></>  </div>} */}
      {isHome ? <div> {data.items.length > 0 &&
        data.items.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      <br />
      {data?.pagination?.totalPages > 0 && (
        <div className="pagination">

          <Pagination
            count={data.pagination.totalPages}
            page={data.pagination.currentpage}
            onChange={onChange}
          />
        </div>
      )} </div> : <></>}

</div>
  );
};
