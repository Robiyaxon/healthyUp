import React from "react";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./FormRegistration.module.css";

function FormRegistration() {
  const [last_name, setName] = useState("");
  const [first_name, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("1");
  const [age, setAge] = useState("14545");
  const [height, setheight] = useState("18454454");
  const [weight, setweight] = useState("1854545");
  const [type_loss, settype_loss] = useState("145454");
  const [going_to_loss, setgoing_to_loss] = useState("145450");
  const [can_not_sports, setcan_not_sports] = useState([1]);
  const [can_not_dieta, setcan_not_dieta] = useState([6]);
  const [type, settype] = useState("1");
  const navigate = useNavigate();
  function SignApp() {
    var formdata = new FormData();
    formdata.append("type", type);
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("gender", gender);
    formdata.append("age", age);
    formdata.append("height", height);
    formdata.append("weight", weight);
    formdata.append("type_loss", type_loss);
    formdata.append("going_to_loss", going_to_loss);
    formdata.append("can_not_sports", can_not_sports);
    formdata.append("can_not_dieta", can_not_dieta);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://10.10.8.46:8000/register/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
      })
      .catch((error) => console.log("error", error));
  }
  const map = [
    {
      id: 1,
      message: "Please input your Name!",
      name: "name",
      label: "Name",
      value: last_name,
      setname1: setName,
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      message: "Please input your Firstname!",
      name: "firstname",
      label: "Firstname",
      value: { first_name },
      setname1: setFirstname,
      type: "text",
      placeholder: "Enter your Firstname",
    },
    {
      id: 3,
      message: "Please input your Username!",
      name: "username",
      label: "Username",
      value: { username },
      setname1: setUsername,
      type: "text",
      placeholder: "Enter your Username",
    },
    {
      id: 4,
      message: "Please input your Password!",
      name: "password",
      label: "Create a password",
      value: { password },
      setname1: setPassword,
      type: "password",
      placeholder: "Enter your Username",
    },
    {
      id: 5,
      message: "Please input your Email!",
      name: "setEmail",
      label: "Email",
      value: { email },
      setname1: setEmail,
      type: "email",
      placeholder: "Enter your E",
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
        onChange={(e) => a.setname1(e.target.value)}
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
          {map2}
          <Button type="primary" htmlType="submit" onClick={SignApp}>
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormRegistration;
