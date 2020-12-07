import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Nav from "./nav";

const Basement = () => {
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
    let basement = offices[0]

    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col-8">
                <div className="title-secondary">
                    <h2 className="title-secondary">
                        Currently Available Space 
                    </h2>
                        { basement === -1 && (
                            <div>
                                <h3>
                                    63 East Main Lower Level Office / Storage
                                </h3>
                                <ul>
                                    <li>1,400 sq/ft</li>
                                    <li>Easy access from street (Winters Lane)</li>
                                    <li>Large open space</li>
                                    <li>Additional backroom storage area</li>
                                    <li>Private restroom</li>
                                    <li>Click for <Link to={"./basementfp"}>Floorplan</Link></li>
                                    <li>Additional photos and details here</li>
                                </ul>
                            </div> )
                            }
                    </div>
                    </div>
                    </div>
                    </main>
    )
}

export default Basement