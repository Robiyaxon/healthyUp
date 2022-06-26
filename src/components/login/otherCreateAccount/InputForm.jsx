import React from "react";
import "antd/dist/antd.css";
import { Button, Form, Input, Select, InputNumber, Slider, DatePicker } from "antd";
import axios from "axios";
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

const InputForm = ({type, img}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    var data = new FormData();
    data.append("username", values.userName);
    data.append("password", values.password);
    data.append("email", values.email);
    data.append("first_name", values.first_name);
    data.append("last_name", values.last_name);
    data.append("bio", values.bio);
    data.append("age", values.age);
    data.append("experience", values.experience);
    data.append("birthday", "1975-05-22");
    data.append("addres", values.addres);
    data.append("information", values.information);
    data.append("phone", "+998997777799");
    data.append("type", type);
    data.append("gender", values.gender);
    data.append("birthday", values.birthday);
    data.append("phone", values.phone);
    data.append("pic", img);
  
    var config = {
      method: "post",
      url: "http://10.10.7.17:8000/register/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const config1 = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
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
      <Form.Item name="experience" label="Experience">
        <Slider
          marks={{
            0: '.',
            10: '.',
            20: '.',
            30: '.',
            40: '.',
            50: '.',
          }}
        />
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
      
      <Form.Item label="Age">
        <Form.Item name="age" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
      </Form.Item>
       <Form.Item name="birthday" label="DatePicker" {...config1}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Telefon raqam"
        rules={[
          {
            required: true,
          },
        ]}
      >
         <InputNumber min={1} max={10} />
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
        name="information"
        label="Information"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="1">Boshlang'ich</Option>
          <Option value="2">O'rta</Option>
          <Option value="3">Oliy</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="gender"
        label="gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="1">Erkak</Option>
          <Option value="2">Ayol</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
