import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Admin = () => {
    const [tenant, setTenant] = useState('')
    const [space, setSpace] = useState('')
    const [website, setWebsite] = useState('')
    const [tenants, setTenants] = useState([])

    useEffect(() => {
            fetchTenants()
        }, [])

// Fetch all tenants
    const fetchTenants = async () => {
    axios
        .get('http://localhost:4001/all')
        .then(response => {
        setTenants(response.data)
    })
    .catch(error => console.error(`There was an error retrieving the tenant list: ${error}`))
}
  // Create new tenant
    const handleTenantCreate = () => {
    axios
        .post('http://localhost:4001/create', {
        tenant: tenant,
        website: website,
    })
        .then(res => {
        console.log(res.data)
        })
        .catch(error => console.error(`There was an error creating the ${tenant} tenant: ${error}`))
}
 // Submit new tenant
    const handleTenantSubmit = () => {

    if (tenant.length > 0 && website.length > 0) {
        handleTenantCreate()
        
        console.log(`Tenant ${tenant} and website ${website} added.`)
    }
}

  // Remove tenant
    const handleTenantRemove = (id, tenant) => {
    axios
        .put('http://localhost:4001/delete', { id })
        .then(() => {
        console.log(`Tenant ${tenant} removed.`)

        fetchTenants()
    })
    .catch(error => console.error(`There was an error removing the ${tenant} tenant: ${error}`))
}

  // remove all tenants
const handleListReset = () => {
    axios.put('http://localhost:4001/reset')
    .then(() => {

        fetchTenants()
    })
    .catch(error => console.error(`There was an error resetting the tenant list: ${error}`))
}

const handleSpaceCreate = () => {
    axios
        .post('http://localhost:4001/spacecreate', {
        space: space,
        is_open: false,
    })
        .then(res => {
        console.log(res.data)
        })
        .catch(error => console.error(`There was an error creating the ${space} tenant: ${error}`))
}

  // Remove space
    const handleSpaceRemove = (id, tenant) => {
    axios
        .put('http://localhost:4001/spacedelete', { id })
        .then(() => {
        console.log(`Tenant ${space} removed.`)

    })
    .catch(error => console.error(`There was an error removing the ${space} space: ${error}`))
}

  // remove all tenants
const handleSpaceReset = () => {
    axios.put('http://localhost:4001/spacereset')
    .then(() => {

    })
    .catch(error => console.error(`There was an error resetting the space list: ${error}`))
}

console.log(tenants)
    return (
        <main>
            <form className="form">
                <h2>Check the Box to Open the Space:</h2>
                <input type="checkbox" id="basement" name="basement" value="rendered-checked" onChange=""></input>
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
            <div className="tenant-list-wrapper">
                {/* Form for creating new tenant */}
                <div className="tenant-list-form">
                    <div className="form-wrapper" onSubmit={handleTenantSubmit}>
                        <div className="form-row">
                        <h2>Enter the Name and Website of the New Tenant:</h2>
                            <fieldset>
                                <label className="form-label" htmlFor="tenant">Enter New Tenant:</label>
                                <input className="form-input" type="text" id="tenant" name="tenant" value={tenant} onChange={(e) => setTenant(e.currentTarget.value)} />
                            </fieldset>
                            <fieldset>
                                <label className="form-label" htmlFor="website">Enter Website for Tenant:</label>
                                <input className="form-input" type="text" id="website" name="website" value={website} onChange={(e) => setWebsite(e.currentTarget.value)} />
                            </fieldset>
                        </div>
                    </div>
                    <button onClick={handleTenantSubmit} className="btn btn-add">Add the Tenant</button>
                    <h2>Remove a Current Tenant:</h2>
                        <ul className="list">
                            {tenants.map(tenant => (<li tenant key={tenant.id}>{tenant.tenant} <button onClick={() => handleTenantRemove(tenant.id)} className="delete=btn">x</button></li>))}
                        </ul>
                </div>
                {/* Show reset button if list contains at least one tenant */}
                {tenants.length > 0 && (
                    <button className="btn btn-reset" onClick={handleListReset}>Delete All Tenants.</button>
                )}
            </div>
        </main>
    )
}

export default Admin