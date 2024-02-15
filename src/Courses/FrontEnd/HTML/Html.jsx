import React, { useState } from "react";
import All from "../AllCourseReusable";
import HtmlData from "./HtmlDetails";
function Html() {
  const [requirment, setRequirment] = useState({
    computer:
      "You'll need access to a computer, whether it's a desktop or laptop, to practice coding and view your HTML files in a web browser",
    textEditor: "You'll need a text editor to write HTML code",
    webbrowser:
      "You'll need a web browser (e.g., Chrome, Firefox, Safari) to view and test your HTML pages.",
    practice:
      "Learning HTML takes time and practice, so be patient with yourself",
  });

  const [paragrap, setparagrap] = useState({
    title: "HTML",
    p1: "HTML (Hypertext Markup Language) is the fundamental language used to create and structure content on the World Wide Web. It consists of a series of tags that define the elements on a web page, such as headings, paragraphs, links, images, and forms. These tags are used to mark up and organize text and multimedia content, enabling browsers to render web pages correctly.",
    p2: "HTML documents are hierarchical, with a root element containing a section for metadata and a section for the visible content. HTML provides the foundation for building web pages and is often combined with other technologies like CSS (Cascading Style Sheets) and JavaScript to create interactive and visually appealing websites. It serves as the backbone of the internet, facilitating the presentation and accessibility of information across the digital landscape.",
  });
  return <All requirment={requirment} p={paragrap} data={HtmlData} />;
}

export default Html;
