import React, { useState } from "react";
import style from "./Contact.module.css";
import { Form, Input, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
export const Contact = () => {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
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
          <div>
            <Form.Item
              rules={[{ required: true, message: "Please input your Name!" }]}
              name="name"
              label="Name"
            >
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className={style.Input}
              />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: "Please input your SurName!" },
              ]}
              name="Familyangiz:"
              label="Familyangiz:"
            >
              <Input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Enter your Surname"
                className={style.Input}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "Please input your Name!" }]}
              name="name"
              label="Telefon raqamingiz:"
            >
              <Input
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Enter your tel"
                className={style.Input}
              />
            </Form.Item>
          </div>
          <Form.Item
            rules={[{ required: true, message: "Please input your Name!" }]}
            name="name"
            label=""
            className={style.TextArea}
          >
            <TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Matn kiriting"
            />
          </Form.Item>
          <div className={style.button}>
            <Button type="primary" htmlType="submit">
              Yuborish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
