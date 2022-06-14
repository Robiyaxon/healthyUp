import React, { useEffect } from "react";
import styles from "./FormRegistration.module.css";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
var config = {
  method: "post",
  url: "http://10.10.8.35:8000/register/",
  headers: {
    "Content-Type": "application/json",
  },
};
function FormRegistration() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  let item = { name, firstname, username, password, repassword };
  async function SignApp() {
    let result = await axios(config)
      .then(function (response) {
        item(response.data);
      })
      .catch(function (error) {});
    console.warn(result);
  }
  const map = [
    {
      id: 1,
      message: "Please input your Name!",
      name: "name",
      label: "Name",
      value: { name },
      setname: setName,
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      message: "Please input your Firstname!",
      name: "firstname",
      label: "Firstname",
      value: { firstname },
      setname: setFirstname,
      type: "text",
      placeholder: "Enter your Firstname",
    },
    {
      id: 3,
      message: "Please input your Username!",
      name: "username",
      label: "Username",
      value: { username },
      setname: setUsername,
      type: "text",
      placeholder: "Enter your Username",
    },
    {
      id: 4,
      message: "Please input your Password!",
      name: "password",
      label: "Create a password",
      value: { password },
      setname: setPassword,
      type: "password",
      placeholder: "Enter your Username",
    },
  ];
  const map2 = map.map((a) => (
    <Form.Item
      key={a.id}
      rules={[{ required: true, message: a.message }]}
      name={a.name}
      label={a.label}
    >
      <Input
        value={a.value}
        onChange={(e) => a.setname(e.target.value)}
        placeholder={a.placeholder}
        type={a.type}
      />
    </Form.Item>
  ));
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_content}>
        <h3>Registration</h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className="login-form"
          layout="vertical"
        >
          {" "}
          {map2}
          {/* 
          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
            name="repassword"
            label="Repeat the password"
          >
            <Input
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              type="password"
              placeholder="Repeate the password"
            />
          </Form.Item> */}
          <Button type="primary" htmlType="submit" onClick={SignApp}>
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormRegistration;
