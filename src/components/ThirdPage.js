import React, { useState } from 'react';

import { useNavigate } from "react-router-dom"


const ThirdPage = () => {

  const navigate = useNavigate();



  const next = () => {
    navigate("/summary")

  }

  



  return (
    <>
      <form className="planPage-form">
        <label className="megaCheckbox">
          <input type="checkbox"/>
          <div>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p>+$1/mo</p>
          
        </label>
        <label className="megaCheckbox">
          <input type="checkbox"/>
          <div>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>+$2/mo</p>
          
        </label>
        <label className="megaCheckbox">
          <input type="checkbox"/>
          <div>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p>+$2/mo</p>
          
        </label>
          
          

      </form>
      <button className="nextStep-button" onClick={next}>Next Step</button>
    </>
    

    

  );
};

export default ThirdPage;