import { Route, Routes } from "react-router-dom";

import { Repo } from "./pages/Repo";
import { Repos } from "./pages/Repos";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  )
}