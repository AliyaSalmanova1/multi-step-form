import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SelectionBox from "./components/Selections.js"
import PersonalInfo from "./components/Info.js"
import MainSection from "./components/Main.js"
import { useState } from "react";

function App() {

  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const [plan, setPlan] = useState({
    plan: '',
    monthYear: ''
  })


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectionBox />}>
          <Route index element={<PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>}/>
          <Route path="plan" element={<PersonalInfo />}/>
          <Route path="add-ons" element={<PersonalInfo />}/>
          <Route path="summary" element={<PersonalInfo />}/>
        </Route>

        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
