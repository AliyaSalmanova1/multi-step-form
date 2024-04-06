import React, { useState } from 'react';
import orangeIcon from "../images/orangeIcon.png"
import pinkIcon from "../images/pinkIcon.png"
import purpleIcon from "../images/purpleIcon.png"


const PlanSelectionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  console.log('plan page rendering')

  const selecting = (e) => {
    setSelectedPlan(e.target.id)
  };

  return (
    <>
        <div className="plan-options">
            <button className="plan-option" id="arcade" onClick={selecting}>
                
                <img src={orangeIcon} />
                <h2>Arcade</h2>
                <p>$9/mo</p>
            </button>
            <button className="plan-option" id="advanced" onClick={selecting}>
                <img src={pinkIcon} />
                <h2>Advanced</h2>
                <p>$12/mo</p>
            </button>
            <button className="plan-option" id="pro" onClick={selecting}>
                <img src={purpleIcon} />
                <h2>Pro</h2>
                <p>$15/mo</p>
            </button>
            
        </div>
        <input id="id-switch-1"
           type="checkbox"
           role="switch" />

    </>

    

  );
};

export default PlanSelectionPage;