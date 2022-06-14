import React, { useEffect } from "react";
import styles from "./FormRegistration.module.css";
import { useState } from "react";
import { Form, Input, Button } from "antd";
function FormRegistration() {
  const [last_name, setName] = useState("");
  const [first_name, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("1");
  const [age, setAge] = useState("18");
  const [height, setheight] = useState("18");
  const [weight, setweight] = useState("18");
  const [type_loss, settype_loss] = useState("1");
  const [going_to_loss, setgoing_to_loss] = useState("10");
  const [can_not_sports, setcan_not_sports] = useState([2]);
  const [can_not_dieta, setcan_not_dieta] = useState([3]);
  const [type, settype] = useState(1);
  // const [repassword, setRepassword] = useState("");
 
   function SignApp() {
     let item = { type,last_name, first_name, username, password,email,gender,age,height,weight,type_loss,going_to_loss,can_not_sports,can_not_dieta };
     console.log(item);
    fetch("http://10.10.8.46:8000/register/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item),
     
    }); 
  }
  const map = [
    {
      id: 1,
      message: "Please input your Name!",
      name: "name",
      label: "Name",
      value: last_name ,
      setname: setName,
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      message: "Please input your Firstname!",
      name: "firstname",
      label: "Firstname",
      value: { first_name },
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
    {
      id: 5,
      message: "Please input your Email!",
      name: "setEmail",
      label: "Email",
      value: { email },
      setname: setEmail,
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
