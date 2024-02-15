import React from "react";
import AllBackend from "../AllBackend";

function AdvJava() {
  const heading = {
    title: "Advance java",
    p1: "Advanced Java is a dynamic and powerful extension of the Java programming language, designed to cater to the demands of enterprise-level applications and web development. It offers a rich set of libraries, frameworks, and tools that enable developers to create robust, scalable, and secure software solutions.",
    p2: "Advanced Java encompasses technologies like Servlets, JSP (JavaServer Pages), EJB (Enterprise JavaBeans), JMS (Java Message Service), and JDBC (Java Database Connectivity), among others. With its ability to handle complex tasks such as distributed computing, database integration, and web services, Advanced Java empowers developers to build sophisticated applications that meet the highest standards of performance and reliability.",
  };

  const requirment = {
    computer: (
      <li>
        <strong>Computer:</strong> You'll need access to a computer, whether
        it's a desktop or laptop, to practice coding and view your Bootstrap
        files in a web browser.
      </li>
    ),
    textEditor: (
      <li>
        <strong>Text Editor::</strong> You'll need a text editor to write HTML
        code.
      </li>
    ),
    webbrowser: (
      <li>
        <strong>Web Browser::</strong>You'll need a web browser (e.g., Chrome,
        Firefox, Safari) to view and test your BootStrap Web pages.{" "}
      </li>
    ),
    practice: (
      <li>
        <strong>Patience and Practice:</strong>Learning BootStrap takes time and
        practice, so be patient with yourself.{" "}
      </li>
    ),
  };
  const Data = [
    {
      id: "1",
      chapter: "JDBC",
      point: [
        "Introduction to JDBC",
        "Adding the Bootstrap aibrarnd jQuery ly",
        "Integrating Bootstrap and Query",
        "the grid design pattern",
        "Bootstrap's custom classes",
        "Bootstrap's Components",
        "Glyphicon icons",
        "Styled Buttons",
      ],
    },
    {
      id: "2",
      chapter: "SERVLET",
      point: [
        "Introduction to JDBC",
        "Adding the Bootstrap aibrarnd jQuery ly",
        "Integrating Bootstrap and jQuery",
        "the grid design pattern",
        "Bootstrap's custom classes",
        "Bootstrap's Components",
        "Glyphicon icons",
        "Styled Buttons",
      ],
    },
    {
      id: "3",
      chapter: "JSP",
      point: [
        "Introduction to JDBC",
        "Adding the Bootstrap aibrarnd Query ly",
        "Integrating Bootstrap and Query",
        "the grid design pattern",
        "Bootstrap's custom classes",
        "Bootstrap's Components",
        "Glyphicon icons",
        "Styled Buttons",
      ],
    },
  ];
  return <AllBackend heading={heading} req={requirment} data={Data} />;
}

export default AdvJava;
