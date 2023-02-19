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
