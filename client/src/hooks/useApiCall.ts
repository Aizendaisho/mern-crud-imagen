import { axiosPost } from "../reequest";
import { useQuery } from "@tanstack/react-query";

const getPosts = () => {
  return axiosPost.get("/posts");
};



export const useApicall = () => {
  return useQuery(["posts"], getPosts, {
    select: (data) => {
      return data.data;
    },
  });
};

const getOnePostAxios = (id: string) => {
  return axiosPost.get(`/posts/${id}`);
};
export const getOnePost = (id: string) => {
  return useQuery(["post", id], () => getOnePostAxios(id), {
    select: (data) => {
      return data.data;
    },
  });
};

export const deleteOnePostAxios = (id: string) => {
  return axiosPost.delete(`/posts/${id}`);
};