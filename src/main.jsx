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
import CourseManin from "./Courses/CourseManin.jsx";
import SangolaOflline from "./Courses/SangolaOflline.jsx";
import Html from "./Courses/FrontEnd/HTML/Html.jsx";
import CssCourse from "./Courses/FrontEnd/CSS/CssCourse.jsx";
import Bootstrap from "./Courses/FrontEnd/Bootstrap/Bootstrap.jsx";
import TemplateModification from "./Courses/FrontEnd/TemplateModification/TemplateModification.jsx";
import JavaScript from "./Courses/FrontEnd/JavaScript/JavaScript.jsx";
import JQuery from "./Courses/FrontEnd/JQuery/JQuery.jsx";
import React_js from "./Courses/FrontEnd/React js/React.jsx";
import CoreJava from "./Courses/Back End/CoreJava/CoreJava.jsx";
import AdvJava from "./Courses/Back End/Advance Java/AdvJava.jsx";
import FrameWorks from "./Courses/Back End/Frameworks/FrameWorks.jsx";
import DataBase from "./Courses/Back End/DataBase/DataBase.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallary" element={<Gallary />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="course" element={<CourseManin />} />
        <Route path="/course/sangolaofflineCourses" element={<SangolaOflline />} />
      </Route>
      <Route path="/course/html" element={<Html />} />
      <Route path="/course/css" element={<CssCourse />} />
      <Route path="/course/bootstrap" element={<Bootstrap />} />
      <Route
        path="/course/template-modification"
        element={<TemplateModification />}
      />
      <Route path="/course/javascript" element={<JavaScript />} />
      <Route path="/course/jQuery" element={<JQuery />} />
      <Route path="/course/React" element={<React_js />} />
      <Route path="/course/java" element={<CoreJava />} />
      <Route path="/course/AdvJava" element={<AdvJava />} />
      <Route path="/course/Frameworks" element={<FrameWorks />} />
      <Route path="/course/Database" element={<DataBase />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />
);
