import React from "react";
import { Button, Form, Input } from "antd";
import style from "./Reference.module.css";
const Reference = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const map = [
    {
      id: 1,
      name: "years",
      message: "Please input your age!",
      placeholder: "00 (years)",
    },
    {
      id: 2,
      name: "Height",
      message: "Please input your Height!",
      placeholder: "00 (sm)",
    },
    {
      id: 3,
      name: "kg",
      message: "Please input your Weight!",
      placeholder: "00 (kg)",
    },
  ];
  const map2 = map.map((a) => (
    <Form.Item
      key={a.id}
      name={a.name}
      rules={[
        {
          required: true,
          message: a.message,
        },
      ]}
    >
      <Input placeholder={a.placeholder} />
    </Form.Item>
  ));
  return (
    <div className={style.Reference}>
      <h1>Ma'lumotlarni to'ldiring</h1>
     
    </div>
  );
};
export default Reference;
