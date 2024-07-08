import { connect } from "react-redux";
import Users from "../components/Users";
import { RootType } from "../modules";
import { useEffect } from "react";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

type MyProps = {
  users: { id: number; username: string }[];
  getUsers: () => Promise<void>;
};

const UsersContainer = ({ users, getUsers }: MyProps) => {
  // 컴포넌트가 마운트되고 나서 호출
  useEffect(() => {
    if (users) {
      return; // users가 이미 유효하다면 요청하지 않음.
    }
    getUsers();
  }, [getUsers, users]);

  return (
    <div>
      <Users users={users}></Users>;
      <Preloader resolve={() => getUsers} />
    </div>
  );
};

export default connect(
  ({ users }: RootType) => ({
    users: users.users,
  }),
  {
    getUsers,
  },
)(UsersContainer);
