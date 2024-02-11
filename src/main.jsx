import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Componant/Home/Home.jsx";
import About from "./Componant/About/About.jsx";
import Gallary from "./Componant/Gallary/Gallary.jsx";
import Blog from "./Componant/Blogs/Blog.jsx";
import Contact from "./Componant/Contact/Contact.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="gallary" element={<Gallary/>} />
      <Route path="blog" element={<Blog/>} />
      <Route path="contact" element={<Contact/>} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
