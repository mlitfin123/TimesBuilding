import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Nav from "./nav";

const Mainstreet = () => {
    const [space, setSpace] = useState([])

    useEffect(() => {
        fetchSpace()
    }, [])

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

    function getOffices(space) {
        var office = space.is_open;
        return office;
    }

    let offices = space.map(getOffices);
    let main61 = offices[14]
    let main61half = offices[15]
    let main65 = offices[16]

    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col-8">
                            <h2 className="title">
                            Main Street Retail
                            </h2>
                                <ul className="title-secondary">
                                    <li>Great center of town location</li>
                                    <li>Near city parking lots</li>
                                    <li>New facade and awning</li>
                                    <li>12,000 average daily traffic count</li>
                                </ul>
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
                                { main61half === -1 && (
                                <div id="61halfemain">
                                    <h4>
                                        61 1/2 East Main.
                                    </h4>
                                    <ul>
                                        <li>1700 sq/ft wine bar / restaurant space</li>
                                        <li>Full commercial kitchen, plenty of seating, bar and ADA compliant restrooms</li>
                                        <li>Tastefully decorated with historic charm</li>
                                    </ul>
                                </div> )
                                }
                            </div>
                    </div>
                    <img id="mainStFloorfp" src=".\images\1stFloor\1st floor map.jpg" alt="Floorplan" height="600"></img>
                </div>
        </main>
    )
}

export default Mainstreet