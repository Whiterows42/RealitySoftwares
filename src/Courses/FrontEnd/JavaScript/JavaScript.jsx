import React from "react";
import All from "../AllCourseReusable";

function JavaScript() {
  const heading = {
    title: "JavaScript",
    p1: "JavaScript, often abbreviated as JS, is a versatile and essential programming language for web development. It enables dynamic and interactive elements on websites, allowing developers to create responsive user interfaces, validate forms, handle asynchronous requests, and manipulate HTML and CSS.",
    p2: "With its wide adoption and robust ecosystem of libraries and frameworks like React, Angular, and Vue.js, JavaScript empowers developers to build modern, feature-rich web applications that deliver seamless user experiences across a variety of devices and browsers. Whether you're a seasoned developer or just starting your coding journey, JavaScript is a fundamental tool for creating the web's dynamic and engaging content.",
  };
  const requirment = {
    computer:
      "You'll need access to a computer, whether it's a desktop or laptop, to practice coding and view your JavaScript files in a web browser.",
    textEditor: " You'll need a text editor to write JS code.",
    webbrowser:
      "You'll need a web browser (e.g., Chrome, Firefox, Safari) to view and test your JS Web pages.",
    practice:
      "Learning JAVASCRIPT takes time and practice, so be patient with yourself.",
  };
  const data = [
    {
      id: "1",
      chapter: "What is Java script",
      point: [
        "What is javascript?",
        "Features of Javascript",
        "How to create Javascript File",
        "Syntax and Script tag",
        "Display Data on Console",
        "JavaScript Boxes",
      ],
    },
    {
      id: "2",
      chapter: "data types and variable",
      point: [
        "What is Data Types in JS?",
        "Variable",
        "Functions",
        "Comments",
        "Alert",
        "Operator",
      ],
    },

    {
      id: "3",
      chapter: "control statment",
      point: [
        "Condistional Statement?",
        "Looping Statement",
        "Break, Continue",
        "Switch Cases",
      ],
    },
    {
      id: "4",
      chapter: "strings, array, object",
      point: [
        "Working with String?",
        "Working With Array",
        "Javascript Object",
        "This Keyword",
        "Scope",
      ],
    },
    {
      id: "5",
      chapter: "DOM",
      point: [
        "What is Dom?",
        "Methods in DOM",
        "DOM Manupulation",
        "Events",
        "Styling Element",
        "Traversing Element",
      ],
    },
    {
      id: "6",
      chapter: "BOM",
      point: [
        "What is BOM?",
        "Methods in BOM",
        "Time Events",
        "Reg Exp",
        "Hoisting",
        "IIFE (Immediately Invoked Function Expression)",
      ],
    },
    {
      id: "7",
      chapter: "advance javaScript",
      point: [
        "JS6 Features",
        "Spread Operator",
        "Template Literals",
        "Destructuring Assignment",
        "Enhanced Object Literals",
        "Strict Mode, Set, Arrow Function",
        "Moduls, JSON, Ajax",
      ],
    },
  ];
  return <All requirment={requirment} p={heading} data={data} />;
}

export default JavaScript;
