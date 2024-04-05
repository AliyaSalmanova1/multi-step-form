
function PersonalInfo({personalInfo, setPersonalInfo}){



  


    return (
        <>
            <form className="infoForm">
                <label>Name<br/>
                    <input 
                    value={personalInfo.name}
                    onChange={(e) => {
                        setPersonalInfo({...personalInfo, name: e.target.value})}} 
                    type="text"
                    />
                </label> 
                <label>Email Address<br/>
                    <input 
                    value={personalInfo.email}
                    onChange={(e) => {
                        setPersonalInfo({...personalInfo, email: e.target.value})}} 
                    type="email"
                    />
                </label> 
                <label>Phone Number<br/>
                <input 
                    value={personalInfo.phone}
                    onChange={(e) => {
                        setPersonalInfo({...personalInfo, phone: e.target.value})}} 
                    type="number"
                    />
                </label> 
                

                
                
                
            </form>
            <button>Next Step</button>
            
        </>
        
    )

}

export default PersonalInfo;