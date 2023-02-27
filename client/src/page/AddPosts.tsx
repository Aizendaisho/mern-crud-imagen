import React from 'react'
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { postStore } from "../store/useStore";
import { createPost } from "../hooks/useApiCall";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function AddPosts() {
  const { post, setPost } = postStore();
  const navegate = useNavigate();

  // const handlerSubmit = (event: any) => {
  // }
  const queryClient = useQueryClient();
  const addPost = () => {
    return useMutation(createPost, {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    });
  };

  const { mutate: addingPost } = addPost();
  return (
    <div>
      <Link to="/">A Home</Link>
      <h1>Nuevo post</h1>
      <Formik
        onSubmit={(values: any, actions: any) => {
          const { title, description, image } = values;
          setPost(values);
          addingPost(values);
          navegate("/");
        }}
        initialValues={{
          title: "",
          description: "",
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field className="input" name="title" placeholder="title" />
            <Field
              className="input"
              name="description"
              placeholder="description"
            />
            <button type="submit" className="btn">
              agregar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
