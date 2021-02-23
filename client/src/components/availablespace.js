import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Nav from "./nav";

const Available = () => {
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
    let firstFloor = [offices[1], offices[2], offices[3]]
    let secondFloor = [offices[4], offices[5], offices[6], offices[7], offices[8], offices[9], offices[10], offices[11], offices[12], offices[13]];
    let basement = offices[0];
    let mainRetail = [offices[14], offices[15], offices[16]];

    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col">
            <div className="title">
                <h2>
                    Currently Available Space
                </h2>
                {(offices[0] + offices[1] + offices[2] + offices[3] + offices[4] + offices[5] + offices[6] + offices[7]) === 8 && (
                <h4 id="full-lease">
                    The Times Building is currently 100% leased. Inquire about future retail or office space availability by clicking <Link to={"./contact"}>HERE</Link>.
                </h4> )
                }
                {(offices[0] + offices[1] + offices[2] + offices[3] + offices[4] + offices[5] + offices[6] + offices[7]) < 8 && (
                <h4 id="available-leases">
                    The Times Building currently has retail or office space availability. View the available space by clicking the available links below. Inquire for further details by clicking <Link to={"./contact"}>HERE</Link>.
                <br></br>
                </h4> )
                }
                {(firstFloor[0] + firstFloor[1] + firstFloor[2]) !== 3 && (
                <h4 id="firstFloor" className="flooravailability">
                    There is current 1st Floor availability. Click <Link to={"./1stFloor"}>here</Link> to view more details.
                <br></br>
                </h4> )
                }
                {(secondFloor[0] + secondFloor[1] + secondFloor[2] + secondFloor[3] + secondFloor[4] + secondFloor[5] + secondFloor[6] + secondFloor[7] + secondFloor[8] + secondFloor[9]) !== 10 && (
                <h4 id="secondFloor" className="flooravailability">
                    There is current 2nd Floor availability. Click <Link to={"./2ndFloor"}>here</Link> to view more details.
                <br></br>
                </h4> )
                }
                { basement === -1 && (
                <h4 id="basement" className="flooravailability">
                    The Basement location is currently available for lease. Click <Link to={"./basement"}>here</Link> to view more details.
                <br></br>
                </h4> )
                }
                {(mainRetail[0] + mainRetail[1] + mainRetail[2]) !== 3 && (
                <h4 id="main" className="flooravailability">
                    There is current Main Street availability. Click <Link to={"./mainstreet"}>here</Link> to view more details.
                </h4> )
                }
            </div>
            <img className= "hallway" src=".\images\AdditionalImages\hallway.jpg" alt="Floorplan" height="650"></img>
            </div>
            </div>
        </main>
    )
}

export default Available