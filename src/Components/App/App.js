import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brazil from "../Brazil/Brazil";
import InitialPage from "../InitialPage/InitialPage";
import Levels from "../Levels/Levels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/niveis" element={< Levels />} />
        <Route path="/brasil" element={< Brazil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
