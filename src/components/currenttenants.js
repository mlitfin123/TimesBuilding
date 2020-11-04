import React, { useEffect, useState } from "react";
import axios from 'axios'

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
            <section className="content">
                <section className="column">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="title">
                                <h3>Current tenants include a diverse clientele including retail and professional companies:</h3>
                            </div>
                            <div className="title-secondary">
                                <ul>
                                    {tenants.map(tenant => (<li tenant key={tenant.id}><a href={tenant.website}>{tenant.tenant}</a></li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Current