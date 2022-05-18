import "./App.css";
<<<<<<< HEAD
import React, { useState } from "react";
import i18n from "./i18n";
//antni shunaqa qilib kerakli joylariga ishlataveramiz!
import { useTranslation } from "react-i18next";
=======
import { DatePicker } from "antd";
import { Home } from "./components/home/Home";

>>>>>>> 0188b5e858556d9fc7b0476566e7ae6d1052abdf
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
<<<<<<< HEAD
      <h1>til o`zgaradigon bo`ldi!</h1>
      <div className="select">
        <select name="lang" value={lang} onChange={handleChange}>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="eng">en</option>
        </select>
        <h1> {t("navbar1")}</h1>
      </div>
=======
      <DatePicker />
      hello world !
      <Home />
>>>>>>> 0188b5e858556d9fc7b0476566e7ae6d1052abdf
    </div>
  );
}
export default App;
