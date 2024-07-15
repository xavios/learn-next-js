import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Posts, { loader as PostsLoader } from "./routes/Posts";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import StarRating, {
  loader as starRatingLoader,
  action as starRatingAction,
} from "./routes/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: PostsLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: "/star-rating/:id",
            element: <StarRating />,
            loader: starRatingLoader,
            action: starRatingAction,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
