import React from "react";
import style from "./Login.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import  axios  from 'axios';

const Login = () => {
  const [password, setPassword]=useState()
  const [username, setUsername]=useState()
  const { t } = useTranslation();
  // const [data2, setData2] = useState([]);
  const navigate = useNavigate();
  var data = new FormData();
  data.append("username", username);
  data.append("password", password);

  var config = {
    method: "post",
    url: "http://ehealthuz.pythonanywhere.com/kirish/",
    data: data,
  };
  const [errorText, setErrorClass] = useState("")
  const onFinish = (values) => {
    axios(config).then((response) =>
    Number(response.data) === 404 ? (
      <>{setErrorClass(t("erroreMAIL"))}</>
      ) : (
        navigate("/")
      )
    );
  };
  
  // useEffect(() => {
  //   var config = {
  //     method: "get",
  //     url: "http://ehealthuz.pythonanywhere.com/user/",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "token " + localStorage.getItem("token"),
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       setData2(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(data2);

  return (
    <div className={style.Login}>
      <h1>{t("homeHeaderBtn1")}</h1>
      <p>{t("login_text")}</p>
      <Form
        name="normal_login"
        className={style.login_form}
        initialValues={{ remember: true }}
        autoComplete="off"
        
      >
        <p style={{color:"red"}}>{errorText}</p>
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
           onChange={(e) => setUsername(e.target.value)}
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
           onChange={(e) => setPassword(e.target.value)}
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder={t("Password")}
            className={style.Input}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onFinish} htmlType="submit" className={style.button}>
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
