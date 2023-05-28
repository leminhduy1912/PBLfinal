import { StoreContext } from "~store";
import { useGetAllPosts } from "../../../hooks/Post/useGetAllPosts";

import React, { useContext } from "react";
import PostRowElement from "../../../components/tables/Post/PostRowElement";

const Post = () => {
  const [state] = useContext(StoreContext);
  const { data, success, error, loading, execute } = useGetAllPosts(
    state.id,
    state.token
  );

  return (
    <div className="post-container">
      <div className="post-header">
        <h1>Post</h1>
      </div>

      <div className="post-content">
        <table className="post-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((item, index) => {
                console.log(item);
                return (
                  <PostRowElement key={index} index={index + 1} item={item} />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Post;
