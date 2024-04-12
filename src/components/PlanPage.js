import React, { useState } from 'react';
import orangeIcon from "../images/orangeIcon.png"
import pinkIcon from "../images/pinkIcon.png"
import purpleIcon from "../images/purpleIcon.png"
import { useNavigate } from "react-router-dom"


const PlanSelectionPage = (props) => {

const { planInfo: { 
  plan,
  monthYear
}, 
setPlan} = props
  const navigate = useNavigate();

  console.log('plan page rendering')


  const monthlyYearly = (e) => {
    setPlan({plan, monthYear: !monthYear})

  }

  const next = () => {
    navigate("/add-ons")

  }



  return (
    <>
      <form className="planPage-form">
          <div className="plan-options">
              <button className="plan-option" id="arcade" onClick={(e) => {
                e.preventDefault();
                setPlan({plan: "arcade", monthYear})

              }}>
                  
                  <img src={orangeIcon} />
                  <div>
                    <h2>Arcade</h2>
                    <p>$9/mo</p>
                  </div>
                  
              </button>
              <button className="plan-option" id="advanced" onClick={(e) => {
                e.preventDefault();
                setPlan({plan: "advanced", monthYear})

              }}>
                  <img src={pinkIcon} />
                  <div>
                    <h2>Advanced</h2>
                    <p>$12/mo</p>
                  </div>
                  
              </button>
              <button className="plan-option" id="pro" onClick={(e) => {
                e.preventDefault();
                setPlan({plan: "pro", monthYear})

              }}>
                  <img src={purpleIcon} />
                  <div>
                    <h2>Pro</h2>
                    <p>$15/mo</p>
                  </div>
                  
              </button>
              
          </div>
          <div className="grayBox">
            <p className={`${monthYear ? "darkText" : "lightText"}`}>Monthly</p>
            <label className="switch-container">
              
              <input 
           
                type="checkbox"
                role="switch" 
                onChange={monthlyYearly}/>
              <span></span>
              
              
            </label>
            <p className={`${monthYear ? "lightText" : "darktext"}`}>Yearly</p>
          </div>
          

      </form>
      
    </>
    

    

  );
};

export default PlanSelectionPage;