import React, { useEffect, useState } from "react";
import style from "./Contact.module.css";
import { Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { message } from "antd";
import YandexMap from "./Map";
import { useTranslation } from "react-i18next";
import { instance } from "./../../api/api";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = React.memo(() => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [tel, setTel] = useState("");
  const [textarea, setTextarea] = useState("");
 
  useEffect(() => {
    AOS.init({ duration: 2000 });
    instance.get("footer/").then((response) => setData(response.data));
  }, [setData]);
  const success = (formData) => {
 var formdata = new FormData();
 formdata.append("first_name", firstname);
 formdata.append("last_name", name);
 formdata.append("phone", tel);
 formdata.append("message", textarea);
    fetch(`http://ehealthuz.pythonanywhere.com/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: name,
        phone: tel,
        message: textarea,
      }),
    })
      .then(function (response) {console.log(response)})
      .catch(function (error) {
        console.log(error);
      });
    formData.first_name = "";
    formData.last_name = "";
    formData.phone = "";
    formData.message = "";
    if ((name !== "", firstname !== "", tel !== "", textarea !== "")) {
      message.success("This is a success message");
    }
  };
  const map = [
    {
      value: name,
      name: "name",
      label: t("userName"),
      message: t("plaseholderUserName") + "!",
      placeholder: t("plaseholderUserName"),
      useEffect: setName,
    },
    {
      value: firstname,
      name: "Firstname",
      label: t("userSurname"),
      message: t("plaseholderUserSurname") + "!",
      placeholder: t("plaseholderUserSurname"),
      useEffect: setFirstname,
    },
    {
      value: tel,
      name: "Tel",
      label: t("userTel"),
      message: " Tel!",
      placeholder: t("userTel"),
      useEffect: setTel,
    },
  ];
  const map2 = map.map((a) => (
    <Form.Item
      key={a.name}
      rules={[{ required: true, message2: +a.message }]}
      name={a.name}
      label={a.label}
      className={style.InputGroup}
    >
      <Input
        value={a.value}
        onChange={(e) => a.useEffect(e.target.value)}
        placeholder={a.placeholder}
        className={style.Input}
      />
    </Form.Item>
  ));
  return (
    <div className={style.wrapper} data-aos="zoom-out">
      <h1>{t("contact")}</h1>
      <div className={style.Login}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className={style.login_form}
          layout="vertical"
        >
          <div className={style.Title}>
            <div className={style.Title1}>
              {" "}
              <h2>{t("Working_Days")} :</h2> <p>{t("week")}</p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>{t("Working_hours")}</h2>{" "}
              <p>
                {data.map((a) => (
                  <React.Fragment key={a.id}>{a.work_time}</React.Fragment>
                ))}
              </p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>{t("email")}:</h2>{" "}
              <p>
                {data.map((a) => (
                  <React.Fragment key={a.id}>{a.email}</React.Fragment>
                ))}
              </p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>{t("Telefon")}:</h2>{" "}
              <p>
                {data.map((a) => (
                  <React.Fragment key={a.id}>{a.phone}</React.Fragment>
                ))}
              </p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>{t("Address")}:</h2>{" "}
              <p>
                {data.map((a) => (
                  <React.Fragment key={a.id}>{a.address}</React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div>{map2}</div>
          <Form.Item
            rules={[{ required: true, message2: "Please input your Name!" }]}
            name="message"
            label=""
            className={style.TextArea}
          >
            <TextArea
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
              placeholder={t("Text_Area")}
            />
          </Form.Item>
          <div className={style.button}>
            <Button onClick={success} type="primary" htmlType="submit">
              {t("send")}
            </Button>
          </div>
        </Form>
      </div>
      <YandexMap />
    </div>
  );
});
export default Contact;
