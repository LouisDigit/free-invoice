import Home from "../ui/views/Public/Home";
import Login from "../ui/views/Public/Login";
import Register from "../ui/views/Public/Register";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../ui/views/Public/Layout";
export const testingRouter = (initialEntry: string) => {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};
