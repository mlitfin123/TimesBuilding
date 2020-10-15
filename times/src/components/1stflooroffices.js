import React from "react";
import { Link } from "react-router-dom";

const firstFloor = () => {
    return (
        <main>
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
                                <h4 id="suite101">
                                    Suite 101 is currently available for lease. Please inquire for this space by clicking <Link to={"./contact"}>HERE</Link>.
                                </h4>
                                <h4 id="suite102">
                                    Suite 102 is currently available for lease. Please inquire for this space by clicking <Link to={"./contact"}>HERE</Link>.
                                </h4>
                                <h4 id="suite103">
                                    Suite 103 is currently available for lease. Please inquire for this space by clicking <Link to={"./contact"}>HERE</Link>.
                                </h4>
                            </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default firstFloor