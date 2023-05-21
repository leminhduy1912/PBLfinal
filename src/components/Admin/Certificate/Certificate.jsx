import { useFetchCertificate } from "../../../hooks/Certificate/useFetchCertificate";
import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import CertificateRow from "../../tables/CertificateRow/CertificateRow";
import "./Certificate.css";
import AddCertificate from "../../form/AddCertificate/AddCertificate";
import UpdateCertificate from "../../form/UpdateCertificate/UpdateCertificate";
import ActionSuccess from "../../ActionSuccess/ActionSuccess";
const Certificate = () => {
  const [showModalAddCertificate, setShowModalAddCertificate] = useState(false);
  const handleShowModalAddCertificate = (value) => {
    setShowModalAddCertificate(value);
  };
  const [showModalUpdateCertificate, setShowModalUpdateCertificate] =
    useState(false);
  const handleShowModalUpdateCertificate = (value) => {
    setShowModalUpdateCertificate(value);
  };

  const [formDataCertificate, setFormDataCertificate] = useState({
    action: "",
    description: "",
    id: "",
    name: "",
    path: "",
  });
  const handleSetFormDataCertificate = (Obj) => {
    setFormDataCertificate(Obj);
  };
  const [filter, setFilter] = useState({ page: 1 });
  const { pagination, data, success, error, loading, execute } =
    useFetchCertificate();
  const [listCertificates, setListCertificate] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [messageAction, setMessageAction] = useState("");
  const getCertificates = () => {
    setFilter({ page: 1 });
    execute(filter);
  };
  useEffect(() => {
    execute(filter);
  }, []);
  useEffect(() => {
    if (success == true) {
      setIsLoaded(true);
      setListCertificate(data);
      console.log(pagination);
    }
  }, [data, success]);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleSetShowSuccess = (message) => {
    setMessageAction(message);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      {showSuccess && <ActionSuccess messageAction={messageAction} />}
      {showModalAddCertificate && (
        <AddCertificate
          handleShowModalAddCertificate={handleShowModalAddCertificate}
          getCertificates={getCertificates}
          handleSetShowSuccess={handleSetShowSuccess}
        />
      )}
      {showModalUpdateCertificate && (
        <UpdateCertificate
          handleShowModalUpdateCertificate={handleShowModalUpdateCertificate}
          formDataCertificate={formDataCertificate}
          getCertificates={getCertificates}
          handleSetShowSuccess={handleSetShowSuccess}
        />
      )}
      <div className="certificate-container">
        <div className="certificate-header">
          <h1>Certificates Management</h1>
          <button onClick={() => setShowModalAddCertificate(true)}>
            Add Certificate
          </button>
        </div>

        <table className="certificate-table">
          <thead>
            <tr>
              <th>Tên chứng chỉ</th>
              <th>Mô tả</th>
              <th className="certificate-img">Hình ảnh</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoaded &&
              Array.isArray(listCertificates) &&
              listCertificates.map((item, index) => {
                return (
                  <CertificateRow
                    key={index}
                    index={index + 1}
                    certificate={item}
                    handleShowModalUpdateCertificate={
                      handleShowModalUpdateCertificate
                    }
                    formDataCertificate={formDataCertificate}
                    handleSetFormDataCertificate={handleSetFormDataCertificate}
                    getCertificates={getCertificates}
                    handleSetShowSuccess={handleSetShowSuccess}
                  />
                );
              })}
          </tbody>
        </table>
        {isLoaded && (
          <div className="pagination">
            <Pagination
              count={pagination.totalResults}
              showFirstButton
              showLastButton
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Certificate;
