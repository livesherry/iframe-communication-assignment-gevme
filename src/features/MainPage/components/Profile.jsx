import { Form, Input, Avatar } from "antd";
import styled from "styled-components";

const Profile = ({ user }) => {
  if (!user) {
    return <h2>Please select a user to see Profile</h2>;
  }
  return (
    <div>
      <AvatarContainer>
        <Avatar
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf"
          }}
          size={100}
        >
          {user?.name[0]}
        </Avatar>
        <NameContainer>{user?.name}</NameContainer>
      </AvatarContainer>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 24
        }}
        layout={"vertical"}
        initialValues={{
          email: user?.email,
          address: Object.values(user?.address).join(", "),
          phone: user?.phone,
          website: user?.website,
          company: user?.company?.name
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input a valid email!",
              type: "email"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Website" name="website">
          <Input />
        </Form.Item>
        <Form.Item label="Company Name" name="company">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;

const AvatarContainer = styled.div`
  text-align: center;
`;

const NameContainer = styled.p`
  margin: 10px 0px;
`;
