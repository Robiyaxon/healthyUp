import "./App.css";
import React, { useState } from "react";
import i18n from "./i18n";
//antni shunaqa qilib kerakli joylariga ishlataveramiz!
import { useTranslation } from "react-i18next";
import { Home } from './components/home/Home';

function App() {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const { t } = useTranslation();
  const [lang, setLang] = useState(defaultLang);
  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <h1>til o`zgaradigon bo`ldi!</h1>
      <div className="select">
        <select name="lang" value={lang} onChange={handleChange}>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="eng">en</option>
        </select>
        <h1> {t("navbar1")}</h1>
        <Home/>
      </div>
    </div>
  );
}
export default App;
