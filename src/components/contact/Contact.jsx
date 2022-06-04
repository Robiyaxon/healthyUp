import React, { useState } from "react";
import style from "./Contact.module.css";
import { Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { message } from "antd";
import YandexMap from "./Map";
export const Contact = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [tel, setTel] = useState("");
  const [textarea, setTextarea] = useState("");
  const success = () => {
    if ((name !== "", firstname !== "", tel !== "", textarea !== "")) {
      message.success("This is a success message");
    }
  };
  const map = [
    {
      value: name,
      name: "name",
      label: "Ismingiz:",
      message: " Name!",
      placeholder: "",
      useEffect: setName,
    },
    {
      value: firstname,
      name: "Firstname",
      label: "Familyangiz:",
      message: " Firstname!",
      placeholder: "Firstname",
      useEffect: setFirstname,
    },
    {
      value: tel,
      name: "Tel",
      label: "Telefon raqamingiz::",
      message: " Tel!",
      placeholder: "Tel",
      useEffect: setTel,
    },
  ];
  const map2 = map.map((a) => (
    <Form.Item key={a.name}
      rules={[{ required: true, message2: "Please input your " + a.message }]}
      name={a.name}
      label={a.label} className={style.InputGroup}
    >
      <Input
        value={a.value}
        onChange={(e) => a.useEffect(e.target.value)}
        placeholder={"Enter your " + a.placeholder}
        className={style.Input}
      />
    </Form.Item>
  ));
  return (
    <div className={style.wrapper}>
      <h1>Bog‘lanish</h1>
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
              <h2>Ish kunlari:</h2> <p>Dushanba-Shanba</p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>Ish vaqti:</h2>{" "}
              <p>09:00 dan 18:00 gacha (12:00 dan 13:00 gacha tushlik)</p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>Elektron pochta:</h2> <p>healthuz@gmail.com</p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>Telefon:</h2> <p>+998552012121</p>
            </div>
            <div className={style.Title1}>
              {" "}
              <h2>Manzil:</h2> <p>Andijon sh, Boburshox 2</p>
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
              placeholder="Matn kiriting"
            />
          </Form.Item>
          <div className={style.button}>
            <Button onClick={success} type="primary" htmlType="submit">
              Yuborish
            </Button>
          </div>
        </Form>
      </div>
      <YandexMap/>
    </div>
  );
};
