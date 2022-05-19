import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import styled from "styled-components";

export default function UsersTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (text, record) => `${text?.name}`
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text, record) => (
        <span>
          {text?.suite}, <br /> {text?.street}, {text?.city}, <br />{" "}
          {text?.zipcode}
        </span>
      )
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website"
    },
    {
      title: "View",
      key: "id",
      dataIndex: "id",
      render: (text, record) => (
        <>
          <Button
            onClick={() => messageToParent({ ...record, type: "profile" })}
          >
            {"Profile"}
          </Button>
          <Button onClick={() => messageToParent({ ...record, type: "posts" })}>
            {"Posts"}
          </Button>
        </>
      )
    }
  ];

  const messageToParent = (data) => {
    window.parent.postMessage(data, "*");
  };

  return (
    <TableContainer>
      <Table dataSource={data} columns={columns} rowKey="id" />
    </TableContainer>
  );
}

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;
