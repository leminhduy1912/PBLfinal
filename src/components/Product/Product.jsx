import { ProductImage } from "./../Image/ProductImage/ProductImage";
import "./Product.css";
export const Product = (props) => {
  const { product } = props;
  const {
    id,
    kindof,
    productName,
    companyName,
    certificates,
    userId,
    action,
    product_type: { id: typeId, name: typeName },
  } = product;
  return (
    <div className="product-card-container">
      <div className="product-card-content">
        <h2>{productName} </h2>
        <span>
          <i> &#x28; {typeName} &#x29;</i>
        </span>
        <h4>{companyName}</h4>
      </div>
      <div className="product-card-image">
        {certificates.length > 0 ? (
          certificates.map((image, index) => {
            return <ProductImage key={index} image={image} />;
          })
        ) : (
          <h1>No Certificates</h1>
        )}
      </div>
    </div>
  );
};
