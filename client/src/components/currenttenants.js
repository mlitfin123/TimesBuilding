import React, { useEffect, useState } from "react";
import axios from 'axios'
import Nav from "./nav";

const Current = () => {
    const [tenants, setTenants] = useState([])

    useEffect(() => {
            fetchTenants()
        }, [])

// Fetch all tenants
    const fetchTenants = async () => {
    axios
        .get('/all')
        .then(response => {
        setTenants(response.data)
    })
    .catch(error => console.error(`There was an error retrieving the tenant list: ${error}`))
}
    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col">
                    <div className="title">
                        <h3>Current tenants include a diverse clientele including retail and professional companies:</h3>
                    </div>
                    <div className="title-secondary">
                        <ul>
                            {tenants.map(tenant => (<li tenant key={tenant.id}><a href={tenant.website} target="_blank" rel="noopener noreferrer">{tenant.tenant}</a></li>))}
                        </ul>
                    </div>
                    </div>
                </div>
        </main>
    )
}

export default Current