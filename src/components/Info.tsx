
import React, { useState } from "react"

import { PersonalInfoType } from "../types/types"

interface InfoProps{
    personalInfo: PersonalInfoType;
    setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfoType>>
}

function PersonalInfo({personalInfo, setPersonalInfo}: InfoProps){

    const [phoneReq, setPhoneReq] = useState(false)


   const validate = () => {
    console.log('in validate', personalInfo.phone)
    if (!personalInfo.phone) setPhoneReq(true)



   }
  


    return (
        <>
            <form className="infoForm">
                <label>Name<br/>
                    <input 
                    className="infoPage-text-input"
                    value={personalInfo.name}
                    onChange={(e) => {
                        setPersonalInfo({...personalInfo, name: e.target.value})}} 
                    type="text"
                    />
                </label> 
                <label>Email Address<br/>
                    <input 
                    className="infoPage-text-input"
                    value={personalInfo.email}
                    onChange={(e) => {
                        setPersonalInfo({...personalInfo, email: e.target.value})}} 
                    type="email"
                    />
                </label> 
                <label>Phone Number{phoneReq ? <span className="red-text">This field is required</span> : <></>}<br/>
                    <input 
            
                    className={`infoPage-text-input ${phoneReq ? 'redBorder' : ''}`}
                    value={personalInfo.phone}
                    onChange={(e) => {
                        setPersonalInfo({...personalInfo, phone: e.target.value})}} 
                    type="number"
                    placeholder="e.g. +1 234 567 890"
                    />
                </label> 
                

                
                
                
            </form>
   
            
        </>
        
    )

}

export default PersonalInfo;