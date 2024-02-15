import React from "react";
import All from "../AllCourseReusable";

const heading = {
  title: "bootstrap",
  p1: "Bootstrap is a popular front-end framework for web development. It provides a comprehensive set of pre-designed HTML, CSS, and JavaScript components and styles that streamline the process of building responsive and visually appealing websites and web applications.",
  p2: "Bootstrap simplifies layout, typography, forms, navigation, and other UI elements, making it accessible to developers of all skill levels. By incorporating a responsive grid system, Bootstrap ensures that websites look and function well on various screen sizes and devices. Its extensive documentation and active community support further enhance its usability, making it a go-to choice for creating modern, consistent, and efficient web interfaces.",
};

const requirment = {
  computer:
    "You'll need access to a computer, whether it's a desktop or laptop, to practice coding and view your Bootstrap files in a web browser.",
  textEditor: " You'll need a text editor to write HTML code.",
  webbrowser:
    "You'll need a web browser (e.g., Chrome, Firefox, Safari) to view and test your BootStrap Web pages.",
  practice:
    "Learning BootStrap takes time and practice, so be patient with yourself.",
};

const data = [
  {
    id: "1",
    chapter: "what is bootstrap",
    point: [
      "What is Bootstrap?",
      "Adding the Bootstrap and Query library",
      "Integrating Bootstrap and jQuery",
      "the grid design pattern",
      "Bootstrap's custom classes",
      "Bootstrap's Components",
      "Glyphicon icons",
      "Styled Buttons",
    ],
  },
];
function Bootstrap() {
  return <All requirment={requirment} p={heading} data={data} />;
}

export default Bootstrap;
