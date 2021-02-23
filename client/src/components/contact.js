import React from "react";
import Nav from "./nav";

const contact = () => {
    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col">
                    <div className="title">
                        <h4>
                            Take advantage of all this incredible downtown property has to offer.<br></br>
                            Contact us today!
                        </h4>
                        <form className="contactForm">
                            <div className="contact-content">Email: <a href="mailto:aquinopropertiesllc@gmail.com?subject=The Times Building">Aquino Properties</a><br></br></div>
                            <div className="contact-content">or call<br></br></div>
                            <div className="contact-content">410-871-4567 (OFFICE)</div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default contact