import React from "react";
import { Button, Form, Input } from "antd";
import style from "./Reference.module.css";
import { useTranslation } from "react-i18next";
const Reference = () => {
  const { t } = useTranslation();

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
      className={style.Input}
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
      <h1>{t("information")}</h1>
      <Form
        name="normal_login"
        className={style.login_form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {map2}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {t("Continue")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Reference;
