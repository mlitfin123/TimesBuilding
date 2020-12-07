import React from "react";
import Nav from "./nav";

const Suite101 = () => {
    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
            <div className="col-8">
                <h2 className="title-secondary">101 Floorplan</h2>
                <img className="title-secondary" src=".\images\suite101fp\suite101fp.jpg" alt="Floorplan"></img>
            </div>
            </div>
        </main>
    )
}
export default Suite101