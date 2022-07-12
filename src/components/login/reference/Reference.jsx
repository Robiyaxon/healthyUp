import React from "react";
import { Button, Form, Input } from "antd";
import style from "./Reference.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Reference = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate("/direction");
  };
  const map = [
    {
      id: 1,
      name: "years",
      message: "Please input your age!",
      placeholder: "00 (years)",
      value: props.age,
      setname1: props.setAge,
    },
    {
      id: 2,
      name: "Height",
      message: "Please input your Height!",
      placeholder: "00 (sm)",
      value: props.height,
      setname1: props.setheight,
    },
    {
      id: 3,
      name: "kg",
      message: "Please input your Weight!",
      placeholder: "00 (kg)",
      value: props.weight,
      setname1: props.setweight,
    },
  ];
  const map2 = map.map((a) => (
    <div key={a.id}>
      <Form.Item
        name={a.name}
        className={style.Input}
        rules={[
          {
            required: true,
            message: a.message,
          },
        ]}
      >
        <Input
          value={a.value}
          type="number"
          onChange={(e) => a.setname1(e.target.value)}
          placeholder={a.placeholder}
        />
      </Form.Item>
    </div>
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
