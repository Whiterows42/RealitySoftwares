import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function Blog() {
  const style = {
    bg: "https://riyalitysoftwares.com/assets/img/banner/8.jpg",
    title: "Blogs",
  };
  return (
    <main>
      <Breadcrumb bg={style.bg} title={style.title} />
      <div>
        <div className="blog-entry py-4 px-5  w-100  row">
          <div className="blog-image col-md-6   ">
            <div>
              <img
                className="img-fluid rounded-3 "
                src="https://riyalitysoftwares.com/admin/uploads/blogs/Minimalistic%20cyber%20shield%20on%20laptop%20in%20office%20illu.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="blog-content col-md-6 bg-light rounded-3">
            <h3> Navigating the Cybersecurity Landscape: Top Trends in 2023</h3>
            <p>
              In the ever-evolving realm of technology, the importance of
              cybersecurity has never been more pronounced. As we step into
              2023, several trends are shaping the cybersecurity landscape,
              influencing how businesses safeguard their digital assets. 1. Zero
              Trust Architecture: Embracing a "never trust, always verify"
              approach, Zero Trust Architecture is gaining prominence. This
              model assumes that threats may exist both outside and inside a
              network, emphasizing continuous verification of users and devices.
              2. Artificial Intelligence (AI) and Machine Learning (ML): The
              integration of AI and ML in cybersecurity is a game-changer. These
              technologies analyze vast datasets to identify patterns, predict
              potential threats, and respond in real-time. AI-driven
              cybersecurity solutions are becoming essential for proactive
              defense.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
