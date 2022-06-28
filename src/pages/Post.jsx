import React from "react";
// import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  const status = 404;

  const navigate = useNavigate();

  if (status === 404) {
    <Navigate to="/notfound" />;
  }

  const onClick = () => {
    console.log("Hello");
    navigate("/about");
  };

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello world</h1>}></Route>
      </Routes>
    </div>
  );
  // const params = useParams();

  // return (
  //   <div>
  //     <h1>Post : {params.id}</h1>
  //     <h1>Name : {params.name}</h1>
  //   </div>
  // );
}

export default Post;
