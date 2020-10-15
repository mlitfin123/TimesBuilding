import React from "react";
import { Link } from "react-router-dom";

const secondFloor = () => {
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
                                <h4 id="suite203">
                                    Suite 203 is currently available for lease. Please inquire for this space by clicking <Link to={"./contact"}>HERE</Link>.
                                </h4>
                                <h4 id="suite207">
                                    Suite 207 is currently available for lease. Please inquire for this space by clicking <Link to={"./contact"}>HERE</Link>.
                                </h4>
                            </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default secondFloor