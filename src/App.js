import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SelectionBox from "./components/Selections.js"
import PersonalInfo from "./components/Info.js"
import MainSection from "./components/Main.js"
import ThirdPage from "./components/ThirdPage.js"
import SummaryPage from "./components/Summary.js"
import PlanSelectionPage from "./components/PlanPage.js"
import { useState } from "react";

const App = () => {

  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [planInfo, setPlan] = useState({
    plan: 'arcade',
    monthYear: true
  })

  const [addOns, setAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  })




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectionBox />}>
          <Route index element={<PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />}/>
          <Route path="plan" element={<PlanSelectionPage planInfo={planInfo} setPlan={setPlan} />}/>
          <Route path="add-ons" element={<ThirdPage addOns={addOns} setAddOns={setAddOns} />}/>
          <Route path="summary" element={<SummaryPage planInfo={planInfo} addOns={addOns}/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
