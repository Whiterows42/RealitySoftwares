import React from "react";
import All from "../AllCourseReusable";
import data from "./CssData";
function CssCourse() {
  const heading = {
    title: "Css",
    p1: "CSS (Cascading Style Sheets) is a stylesheet language essential for web development. It works alongside HTML to control the visual presentation and layout of web pages, allowing designers and developers to define the colors, fonts, spacing, and positioning of elements on a website. CSS employs a selector-based syntax, enabling precise targeting of HTML elements to apply styles systematically and consistently across a site.",
    p2: "It plays a crucial role in creating aesthetically pleasing and user-friendly web experiences, separating content from presentation and facilitating responsive design for various devices and screen sizes. CSS's cascading nature allows multiple style rules to apply to a single element, with the most specific rule taking precedence, providing flexibility and efficiency in designing web interfaces.",
  };
  const requirment = {
    computer:
      "You'll need access to a computer, whether it's a desktop or laptop, to practice coding and view your CSS in a web browser.",
    textEditor: " You'll need a text editor to write CSS .",
    webbrowser:
      "You'll need a web browser (e.g., Chrome, Firefox, Safari) to view and test your HTML & CSS pages.",
    practice:
      "Learning CSS takes time and practice, so be patient with yourself.",
  };
  return <All requirment={requirment} p={heading} data={data} />;
}

export default CssCourse;
