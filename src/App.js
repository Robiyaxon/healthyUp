import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { TopHeader } from "./components/top_header/TopHeader";
import { MyCabinet } from "./components/my_cabinet/My_Cabinet.jsx";
import { News } from "./components/news/News";
import { AboutUs } from "./components/about_us/AboutUs";
import { Contact } from "./components/contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import { Home } from "./components/home/Home";
import HomeDetail from "./components/HomeDetail/HomeDetail";
import Registration from "./components/registration/Registration";
import { MyBackTop } from "./components/backTop/BackTop";
import { Footer } from "./components/footer/Footer";
import i18n from'./i18n'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  const map = [
    { id: 1, url: "/", kompannent: <Home /> },
    { id: 2, url: "my_cabinets", kompannent: <MyCabinet /> },
    { id: 3, url: "news", kompannent: <News /> },
    { id: 4, url: "about_us", kompannent: <AboutUs /> },
    { id: 5, url: "contact", kompannent: <Contact /> },
    { id: 6, url: "signUp", kompannent: <Registration /> },
    { id: 7, url: "carousel", kompannent: <HomeDetail /> },
  ];
  const mapRoute = map.map((a) => (
    <Route
      key={a.id}
      path={a.url}
      element={
        <Suspense
          fallback={
            <>
              <Spin />
            </>
          }
        >
          {a.kompannent}
        </Suspense>
      }
    />
  ));
  return (
    <div className="App">
      {isLoading ? (
        <>
          <Spin />
        </>
      ) : (
        <>
          <TopHeader />
          <Routes>{mapRoute}</Routes>
          <div className="select"></div>
        </>
      )}
      <MyBackTop />
      <Footer/>
    </div>
  );
}
export default App;
