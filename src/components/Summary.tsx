import React, { useState } from 'react';

import { useNavigate } from "react-router-dom"
import { PlanInfoType, AddOnsType } from "../types/types"


interface SummaryProps{
  planInfo: PlanInfoType;
  addOns: AddOnsType;
}

const SummaryPage = (props : SummaryProps) => {

  const { planInfo: {plan,
    monthYear
  }, addOns} = props



  const navigate = useNavigate();

  const next = () => {
  

  }

  const priceForPlans = {
    arcade: 9,
    advanced: 12,
    pro: 15
  }

  const priceForExtras = {
    onlineService: 1,
    largerStorage: 2,
    customizableProfile: 2
  }

  let initialPrice = monthYear ? priceForPlans[plan] : priceForPlans[plan]*10;

  const specifications: [string, string, string, number] = monthYear ? ['Monthly', 'month', 'mo', 1] : 
['Yearly', 'year', 'yr', 10]

  const totalPrice = Object.keys(addOns).reduce((acc, currAddOn) => {
    console.log('currAddOn', currAddOn)
    if (currAddOn) return acc + (priceForExtras[currAddOn as keyof typeof priceForExtras] * specifications[3] )
    else return acc;

  }, initialPrice)






  return (
    <>
    <div className="summaryBox">
      <section className="section">
        <h3>{plan} ({specifications[0]})</h3>
        <a>Change</a>
        <p>{`+${initialPrice}/${specifications[2]}`}</p>
        
      </section>
      <hr></hr>
      {Object.entries(addOns).map(([key, value]) => {
        return value ?  (
        <section className="section">
          <p>{key}</p>
          <p>{`+${monthYear ? priceForExtras[key as keyof typeof priceForExtras] : priceForExtras[key as keyof typeof priceForExtras]*10}/${specifications[2]}`}</p>
      
        </section>
        ) : <></>
      })}


      <section className="section">
      
      </section>

    </div>
    <section className="section">
      <p>Total per {specifications[1]}</p>
      <p>{`+${totalPrice}/${specifications[2]}`}</p>
    </section>
      
       
          
          

     
  
    </>
    

    

  );
};

export default SummaryPage;