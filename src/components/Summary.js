import React, { useState } from 'react';

import { useNavigate } from "react-router-dom"


const SummaryPage = (props) => {

  const { planInfo: {plan,
    monthYear
  }, addOns: {
    onlineService,
    largerStorage,
    customizableProfile
  }} = props

  const { addOns } = props

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

  const specifications = monthYear ? ['Monthly', 'month', 'mo', 1] : 
['Yearly', 'year', 'yr', 10]

  const totalPrice = Object.keys(addOns).reduce((acc, currAddOn) => {
    console.log('currAddOn', currAddOn)
    if (currAddOn) return acc + (priceForExtras[currAddOn] * specifications[3] )
    else return acc;

  }, initialPrice)






  return (
    <>
    <div>
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
          <p>{`+${monthYear ? priceForExtras[key] : priceForExtras[key]*10}/${specifications[2]}`}</p>
      
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
      
       
          
          

     
      <button className="nextStep-button" onClick={next}>Next Step</button>
    </>
    

    

  );
};

export default SummaryPage;