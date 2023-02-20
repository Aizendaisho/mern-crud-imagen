import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosPost } from "../reequest";
import { deleteOnePostAxios, getOnePost } from "../hooks/useApiCall";

export default function SinglePost() {
  const navegate = useNavigate();
  const { _id } = useParams();
  const myId = _id ?? "defaultId";
  const { data } = getOnePost(myId);
  const deletePost = (id: string) => {
    deleteOnePostAxios(id);
    navegate("/");
  };

  return (
    <div>
      <img src={data?.image?.url} alt={data?.title} />
      <h2>{data?.title}</h2>
      <h2>{data?.description}</h2>
      <button onClick={() => deletePost(data._id)}>borrar</button>
    </div>
  );
}
