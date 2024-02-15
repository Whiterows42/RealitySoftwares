import React from "react";
import All from "../AllCourseReusable";

function JQuery() {
  const heading = {
    title: "JQuery",
    p1: "jQuery is a powerful and popular JavaScript library that simplifies web development by providing a concise and intuitive way to manipulate HTML documents, handle events, create animations, and interact with server data. It streamlines cross-browser compatibility, making it easier to write efficient and maintainable code.",
    p2: "jQuery's extensive collection of plugins further enhances its capabilities, offering solutions for tasks ranging from form validation to interactive user interfaces. Whether you're a beginner or an experienced developer, jQuery remains a valuable tool for crafting dynamic and responsive web applications with reduced coding effort and enhanced functionality.",
  };
  const requirment = {
    computer:
      "You'll need access to a computer, whether it's a desktop or laptop, to practice coding and view your JQuery files in a web browser",
    textEditor: " You'll need a text editor to write JQuery Code .",
    webbrowser:
      "You'll need a web browser (e.g., Chrome, Firefox, Safari) to view and test your JQuery Web pages.",
    practice:
      "Learning JQuery takes time and practice, so be patient with yourself.",
  };
  const data = [
    {
      id: "1",
      chapter: "introduction jQuery",
      point: [
        "What is jQuery?",
        "Why",
        "Integrating Query",
        "Syntax",
        "Selectors in jQuery",
        "Events",
        "jQuery Fading Methods",
        "Animation",
      ],
    },
    {
      id: "2",
      chapter: "working to jquery",
      point: [
        "DOM Manupulation",
        "Manupulating CSS",
        "jQuery - AJAX Introduction",
        "HTTP Request: GET vs. POST",
      ],
    },
  ];
  return <All requirment={requirment} p={heading} data={data} />;
}

export default JQuery;
