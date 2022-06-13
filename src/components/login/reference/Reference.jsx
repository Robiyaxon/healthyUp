import React from "react";
import { Button, Form, Input } from "antd";
import style from "./Reference.module.css";
const Reference = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={style.Reference}>
      <h1>Ma'lumotlarni to'ldiring</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="years"
          rules={[
            {
              required: true,
              message: "Please input your age!",
            },
          ]}
        >
          <Input placeholder="00 (years)" />
        </Form.Item>
        <Form.Item
          name="Height"
          rules={[
            {
              required: true,
              message: "Please input your Height!",
            },
          ]}
        >
          <Input type="number" placeholder="00 (sm)" />
        </Form.Item>
        <Form.Item
          name="kg"
          rules={[
            {
              required: true,
              message: "Please input your Weight!",
            },
          ]}
        >
          <Input type="number" placeholder="00 (kg)" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Reference;
