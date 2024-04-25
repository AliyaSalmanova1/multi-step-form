import React, { useState } from 'react';

import { useNavigate } from "react-router-dom"
import { PlanInfoType, AddOnsType } from "../types/types"

interface ThirdPgProps{
  addOns: AddOnsType;
  setAddOns: React.Dispatch<React.SetStateAction<AddOnsType>>
};
  

const ThirdPage = (props: ThirdPgProps) => {

  const { addOns: {
    onlineService,
    largerStorage,
    customizableProfile
  }, setAddOns} = props
  const {addOns} = props;

  const navigate = useNavigate();



  const next = () => {
    navigate("/summary")

  }







  return (
    <>
      <form className="planPage-form">
        <label className="megaCheckbox">
          <input type="checkbox" 
          checked={onlineService}
          onChange={() => {
            setAddOns({...addOns, onlineService: !onlineService})
          }}/>
          <div>
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p>+$1/mo</p>
          
        </label>
        <label className="megaCheckbox">
          <input type="checkbox"
          checked={largerStorage}
          onChange={() => {
            setAddOns({...addOns, largerStorage: !largerStorage})
          }}/>
          <div>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>+$2/mo</p>
          
        </label>
        <label className="megaCheckbox">
          <input type="checkbox"
          checked={customizableProfile}
          onChange={() => {
            setAddOns({...addOns, customizableProfile: !customizableProfile})
          }}/>
          <div>
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p>+$2/mo</p>
          
        </label>
          
          

      </form>
  
    </>
    

    

  );
};

export default ThirdPage;