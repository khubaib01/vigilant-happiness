import { useStore } from "@/store/store";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CollapseIcon } from "./CollapseIcon";
import { ThemeIcon } from "./ThemeIcon";

export const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const loggedIn = useStore((state) => state.loggedIn);

  return (
    <section className="container relative flex justify-between items-center border-2 border-sky-500 dark:border-sky-400 p-4 rounded-lg">
      <div>
        <h1 className="lowercase italic text-3xl md:text-4xl font-bold">
          <Link to="/">Blogify</Link>
        </h1>
      </div>
      <div className="hidden lg:flex lg:justify-between lg:items-center gap-x-2 text-lg">
        <Links />
      </div>
      {open ? (
        <div className="w-full flex justify-center">
          <div className="flex gap-y-4 absolute animate-slide p-4 bg-sky-500 bg-opacity-50 w-[80%] divide-y divide-sky-300 rounded-lg flex-col">
            <Links />
          </div>
        </div>
      ) : null}
      <div className="flex items-center justify-center">
        <ThemeIcon />
        <div
          className="block lg:hidden ml-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <CollapseIcon open={open} />
        </div>

        {loggedIn ? <Logout /> : <Login />}
      </div>
    </section>
  );
};

function Links() {
  return (
    <>
      <Link
        to="/"
        className="hover:bg-gray-200 dark:hover:bg-gray-800 font-medium p-1 rounded transition-all duration-300"
      >
        Home
      </Link>
      <Link
        to="/new"
        className="hover:bg-gray-200 dark:hover:bg-gray-800 font-medium p-1 rounded transition-all duration-300"
      >
        New
      </Link>
      <Link
        to="/profile"
        className="hover:bg-gray-200 dark:hover:bg-gray-800 font-medium p-1 rounded transition-all duration-300"
      >
        Profile
      </Link>
      <Link
        to="/about"
        className="hover:bg-gray-200 dark:hover:bg-gray-800 font-medium p-1 rounded transition-all duration-300"
      >
        About
      </Link>
    </>
  );
}

function Login() {
  return (
    <Link to="/login">
      <button className="btn ml-2">login</button>
    </Link>
  );
}
function Logout() {
  return <button className="btn-danger ml-2">logout</button>;
}
