import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Mainstreet = () => {
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
    let main61 = offices[6]
    let main65 = offices[7]

    return (
        <main>
            <section className="content">
                <section className="column">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>
                            Main Street Retail
                            </h1>
                                <ul>
                                    <li>Great center of town location</li>
                                    <li>Near city parking lots</li>
                                    <li>New facade and awning</li>
                                    <li>12,000 average daily traffic count</li>
                                </ul>
                        </div>
                            <div className="title-secondary">
                                <h3>
                                    Currently Available Space
                                </h3>
                                { main65 === -1 && (
                                <div id="65emain">
                                    <h4>
                                        65 East Main Storefront (Retail or Office).
                                    </h4>
                                    <ul>
                                        <li>2740 sq/ft</li>
                                        <li>Large, open storefront</li>
                                        <li>Open floorplan 32'w x 80'd</li>
                                        <li>New carpeting</li>
                                        <li>ADA approved restroom</li>
                                        <li>Storage closet</li>
                                        <li>Move in condition</li>
                                        <li>Click for <Link to={"./main65fp"}>Floorplan</Link></li>
                                        <li>Additional details and photos here</li>
                                    </ul>
                                </div> )
                                }
                                { main61 === -1 && (
                                <div id="61emain">
                                    <h4>
                                        61 East Main Storefront.
                                    </h4>
                                    <ul>
                                        <li>700 sq/ft</li>
                                        <li>Cozy retail space</li>
                                        <li>New ADA approved restroom</li>
                                        <li>Storage closet</li>
                                        <li>Click for <Link to={"./main61fp"}>Floorplan</Link></li>
                                    </ul>
                                </div> )
                                }
                            </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Mainstreet