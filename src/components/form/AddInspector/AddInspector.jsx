import React, { useContext, useState } from "react";
import "./AddInspector.css";
import { FaTimes } from "react-icons/fa";
import { useGetAllMods } from "../../../hooks/User/useGetAllMods";
import { StoreContext } from "~store";
import { useAddInspectorToPlan } from "../../../hooks/Plan/useAddInspectorToPlan";
const AddInspector = (props) => {
  const [formAddInspectorToPlan, setFormAddInspectorToPlan] = useState({
    planId: props.planId,
  });
  const { dataGetAllMods, errorGetAllMods, loadingGetAllMods } =
    useGetAllMods();
  const { errorAddInspectorToPlan, executeAddInspectorToPlan } =
    useAddInspectorToPlan();
  const [state] = useContext(StoreContext);
  const handleAddInspectorToPlan = async (e) => {
    e.preventDefault();
    await executeAddInspectorToPlan(
      formAddInspectorToPlan,
      state.id,
      state.token
    );
    if (errorAddInspectorToPlan === "") {
      props.handleShowModalAddInspectorToPlan(false);
      props.handleShowSuccessAction("Added Moderator Successfully");
    }
  };
  return (
    <div className="add-inspector-container">
      <div className="add-inspector-content">
        <h1>Add Inspector To Plan</h1>
        <div className="x-icon">
          <FaTimes
            onClick={() => {
              props.handleShowModalAddInspectorToPlan(false);
            }}
          />
        </div>
        <form action="">
          <label htmlFor="Chọn thanh tra:">Chọn thanh tra:</label>
          <select
            name=""
            id=""
            onChange={(e) => {
              setFormAddInspectorToPlan({
                ...formAddInspectorToPlan,
                userId: e.target.value,
              });
            }}
          >
            <option value="" disabled selected>
              Chọn thanh tra:
            </option>
            {dataGetAllMods.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.fullName}
                </option>
              );
            })}
          </select>
        </form>

        <button onClick={handleAddInspectorToPlan}>Submit</button>
      </div>
    </div>
  );
};

export default AddInspector;
