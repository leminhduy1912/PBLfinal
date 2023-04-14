import { Pagination } from "@mui/material";
import { ProductRow } from "~components";
import { useAdminProduct } from "~hooks";

export const ProductAdmin = () => {
  const { data, error, loading } = useAdminProduct();
  return (
    <>
      <div>
        <h1>Recent Stores</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Company name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data.items) &&
              data.items.map((item, index) => {
                return (
                  <ProductRow key={index} index={index + 1} product={item} />
                );
              })}
          </tbody>
        </table>
        {loading && <div>Loading...</div>}
        {data.items && (
          <>
            <br />
            <Pagination
              count={data.pagination.totalPages}
              showFirstButton
              showLastButton
              page={data.pagination.currentPage}
              onPage
              // onChange={handleOnChange}
            />
          </>
        )}
      </div>
    </>
  );
};
