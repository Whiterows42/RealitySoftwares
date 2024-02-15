import React from "react";
import All from "../../FrontEnd/AllCourseReusable";
import AllBackend from "../AllBackend";
import Data from "./Corejavadata";
function CoreJava() {
  const heading = {
    title: "Core java",
    p1: "Core Java, often referred to simply as Java, is the fundamental and essential part of the Java programming language. It encompasses the basic building blocks and features that serve as the foundation for Java application development. Java is known for its platform independence, achieved through the use of the Java Virtual Machine (JVM), which allows Java programs to run on diverse operating systems without modification.",
    p2: "Core Java includes core libraries, data types, control structures, and object-oriented programming concepts, making it suitable for a wide range of applications, from desktop software to web and mobile applications. Its strong emphasis on portability, security, and robustness has made Java a popular choice in enterprise-level and mission-critical software development. Java's simplicity and versatility continue to make it a go-to language for both novice and experienced developers, and it remains a key player in the world of programming languages.",
  };
  const requirment = {
    computer: (
      <li>
        <strong>Computer:</strong>You'll need access to a computer, whether it's
        a desktop or laptop, to practice coding and view your Java files,
      </li>
    ),
    textEditor: (
      <li>
        <strong>Text Editor::</strong>
        While you can write Java code in a simple text editor like Notepad (on
        Windows) or a code editor like Visual Studio Code, using a dedicated
        Java IDE like Eclipse, IntelliJ IDEA, or NetBeans can greatly enhance
        your productivity. These IDEs provide features like code highlighting,
        debugging, and project management.
      </li>
    ),
    webbrowser: (
      <li>
        <strong>Java Development Kit (JDK):</strong>
        Download and install the latest version of the Java Development Kit
        (JDK) from the official Oracle website or OpenJDK if you prefer
        open-source alternatives. The JDK includes the Java Compiler (javac) and
        the Java Runtime Environment (JRE) needed to run Java applications.
      </li>
    ),
    practice: (
      <li>
        <strong>Patience and Practice:</strong>Learning Java takes time and
        practice, so be patient with yourself.{" "}
      </li>
    ),
  };

  return <AllBackend heading={heading} req={requirment} data={Data} />;
}

export default CoreJava;
