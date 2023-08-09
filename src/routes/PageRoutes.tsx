import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
