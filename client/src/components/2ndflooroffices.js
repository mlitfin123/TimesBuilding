import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Nav from "./nav";

const SecondFloor = () => {

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
    let suite201 = offices[4]
    let suite202 = offices[5]
    let suite203 = offices[6]
    let suite205 = offices[7]
    let suite206 = offices[8]
    let suite206a = offices[9]
    let suite206b = offices[10]
    let suite207 = offices[11]
    let suite208 = offices[12]
    let suite209 = offices[13]

    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col-8">
                            <h2 className="title">
                                2nd Floor Offices
                            </h2>
                            <ul className="title-secondary">
                                    <li>Economical office space in the center of town</li>
                                    <li>Common men's and women's restroom maintained by landlord</li>
                                    <li>Premise monitored with video surveillance</li>
                                    <li>Building access electronically controlled</li>
                                </ul>
                        <div className="title-secondary">
                                <h3>
                                    Currently Available Space
                                </h3>
                                { suite201 === -1 && (
                                <div>
                                <h4 id="suite201">
                                    Suite 201
                                </h4> 
                                    <ul>
                                        <li>300 sq/ft Office</li>
                                        <li>Office with small waiting room area</li>
                                        <li>Large window overlooking Main Street</li>
                                    </ul>
                                    </div>
                                    )
                                }
                                { suite202 === -1 && (
                                <div>
                                <h4 id="suite202">
                                    Suite 202
                                </h4> 
                                    <ul>
                                        <li>400 sq/ft Office</li>
                                        <li>Oversized office space with open floorplan</li>
                                        <li>(2) Large windows overlooking Main Street</li>
                                        <li>Click for <Link to={"./suite202fp"}>Floorplan</Link></li>
                                    </ul>
                                    </div>
                                    )
                                }
                                { suite203 === -1 && (
                                <div>
                                <h4 id="suite203">
                                    Suite 203/204
                                </h4> 
                                    <ul>
                                        <li>800 sq/ft Office Suite</li>
                                        <li>(4) separate offices configured together into a single suite</li>
                                        <li>(4) Large windows overlooking Main Street</li>
                                        <li>Click for <Link to={"./suite203fp"}>Floorplan</Link></li>
                                    </ul>
                                    </div>
                                    )
                                }
                                { suite205 === -1 && (
                                <div>
                                <h4 id="suite205">
                                    Suite 205
                                </h4> 
                                    <ul>
                                        <li>1000 sq/ft Office Suite</li>
                                        <li>Extra Large Work Area with (2) separate offices and storage area</li>
                                        <li>Bright space with lots of light and room to work</li>
                                        </ul>
                                    </div>
                                    )
                                }
                                { suite206 === -1 && (
                                <div>
                                <h4 id="suite206">
                                    Suite 206
                                </h4> 
                                    <ul>
                                        <li>1000 sq/ft Office Suite</li>
                                        <li>(4) separate offices configured together into a single suite</li>
                                        <li>(1) Nicely configured with 4 separate work areas and storage</li>
                                        <li>Click for <Link to={"./suite206fp"}>Floorplan</Link></li>
                                    </ul>
                                    </div>
                                    )
                                }
                                { suite206a === -1 && (
                                <div>
                                <h4 id="suite206a">
                                    Suite 206A
                                </h4> 
                                    <ul>
                                        <li>520 sq/ft Office Suite</li>
                                        <li>(2) separate offices configured together into a single suite</li>
                                        <li>(1) Very large open work area along with small office area</li>
                                        <li>Click for <Link to={"./suite206afp"}>Floorplan</Link></li>
                                    </ul>
                                    </div>
                                    )
                                }
                                { suite206b === -1 && (
                                <div>
                                <h4 id="suite206b">
                                    Suite 206B
                                </h4> 
                                    <ul>
                                        <li>480 sq/ft Office Suite</li>
                                        <li>(2) separate offices configured together into a single suite</li>
                                        <li>2nd office is an ideal conference room</li>
                                        <li>Click for <Link to={"./suite206bfp"}>Floorplan</Link></li>
                                    </ul>
                                    </div>
                                    )
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
                                { suite208 === -1 && (
                                <div>
                                <h4 id="suite208">
                                    Suite 208
                                </h4> 
                                    <ul>
                                        <li>400 sq/ft Office Suite</li>
                                        <li>(2) separate offices configured together into a single suite</li>
                                        <li>(2) Large windows overlooking Main Street</li>
                                        <li>Click for <Link to={"./suite208fp"}>Floorplan</Link></li>
                                    </ul>
                                    </div>
                                    )
                                }
                                { suite209 === -1 && (
                                <div>
                                <h4 id="suite209">
                                    Suite 209
                                </h4> 
                                    <ul>
                                        <li>400 sq/ft Office</li>
                                        <li>Oversized office space with open floorplan</li>
                                        <li>(2) Large windows overlooking Main Street</li>
                                    </ul>
                                    </div>
                                    )
                                }
                        </div>
                    </div>
                        <img id="secondFloorfp" src=".\images\2ndFloor\2nd floor map.jpg" alt="Floorplan" height="400"></img>
                </div>
        </main>
    )
}

export default SecondFloor