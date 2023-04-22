import { useState } from "react";
import { Pagination } from "@mui/material";
import { Navbar, Banner, Product } from "~components";
import { useProduct } from "~hooks";
import "./Home.css";

export const Home = () => {
  // const [isHome,setIsHome]= useState(true)
  // const [tabCurrent,setTabCurrent]= useState(0);
  // const [filter, setFilter] = useState({ product: "", company: "", page: 1 });
  // const [page, setPage] = useState(1);
  // const { data, error, loading, execute } = useProduct();
  // const onChange = (event, value) => {
  //   setPage(page);
  //   setFilter({ ...filter, page: value });
  // };
  
  return (
    <div className="homepage-container">
      <Navbar />
      
      {/* <Banner setFilter={setFilter} filter={filter} execute={execute} />
      {loading ? <>Loading...</> : <></>}
      {isHome ? <div> {data.items.length > 0 &&
        
        data.items.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      <br />
      {data?.pagination?.totalPages > 0 && (
        <Pagination
          count={data.pagination.totalPages}
          page={data.pagination.currentpage}
          onChange={onChange}
        />
      )} </div> : <></>} */}
    </div>
  );
};
