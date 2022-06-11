import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brazil from "../Brazil/Brazil";
import USA from '../Countries/USA/USA'
import InitialPage from "../InitialPage/InitialPage";
import Levels from "../Levels/Levels";
import Score from "../Score/Score";
import Continent from "../Continent/Continent";
import Countries from "../Countries/Countries";
import PontuationContext from '../Context/PontuationContext'
import { useState } from "react";
import Germany from "../Countries/Germany/Germany";
import Italy from "../Countries/Italy/Italy";
import Argentina from "../Countries/Argentina/Argentina";

function App() {

  const [pontuation, setPontuation] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [questions, SetQuestions] = useState([])


  return (
    <BrowserRouter>
      <PontuationContext.Provider value={{ pontuation, setPontuation, percentage, setPercentage, questions, SetQuestions }}>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/niveis" element={< Levels />} />
          <Route path="/brasil" element={< Brazil />} />
          <Route path="/paises" element={< Countries />} />
          <Route path="/usa" element={< USA />} />
          <Route path="/alemanha" element={< Germany />} />
          <Route path="/italia" element={< Italy />} />
          <Route path="/argentina" element={< Argentina />} />
          <Route path="/continentes" element={< Continent />} />
          <Route path="/score" element={< Score />} />
        </Routes>
      </PontuationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
