import React from "react";
import { useApicall } from "../hooks/useApiCall";
import { Posts } from "../types";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useApicall();
  console.log(data);
  return (
    <div className="grid grid-cols-4">
      {data?.map((post: Posts) => (
        <Link key={post._id} to={`/single/${post._id}`}>
          <div>
            <img src={post.image?.url} alt={post?.title} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
