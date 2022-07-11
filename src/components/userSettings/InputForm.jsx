import React from "react";
import "antd/dist/antd.css";
import {
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  Slider,
  DatePicker,
} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const InputForm = ({ type, img, data }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate()

  if (!data.username) {
    return <>Some wait...</>;
  }

  const onFinish = (values) => {
    var data = new FormData();
    data.append("username", values.userName || data.username);
    data.append("password", values.password || data.password);
    data.append("email", values.email || data.email);
    data.append("first_name", values.first_name || data.first_name);
    data.append("last_name", values.last_name || data.last_name);
    data.append("bio", values.bio || data.bio);
    data.append("age", values.age || data.age);
    data.append("experience", values.experience || data.experience);
    data.append("addres", values.addres || data.addres);
    data.append("information", values.information || data.information);
    data.append("phone", values.phone || data.phone);
    data.append("type", data.type);
    data.append("gender", values.gender || data.gender);
    data.append("birthday", values.birthday || data.birthday);
    data.append("pic", img || data.pic);

    var config = {
      method: "put",
      url: "http://ehealthuz.pythonanywhere.com/update_user/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + localStorage.getItem("token"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        navigate('/expertPerson')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const config1 = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="userName"
        label="UserName"
      >
        <Input defaultValue={data.username} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
      >
        <Input defaultValue={data.email} />
      </Form.Item>
      <Form.Item
        name="first_name"
        label="First name"
      >
        <Input defaultValue={data.first_name} />
      </Form.Item>
      <Form.Item
        name="last_name"
        label="Last name"
      >
        <Input defaultValue={data.last_name} />
      </Form.Item>
      <Form.Item name="experience" label="Experience">
        <Slider
          marks={{
            0: ".",
            10: ".",
            20: ".",
            30: ".",
            40: ".",
            50: ".",
          }}
        />
      </Form.Item>
      <Form.Item
        name="bio"
        label="bio"
      >
        <Input defaultValue={data.bio}/>
      </Form.Item>

      <Form.Item label="Age">
        <Form.Item
          name="age"
          noStyle
        >
          <InputNumber min={16} max={70} defaultValue={data.age} />
        </Form.Item>
      </Form.Item>
      <Form.Item name="birthday" label="DatePicker" {...config1}>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Telefon raqam"
      >
        <InputNumber minLength={7} maxLength={12} defaultValue={data.phone}/>
      </Form.Item>
      <Form.Item
        name="addres"
        label="Addres"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="information"
        label="Information"
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          defaultValue={String(data.information)}
        >
          <Option value="1">Boshlang'ich</Option>
          <Option value="2">O'rta</Option>
          <Option value="3">Oliy</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="gender"
        label="gender"
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          defaultValue={String(data.gender)}
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
