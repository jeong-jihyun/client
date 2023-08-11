import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export default function PageRoutes() {
    // 우선 메인 패이지만 붙여 작업을 진행 한다
    // 추후에, 화면이 필요시 추가 하도록 한다
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
