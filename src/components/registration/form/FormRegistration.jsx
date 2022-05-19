import React from "react";
import styles from "./FormRegistration.module.css";
import { useState } from "react";
import { Form, Input, Button } from "antd";

function FormRegistration() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_content}>
        <h3>Registration</h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <label>Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input your Firstname  !" },
            ]}
          >
            <label>Firstname</label>
            <Input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter your first name"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <label>Username</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <label>Create a password</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your  password"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <label>Repeat the password</label>
            <Input
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              type="password"
              placeholder="Repeate the password"
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormRegistration;
