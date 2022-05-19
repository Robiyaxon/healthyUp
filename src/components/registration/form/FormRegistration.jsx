import React from "react";
import styles from "./FormRegistration.module.css";
import { useState } from "react";
import { Form, Input, Button, Progress } from "antd";

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
          name="basic"
          initialValues={{ remember: true }}
          className="login-form"
          layout="vertical"
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your Name!" }]}
            name="name"
            label="Name"
          >
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
            name="firstname"
            label="Firstname"
          >
            <Input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter your first name"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Please input your Username!" }]}
            name="username"
            label="Username"
          >
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Username"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Please input your Password!" }]}
            name="password"
            label="Create a password"
          >
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your  password"
            />
          </Form.Item>

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
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form>
        <div className={styles.progress}>
          <span>2/25</span>
          <Progress percent={50} showInfo={false} />
        </div>
      </div>
    </div>
  );
}

export default FormRegistration;
