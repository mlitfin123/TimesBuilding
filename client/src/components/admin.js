import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from "../context/auth";

const Admin = () => {
    const [tenant, setTenant] = useState('')
    const [space, setSpace] = useState([])
    const [website, setWebsite] = useState('')
    const [tenants, setTenants] = useState([])
    const { setAuthTokens } = useAuth();

    useEffect(() => {
            fetchTenants()
            fetchSpace()
        }, [])

    function logOut() {
        setAuthTokens();
    }

// Fetch all tenants
    const fetchTenants = async () => {
    axios
        .get('/all')
        .then(response => {
        setTenants(response.data)
    })
    .catch(error => console.error(`There was an error retrieving the tenant list: ${error}`))
}
  // Create new tenant
    const handleTenantCreate = () => {
    axios
        .post('/create', {
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

    if (tenant.length > 0) {
        handleTenantCreate()
        
        console.log(`Tenant ${tenant} and website ${website} added.`)
    }
}

  // Remove tenant
    const handleTenantRemove = (id, tenant) => {
    axios
        .put('/delete', { id })
        .then(() => {
        console.log(`Tenant ${tenant} removed.`)

        fetchTenants()
    })
    .catch(error => console.error(`There was an error removing the ${tenant} tenant: ${error}`))
}

  // remove all tenants
const handleListReset = () => {
    axios.put('/reset')
    .then(() => {

        fetchTenants()
    })
    .catch(error => console.error(`There was an error resetting the tenant list: ${error}`))
}

const fetchSpace = async () => {
    axios
        .get('/spaceall', {
    })
        .then(res => {
        setSpace(res.data)
        console.log(res.data)
        })
        .catch(error => console.error(`There was an error fetching the ${space}: ${error}`))
}

const handleSpaceModify = (id, space) => {
    axios
        .post('/spacemodify', { id })
        .then(res => {
            fetchSpace()
            console.log(res)
            console.log(`${space} Availability Changed`)

        })
        .catch(error => console.error(`There was an error modifying the ${space} tenant: ${error}`))
}

    return (
        <main>
            <form className="form">
                <h2>Check the Box to Open the Space:</h2>
                {space.map(space => (<li space key={space.id}>{space.space} open <input type="checkbox" id={space.id} name={space.space} value={space.is_open} checked={space.is_open == '-1'? "checked" : null }  onChange={() => handleSpaceModify(space.id)}></input></li>))}
            </form>
            <div className="tenant-list-wrapper">
                {/* Form for creating new tenant */}
                <div className="tenant-list-form">
                    <div className="form-wrapper" onSubmit={handleTenantSubmit}>
                        <div className="enterTenant">
                    <h2 className="tenantLabel">Enter the Name and Website of the New Tenant:</h2>
                        <div className="form-row">
                            <fieldset className="tenantLabel">
                                <label className="form-label" htmlFor="tenant">Enter New Tenant: </label>
                                <input className="form-input" type="text" id="tenant" name="tenant" value={tenant} placeholder="Tenant Name" required="true" onChange={(e) => setTenant(e.currentTarget.value)} />
                            </fieldset>
                            <fieldset className="tenantLabel">
                                <label className="form-label" htmlFor="website">Enter Website for Tenant: </label>
                                <input className="form-input" type="text" id="website" name="website" value={website} placeholder="Website" onChange={(e) => setWebsite(e.currentTarget.value)} />
                            </fieldset>
                        </div>
                    <button id="tenantSubmit" onClick={handleTenantSubmit} className="btn btn-add">Add the Tenant</button>
                    </div>
                    </div>
                    <h2 className="tenantLabel">Remove a Current Tenant:</h2>
                        <ul className="list">
                            {tenants.map(tenant => (<li tenant key={tenant.id}>{tenant.tenant} <button onClick={() => handleTenantRemove(tenant.id)} className="delete=btn">x</button></li>))}
                        </ul>
                </div>
                {/* Show reset button if list contains at least one tenant */}
                {tenants.length > 0 && (
                    <button className="btn btn-reset" onClick={handleListReset}>Delete All Tenants.</button>
                )}
                <br></br>
                <br></br>
                <button onClick={logOut}>Log out</button>
            </div>
        </main>
    )
}

export default Admin