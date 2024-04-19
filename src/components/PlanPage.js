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

  const handleClick = (e, id) => {
    e.preventDefault();
    setPlan((existingPlan) => ({ ...existingPlan, plan: id, monthYear }))

  }



  return (
    <>
      <form className="planPage-form">
          <div className="plan-options">
              <button className="plan-option" id="arcade" onClick={(e) => handleClick(e, "arcade")}>
                  
                  <img src={orangeIcon} />
                  <div className={`plan-option-text ${monthYear ? '' : 'small-gap'}`}>
                    <h2>Arcade</h2>
                    <p className="price">{monthYear ? '$9/mo' : '$90/yr'}</p>
                    {!monthYear && <p className="free">2 months free</p>}
                    
                  </div>
                  
              </button>
              <button className="plan-option" id="advanced" onClick={(e) => handleClick(e, "advanced")}>
                  <img src={pinkIcon} />
                  <div className={`plan-option-text ${monthYear ? '' : 'small-gap'}`}>
                    <h2>Advanced</h2>
                    <p className="price">{monthYear ? '$12/mo' : '$120/yr'}</p>
                    {!monthYear && <p className="free">2 months free</p>}
                  </div>
                  
                  
              </button>
              <button className="plan-option" id="pro" onClick={(e) => handleClick(e, "pro")}>
                  <img src={purpleIcon} />
                  <div className={`plan-option-text ${monthYear ? '' : 'small-gap'}`}>
                    <h2>Pro</h2>
                    <p className="price">{monthYear ? '$15/mo' : '$150/yr'}</p>
                    {!monthYear && <p className="free">2 months free</p>}
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