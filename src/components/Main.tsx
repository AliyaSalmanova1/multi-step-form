import React from 'react'
import { Outlet, useLocation } from "react-router-dom"


function MainSection(){

    const { pathname } = useLocation()

    const text = {
        "/": {
            h1: "Personal info",
            p: "Please provide your name, email address, and phone number."
        },
        "/plan": {
            h1: "Select your plan",
            p: "You have the option of monthly or yearly billing."
        },
        "/add-ons": {
            h1: "Pick add-ons",
            p: "Add-ons help enhance your gaming experience."
        },
        "/summary": {
            h1: "Finishing up",
            p: "Double-check everything looks OK, before confirming."
        }
    }

    return (
        <div className="secondHalf">
            <div className="grayArea">
                <div className="main">
                    <header>
                        <h1 className="h1">{text[pathname as keyof typeof text].h1}</h1>
                        <p>{text[pathname as keyof typeof text].p}</p>
                    </header>

                    <div className="vertical-container">
                        <Outlet />

                    </div>
                    
                

                </div>
                
            </div>
            <footer>
                <button className="nextStep-button"><p>Next Step</p></button>
            </footer>
            
        </div>
        
        
    )

}

export default MainSection;