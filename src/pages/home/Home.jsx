import { useState } from "react";
import { Navbar, Banner } from "../../components";
import "./Home.css";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useProduct } from "../../hooks";
import { ImageURI } from "../../utils";
export const Home = () => {
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const [data] = useProduct(null);
  return (
    <div className="homePage-container">
      <Navbar />
      <Banner />
      {data.length > 0 && (
        <img
          loading="lazy"
          src={ImageURI(data[0].certificates[0].path)}
          alt=""
        />
      )}
    </div>
  );
};
