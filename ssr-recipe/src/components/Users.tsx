import { Link } from "react-router-dom";

type MyProps = {
  users: { id: number; username: string }[];
};

const Users = ({ users }: MyProps) => {
  // users가 유효하지 않다면 아무 것도 보여주지 않음.
  if (!users) {
    return null;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
