import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const FirstFloor = () => {
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
    let suite101 = offices[1]
    let suite102 = offices[2]
    let suite103 = offices[3];

    return (
        <main>
            <img id="firstFloorfp" src=".\images\1stFloor\1st floor map.jpg" alt="Floorplan" height="600"></img>
            <section className="content">
                <section className="column">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>
                                1st Floor Executive Offices
                            </h1>
                                <ul>
                                    <li>Completely remodeled office</li>
                                    <li>Bright offices with large, new windows</li>
                                    <li>New Central HVAC</li>
                                    <li>Each office wired for high speed networking</li>
                                    <li>Premise monitored with video surveillance</li>
                                    <li>Building access electronically controlled</li>
                                </ul>
                        </div>
                            <div className="title-secondary">
                                <h3>
                                    Currently Available Space
                                </h3>
                                { suite101 === -1 && (
                                    <div>
                                        <h4 id="suite101">
                                            Suite 101.
                                        </h4>
                                        <ul>
                                            <li>800 sq/ft Office Suite</li>
                                            <li>3 offices plus reception area</li>
                                            <li>Private restroom</li>
                                            <li>Click for <Link to={"./suite101fp"}>Floorplan</Link></li>
                                            <li>Additional photos and details here</li>
                                        </ul>
                                </div>
                                )
                                
                                }
                                { suite102 === -1 && (
                                <h4 id="suite102">
                                    Suite 102 is currently available for lease. Check out the <Link to={"./suite102fp"}>Floorplan</Link>.
                                </h4> )
                                }
                                { suite103 === -1 && (
                                <h4 id="suite103">
                                    Suite 103 is currently available for lease. Check out the <Link to={"./suite103fp"}>Floorplan</Link>.
                                </h4> )
                                }
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default FirstFloor