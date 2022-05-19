import { Route, Routes } from "react-router-dom";
import MainPage from "./features/MainPage/pages/MainPage";
import UsersTable from "./features/UsersTable/pages/UsersTable";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users-table" element={<UsersTable />} />
    </Routes>
  );
}
