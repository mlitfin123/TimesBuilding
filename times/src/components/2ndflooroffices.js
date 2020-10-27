import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const SecondFloor = () => {

    const [space, setSpace] = useState([])

    useEffect(() => {
        fetchSpace()
    }, [])

    const fetchSpace = async () => {
        axios
            .get('http://localhost:4001/spaceall', {
        })
            .then(res => {
            setSpace(res.data)
            console.log(res.data)
            })
            .catch(error => console.error(`There was an error fetching the ${space}: ${error}`))
    }

    function getOffices(space) {
        var office = space.is_open;
        return office;
      }

    let offices = space.map(getOffices);
    let suite203 = offices[4]
    let suite207 = offices[5]

    return (
        <main>
            <section className="content">
                <section className="column">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="column-content bio">
                                <h1>2nd Floor Offices</h1>
                            </div>
                                <ul>
                                    <li>Economical office space in the center of town</li>
                                    <li>Common men's and women's restroom maintained by landlord</li>
                                    <li>Premise monitored with video surveillance</li>
                                    <li>Building access electronically controlled</li>
                                </ul>
                        </div>
                        <div className="title-secondary">
                                <h3>
                                    Currently Available Space
                                </h3>
                                { suite203 === -1 && (
                                <h4 id="suite203">
                                    Suite 203 is currently available for lease. Check out the <Link to={"./suite203fp"}>Floorplan</Link>.
                                </h4> )
                                }
                                { suite207 === -1 && (
                                <div>
                                <h4 id="suite207">
                                    Suite 207
                                </h4> 
                                    <ul>
                                        <li>880 sq/ft Office Suite</li>
                                        <li>2 large office suites for flexible floor plans</li>
                                        <li>Bright and open with oversized windows</li>
                                        <li>Click for <Link to={"./suite207fp"}>Floorplan</Link></li>
                                    </ul>
                                    </div>
                                    )
                                }
                            </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default SecondFloor