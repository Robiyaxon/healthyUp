import React from 'react'
import style from "./Login.module.css"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

 const Login = () => {
  const { t } = useTranslation();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
    
  return (
    <div className={style.Login}>
        <h1>{t("homeHeaderBtn1")}</h1>
        <p>{t("login_text")}</p>
        <Form
      name="normal_login"
      className={style.login_form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <label htmlFor="">{t("Username")}</label>
        <Input className={style.Input} prefix={<UserOutlined className="site-form-item-icon" />} placeholder={t("Username")} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
          <label htmlFor="">{t("Password")}</label>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder={t("Password")}
          className={style.Input}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={style.button}>
          Log in
        </Button>
        <span className={style.Span}><NavLink to="/signUp">{t("login_register")}</NavLink></span>
       
      </Form.Item>
    </Form>
    </div>
  )
}
export default Login