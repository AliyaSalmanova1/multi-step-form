
import { useState } from "react"

function PersonalInfo({personalInfo, setPersonalInfo}){

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
            <button className="nextStep-button" onClick={validate}>Next Step</button>
            
        </>
        
    )

}

export default PersonalInfo;