import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brazil from "../Brazil/Brazil";
import InitialPage from "../InitialPage/InitialPage";
import Levels from "../Levels/Levels";
import Score from "../Score/Score";
import PontuationContext from '../Context/PontuationContext'
import { useState } from "react";

function App() {

  const [pontuation, setPontuation] = useState(0)
  const [percentage, setPercentage] = useState(0)


  return (
    <BrowserRouter>
      <PontuationContext.Provider value={{ pontuation, setPontuation, percentage,setPercentage }}>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/niveis" element={< Levels />} />
          <Route path="/brasil" element={< Brazil />} />
          <Route path="/score" element={< Score />} />
        </Routes>
      </PontuationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
