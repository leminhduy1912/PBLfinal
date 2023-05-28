import React from "react";

const PostRowElement = (props) => {
  console.log("props", props.item.title);
  return (
    <>
      <tr>
        <td>{props.item.title}</td>
        <td>{props.item.content}</td>
        <td>{props.item.postTypeModel.typeName}</td>
      </tr>
    </>
  );
};

export default PostRowElement;
