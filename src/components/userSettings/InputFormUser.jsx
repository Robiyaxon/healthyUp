import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "antd/dist/antd.css";

import styles from "./InputForm.module.css";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const InputFormUser = ({ type, data }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(data.email);
  const [last_name, setLast_name] = useState(data.last_name);
  const [first_name, setFirst_name] = useState(data.first_name);
  const [age, setAge] = useState(data.age);
  const [height, setHeight] = useState(data.height);
  const [weight, setWeight] = useState(data.weight);
  // const [age, setAge] = useState(data.age);

  useEffect(() => {
    setUsername(data.username);
    setEmail(data.email);
    setLast_name(data.last_name);
    setFirst_name(data.first_name);
    setAge(data.age);
    setHeight(data.height);
    setWeight(data.weight);
  }, [data]);

  console.log(data.username + " " + username);
  if (!data.username) {
    return <>Some wait...</>;
  }

  const Change = (e) => {
    setUsername(e.target.value);
  };

  const onFinish = (values) => {
    var data = new FormData();
    data.append("username", username || data.username);
    // data.append("password", values.password || data.password);
    data.append("email", email || data.email);
    data.append("first_name", first_name || data.first_name);
    data.append("last_name", last_name || data.last_name);
    data.append("age", age || data.age);
    data.append("height", height || data.information);
    data.append("phone", values.phone || data.phone);
    data.append("type", data.type);
    data.append("gender", values.gender || data.gender);

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
        navigate("/expertPerson");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <label>Username:</label>
      <Input
        value={username}
        onChange={Change}
        placeholder={"Username"}
        className={styles.inp}
      />
      <br />
      <label>Email:</label>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Email"}
        className={styles.inp}
      />
      <br />
      <label>First Name:</label>
      <Input
        value={first_name}
        onChange={(e) => setFirst_name(e.target.value)}
        placeholder={"First Name"}
        className={styles.inp}
      />
      <br />
      <label>Last Name:</label>c
      <Input
        value={last_name}
        onChange={(e) => setLast_name(e.target.value)}
        placeholder={"Last Name"}
        className={styles.inp}
      />
      <br />
      <label>Age</label>
      <Input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder={"Age"}
        className={styles.inp}
      />
      <br />
      <label>Height</label>
      <Input
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder={"Height"}
        className={styles.inp}
      />
      <label>Weight</label>
      <Input
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder={"Height"}
        className={styles.inp}
      />
      <label>Gender</label>
      <Form.Item name="gender" className={styles.select}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          defaultValue={String(data.gender)}
        >
          <Option value="1">Erkak</Option>
          <Option value="2">Ayol</Option>
        </Select>
      </Form.Item>
      <div className="buttonStyle">
        <Button htmlType="submit" className={"buttonSubmit"}>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default InputFormUser;
