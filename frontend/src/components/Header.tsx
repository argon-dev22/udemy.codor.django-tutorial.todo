import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-neutral-400 text-white p-4">
        <h1 className="text-2xl">Todo List</h1>
        <p>TodoListを作成して、毎日の生産性を高めましょう。</p>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
