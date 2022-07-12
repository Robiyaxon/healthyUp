import React from "react";
import style from "./Login.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const [errorClass, setErrorClass] = useState("")
  const onFinish = (values) => {
    var formdata = new FormData();
    formdata.append("username", values.username);
    formdata.append("password", values.password);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch("http://ehealthuz.pythonanywhere.com/kirish/", requestOptions)
          .then((response) =>response.data
      === 404 ? setErrorClass(style.errorTrue) : navigate('/')
      )
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={style.Login}>
      <h1>{t("homeHeaderBtn1")}</h1>
      <p>{t("login_text")}</p>
      <Form
        name="normal_login"
        className={style.login_form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        
      >
        <p className={style.error + ' ' + errorClass}>Username yoki password xato!</p>
        <Form.Item
          name="username"
          rules= {[
            {
              type: "string",
              required: true,
              message: "Please select time!",
            },
          ]}
        >
          <Input
            className={style.Input}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={t("Username")}
          />
        </Form.Item>
        <Form.Item
          name="password" 
          rules= {[
            {
              type: "string",
              required: true,
              message: "Please select time!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder={t("Password")}
            className={style.Input}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={style.button}>
            Log in
          </Button>
          <span className={style.Span}>
            <NavLink to="/signUp">{t("login_register")}</NavLink>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
