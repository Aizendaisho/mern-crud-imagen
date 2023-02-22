import React from 'react'
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { postStore } from "../store/useStore";

export default function AddPosts() {
  const { post, setPost } = postStore();
  console.log(post);
  // const handlerSubmit = (event: any) => {

  // }
  return (
    <div>
      <Link to="/">A Home</Link>
      <h1>Nuevo post</h1>
      <Formik
        onSubmit={(values: any, actions: any) => {
          setPost(values);
          console.log(post);
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
