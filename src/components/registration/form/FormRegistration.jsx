import React from "react";
import styles from "./FormRegistration.module.css";
// import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
function FormRegistration(props) {
  const navigate = useNavigate();
  const map = [
    {
      id: 1,
      message: "Please input your Name!",
      name: "name",
      label: "Name",
      value: props.last_name,
      setname1: props.setName,
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: 2,
      message: "Please input your Firstname!",
      name: "firstname",
      label: "Firstname",
      value: props.first_name ,
      setname1: props.setFirstname,
      type: "text",
      placeholder: "Enter your Firstname",
    },
    {
      id: 3,
      message: "Please input your Username!",
      name: "username",
      label: "Username",
      value:  props.username ,
      setname1: props.setUsername,
      type: "text",
      placeholder: "Enter your Username",
    },
    {
      id: 4,
      message: "Please input your Password!",
      name: "password",
      label: "Create a password",
      value:  props.password ,
      setname1: props.setPassword,
      type: "password",
      placeholder: "Enter your Username",
    },
    {
      id: 5,
      message: "Please input your Email!",
      name: "setEmail",
      label: "Email",
      value:  props.email ,
      setname1: props.setEmail,
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
  const click=()=>{
    navigate("/whoIsTheUser")
    // props.SignApp()
  }
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
          <Button type="primary" htmlType="submit" onClick={click}>
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormRegistration;
