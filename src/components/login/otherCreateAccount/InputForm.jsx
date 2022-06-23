import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const InputForm = ({
  setUserName,
  setPassword,
  setEmail,
  setFirst_name,
  setLast_name,
  setBio,
  setAge,
  setAddres
}) => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          userName: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          userName: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          userName: "Hi there!",
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
    setPassword(values.password);
    setUserName(values.userName);
    setFirst_name(values.first_name);
    setLast_name(values.last_name);
    setBio(values.bio);
    setAge(values.age);
    setAddres(values.addres);
    setEmail(values.email);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      userName: "Hello world!",
      password: "Hello world!",
      email: "Hello world!",
      first_name: "first_name",
      last_name: "last_name",
      addres: "addres",
      bio: "bio",
      age: 23,
      gender: "male",
    });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="userName"
        label="UserName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="first_name"
        label="First name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="last_name"
        label="Last name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="bio"
        label="bio"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="addres"
        label="Addres"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="info"
        label="Info"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("gender") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
