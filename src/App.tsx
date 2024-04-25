import React from 'react'

import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SelectionBox from "./components/Selections"
import PersonalInfo from "./components/Info"
import MainSection from "./components/Main"
import ThirdPage from "./components/ThirdPage"
import SummaryPage from "./components/Summary"
import PlanSelectionPage from "./components/PlanPage"
import { useState } from "react";

import { PlanInfoType } from "./types/types"

const App: React.FC = () => {

  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [planInfo, setPlan] = useState<PlanInfoType>({
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
