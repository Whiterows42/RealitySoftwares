import React from "react";
import All from "../AllCourseReusable";

function TemplateModification() {
  const heading = {
    title: "Template Modification",
    p1: "Transform your online presence with our website template modification service. Whether you need to revamp your existing site or customize a pre-designed template, our skilled team will tailor every aspect to suit your brand, ensuring a unique and engaging digital experience for your visitors. Elevate your website's aesthetics and functionality with our expert modifications.",
    p2: "",
  };
  const requirment = {
    computer:
      "You'll need access to a computer, whether it's a desktop or laptop, to practice coding and view your Template files in a web browser.",
    textEditor: " You'll need a text editor to write HTML code.",
    webbrowser:
      "You'll need a web browser (e.g., Chrome, Firefox, Safari) to view and test your BootStrap Web pages",
    practice:
      "Learning BootStrap takes time and practice, so be patient with yourself",
  };
  const data = [
    {
      id: "1",
      chapter: "introduction to template modification",
      point: [
        "How to Download Template",
        "How to Change into Downloaded Website Template",
        "How to saprate Header And Footer using XAMPP Server",
        "How to Add Our JS and CSS",
        "Project Seletion And Planing",
        "Creating Project",
        "Domian Purchasing",
        "Hosting Website",
      ],
    },
  ];
  return <All requirment={requirment} p={heading} data={data} />;
}

export default TemplateModification;
