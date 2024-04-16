import { NavLink, Outlet } from "react-router-dom";

type ItemProps = {
  id: number;
};

const ArticlesItem = ({ id }: ItemProps) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticlesItem id={1} />
        <ArticlesItem id={2} />
        <ArticlesItem id={3} />
      </ul>
    </div>
  );
};

export default Articles;
