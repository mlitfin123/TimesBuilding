import React from "react";

const admin = () => {
    return (
        <main>
            <form className="form">
                <h2>Check the Box to Open the Space:</h2>
                <input type="checkbox" id="basement" name="basement" onChange=""></input>
                <label for="basement"> Basement Open</label><br></br>
                <input type="checkbox" id="suite 101" name="suite 101" onChange=""></input>
                <label for="suite 101"> Suite 101 Open</label><br></br>
                <input type="checkbox" id="suite 102" name="suite 102" onChange=""></input>
                <label for="suite 102"> Suite 102 Open</label><br></br>
                <input type="checkbox" id="suite 103" name="suite 103" onChange=""></input>
                <label for="suite 103"> Suite 103 Open</label><br></br>
                <input type="checkbox" id="suite 203" name="suite 203" onChange=""></input>
                <label for="suite 203"> Suite 203 Open</label><br></br>
                <input type="checkbox" id="suite 207" name="suite 207" onChange=""></input>
                <label for="suite 207"> Suite 207 Open</label><br></br>
                <input type="checkbox" id="61 e" name="61 e" onChange=""></input>
                <label for="61 e"> 61 East Main Open</label><br></br>
                <input type="checkbox" id="65 e" name="65 e" onChange=""></input>
                <label for="65 e"> 65 East Main Open</label>
            </form>
            <form className="form">
                <h2>Enter the Name and Website of the New Tenant:</h2>
                <input type="text" id="newTenant" name="newTenant" placeholder="New Tenant" onSubmit=""></input><br></br>
                <input type="text" id="website" name="website" placeholder="Website" onSubmit=""></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form>
            <form className="form">
                <h2>Remove a Current Tenant:</h2>
                <input type="text" id="newTenant" name="newTenant" placeholder="Tenant to Remove" onSubmit=""></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </form>
        </main>
    )
}

export default admin