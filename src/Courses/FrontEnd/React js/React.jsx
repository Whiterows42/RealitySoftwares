import React from "react";
import All from "../AllCourseReusable";
import AllBackend from "../../Back End/AllBackend";

function React_js() {
  const heading = {
    title: "React js",
    p1: "React is a cutting-edge JavaScript library for building user interfaces that are both highly interactive and scalable. Developed and maintained by Facebook, React provides a component-based architecture that simplifies the process of creating complex web applications. Its Virtual DOM ensures optimal performance by efficiently updating only the parts of the user interface that change, resulting in a smoother and more responsive user experience.",
    p2: "React's robust ecosystem, including React Native for mobile development and tools like Redux for state management, empowers developers to craft dynamic and feature-rich applications for a wide range of platforms. Whether you're developing a single-page app or a complex web solution, React's flexibility and efficiency make it a go-to choice for modern web development.",
  };
  const requirment = {
    computer:
      "You'll need access to a computer, whether it's a desktop or laptop, to practice coding and view your React JS files in a web browser.",
    textEditor: " You'll need a text editor to write React JS code.",
    webbrowser:
      "You'll need a web browser (e.g., Chrome, Firefox, Safari) to view and test your React JS Web pages.",
    practice:
      "Learning React JS takes time and practice, so be patient with yourself.",
  };

  const data = [
    {
      id: "1",
      chapter: "introduction to react js",
      point: [
        "What is React JS?",
        "Installing Node js",
        "Creating And Running React Project",
        "Understanding Folder Structure",
        "Components",
      ],
    },
  ];

  return (
    <>
      <All requirment={requirment} p={heading} data={data} />
    </>
  );
}

export default React_js;
