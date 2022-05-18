import "./App.css";
import React from "react";
//antni shunaqa qilib kerakli joylariga ishlataveramiz!
import { useTranslation } from "react-i18next";
import { TopHeader } from "./components/top_header/TopHeader";
function App() {
  const { t } = useTranslation();
  return (
    <div>
      <TopHeader />
      <div className="select">
        <h1> {t("navbar1")}</h1>
      </div>
    </div>
  );
}
export default App;
