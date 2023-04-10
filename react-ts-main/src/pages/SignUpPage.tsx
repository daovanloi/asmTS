import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interface/Interface";
import { Button, Checkbox, Form, Input } from "antd";
interface IPropUser {
  onAddUser: (inputValue: IUser) => void;
}
const SignUpPage = (props: IPropUser) => {
  const navigate = useNavigate();
  // console.log(props);

  const onFinish = (values: any) => {
    props.onAddUser(values);
    // navigate("/signin");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Name" name="name"
      rules={[
        { required: true, message: "Bạn chưa nhập name!" },
        // { type: "name", message: "Email phải đúng định dạng" },
      ]}
      >
        
        <Input />
        
      </Form.Item >
      <Form.Item label="Email" name="email"
      rules={[
        { required: true, message: "Bạn chưa nhập email!" },
        { type: "email", message: "Email phải đúng định dạng" },
        
      ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password"
      rules={[{ required: true, message: "Bạn chưa nhập mật khẩu!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Confirm Password" name="confirmPassword"
       rules={[{ required: true, message: "Bạn chưa nhập mật khẩu!" },
       ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error("Mật khẩu của bạn hiện tại không khớp!")
          );
        },
      }),


      ]
      }
       
      
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpPage;
