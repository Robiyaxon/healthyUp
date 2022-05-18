import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TopHeader } from "./components/top_header/TopHeader";
import { MyCabinet } from "./components/my_cabinet/My_Cabinet";
import { News } from "./components/news/News";
import { AboutUs } from "./components/about_us/AboutUs";
import { Contact } from "./components/contact/Contact";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  const map = [
    { id: 1, url: "/", kompannent: <MyCabinet /> },
    { id: 2, url: "my_cabinets", kompannent: <MyCabinet /> },
    { id: 3, url: "news", kompannent: <News /> },
    { id: 4, url: "about_us", kompannent: <AboutUs /> },
    { id: 5, url: "contact", kompannent: <Contact /> },
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
          {" "}
          {a.kompannent}
        </Suspense>
      }
    />
  ));
  return (
    <div>
      {isLoading ? (
        <>
          <Spin />
        </>
      ) : (
        <>
          <TopHeader />
          <Routes>{mapRoute}</Routes>
          <div className="select">
            <h1> {t("navbar1")}</h1>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
