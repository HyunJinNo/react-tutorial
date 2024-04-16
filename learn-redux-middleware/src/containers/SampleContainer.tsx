import { connect } from "react-redux";
import Sample from "../components/Sample";
import { RootType } from "../modules";
import { useEffect } from "react";
import { getPost, getUsers } from "../modules/sample";

type MyProps = {
  loadingPost: boolean;
  loadingUsers: boolean;
  post: { title: string; body: string };
  users: { id: number; username: string; email: string }[];
  getPost: (id: number) => void;
  getUsers: () => void;
};

const SampleContainer = ({
  loadingPost,
  loadingUsers,
  post,
  users,
  getPost,
  getUsers,
}: MyProps) => {
  useEffect(() => {
    getPost(Math.floor(Math.random() * 100) + 1);
    getUsers();
  }, [getPost, getUsers]);

  return (
    <Sample
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
      post={post}
      users={users}
    />
  );
};

export default connect(
  ({ sample }: RootType) => ({
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
    post: sample.post,
    users: sample.users,
  }),
  {
    getPost,
    getUsers,
  },
)(SampleContainer);
