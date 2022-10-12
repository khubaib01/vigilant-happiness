import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Home } from "@/pages/Home";
import { useStore } from "./store/store";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Newpost } from "./pages/Newpost";

export const App = () => {
  const dark = useStore((state) => state.dark);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/new" element={<Newpost />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};
