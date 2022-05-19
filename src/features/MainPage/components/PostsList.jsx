import { useEffect, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

const PostsList = ({ user }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (user && user?.id) {
      const url = `https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`;
      fetch(url)
        .then((response) => response.json())
        .then(function (data) {
          setPosts(data);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  if (!user) {
    return <h2>Please select a user to see Posts</h2>;
  }

  return (
    <div>
      {posts?.map((post) => (
        <CardComponent key={post?.id}>
          <Card size="small" title={post?.title || ""} style={{ width: 300 }}>
            <p>{post?.body || ""}</p>
          </Card>
        </CardComponent>
      ))}
    </div>
  );
};

export default PostsList;

const CardComponent = styled.div`
  margin-bottom: 8px;
`;
