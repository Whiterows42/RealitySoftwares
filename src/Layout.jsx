import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Componant/Header/Header";
import Footer from "./Componant/Footer/Footer";

function Loading() {
  // Add your loading animation or spinner here
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <img
        src="https://i.pinimg.com/originals/6c/f8/9a/6cf89a8bb47c0d7c2d5ec120749fda86.gif"
        alt=""
      />
    </div>
  );
}

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (replace this with your actual data loading logic)
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Cleanup the timeout if the component unmounts or data loading completes
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
