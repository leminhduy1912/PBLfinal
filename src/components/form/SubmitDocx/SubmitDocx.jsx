import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./SubmitDocx.css";
import { useSubmitDocx } from "../../../hooks/Plan/useSubmitDocx";
import { StoreContext } from "~store";
import Loading from "../../Loading/Loading";
import { motion } from "framer-motion";
const SubmitDocx = (props) => {
  const [state] = useContext(StoreContext);
  const [filePath, setFilePath] = useState(null);
  const { statusCode, errorSubmitDocx, successSubmitDocx, executeSubmitDocx } =
    useSubmitDocx();
  const [message, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (statusCode === 201) {
      setLoading(false);
      props.handleShowModalSubmitDocx(false);
      props.handleShowSuccessAction("Submited Successfully");
    }
    if (statusCode === 409) {
      setMessage(true);
      setLoading(false);
    }
  }, [statusCode, executeSubmitDocx]);

  const handleSubmitDocx = async (planId) => {
    setLoading(true);
    await executeSubmitDocx(planId, filePath, state.id, state.token);
  };

  const handleFileChange = (e) => {
    setFilePath(e.target.files[0]);
  };

  return (
    <>
      {props.planId !== null && props.planId !== undefined && (
        <>
          {loading && <Loading />}
          <motion.div
            className="submit-docx-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="submit-docx-content">
              <h1>Submit Result</h1>
              <div className="x-icon">
                <FaTimes
                  onClick={() => {
                    props.handleShowModalSubmitDocx(false);
                  }}
                />
              </div>
              <form>
                <label htmlFor="file-input">Chọn file:</label>
                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                />
              </form>
              {message && (
                <span>Bạn đã nộp bản báo cáo cho kế hoạch này trước đây</span>
              )}

              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmitDocx(props.planId);
                }}
              >
                Submit
              </button>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default SubmitDocx;
