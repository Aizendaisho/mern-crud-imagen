import React from "react";
import { useApicall } from "../hooks/useApiCall";
import { Posts } from "../types";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useApicall();
  return (
    <div className="container">
      <Link to="/addpost">Nuevo Post</Link>
      <div className="grid grid-cols-4">
        {data?.map((post: Posts) => (
          <Link key={post._id} to={`/single/${post._id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
              </div>
              <figure>
                <img src={post?.image?.url} alt={post.title} />
              </figure>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
