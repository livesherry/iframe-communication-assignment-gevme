import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import PostsList from "../components/PostsList";
import Profile from "../components/Profile";
import styled from "styled-components";

export default function MainPage() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleIframeMessage = (e) => {
    if (e.data && (e.data?.type === "posts" || e.data?.type === "profile")) {
      setType(e.data?.type);
      setUser(e.data);
      showDrawer();
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("message", handleIframeMessage);
    }
    return () => {
      if (window) {
        window.removeEventListener("message", handleIframeMessage);
      }
    };
  }, []);

  return (
    <div width="100%" heigth="100%">
      <Iframe src="/users-table" title="Users Table" name="userTable"></Iframe>
      {type && (
        <Drawer
          title={`User ${type}`}
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          {type && type === "posts" ? (
            <PostsList user={user} />
          ) : (
            <Profile user={user} />
          )}
        </Drawer>
      )}
    </div>
  );
}

const Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
`;
