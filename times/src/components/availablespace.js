import React from "react";
import { Link } from "react-router-dom";

const available = () => {
    return (
        <main>
            <div className="title">
                <h2>
                    Currently Available Space
                </h2>
                <h4 id="full-lease">
                    The Times Building is currently 100% leased. Inquire about future retail or office space availability by clicking <Link to={"./contact"}>HERE</Link>.
                </h4>
                <h4 id="available-leases">
                    The Times Building currently has retail or office space availability. View the available space by clicking the available links below. Inquire for further details by clicking <Link to={"./contact"}>HERE</Link>.
                </h4>
                <h4 id="1stFloor">
                    There is current 1st floor availability. Click <Link to={"./1stFloor"}>here</Link> to view more details.
                </h4>
                <h4 id="2ndFloor">
                    There is current 2nd floor availability. Click <Link to={"./2ndFloor"}>here</Link> to view more details.
                </h4>
                <h4 id="basement">
                    The basement location is currently available for lease. Click <Link to={"./basement"}>here</Link> to view more details.
                </h4>
                <h4 id="main">
                    There is current Main Street availability. Click <Link to={"./mainstreet"}>here</Link> to view more details.
                </h4>
            </div>
        </main>
    )
}

export default available