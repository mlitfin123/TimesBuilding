import React from "react";
import Nav from "./nav";

const home = () => {
    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col">
                        <div className="title">
                            <img className="homeIMG" src=".\images\AdditionalImages\storefront.jpg" alt="Main Street" width="300"></img>
                        </div>
                    </div>
                <div className="col">
                    <div className="title">
                        <h2 className="homeTitle">Looking to grow?</h2>
                        <h2 className="homeTitle">Put your business in the heart of historic downtown Westminster, MD!</h2>
                        <img className="homeIMG" src=".\images\AdditionalImages\buildingfront2.jpg" alt="Building Front" width="450"></img>
                    </div>
                    <div className="title-secondary">
                        <h3>The Times Building Offers You:</h3>
                            <ul>
                                <li>Prime location on vibrant East Main St</li>
                                <li>Over 17,000 sf Office and Retail space</li>
                                <li>Convenient location next to Longwell Parking Garage</li>
                                <li>Access from Main Street or Winters Lane</li>
                                <li>Historic charm sure to impress your clients</li>
                                <li>Recent renovations include:
                                    <ul>
                                        <li>Stunning open entryway</li>
                                        <li>Restored tin ceilings and walls</li>
                                        <li>Facade restored to the original architecture</li>
                                        <li>New awnings</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            <img className="homeIMG" src=".\images\AdditionalImages\winter.jpg" alt="Winter" width="300"></img>
                        </div>
                    </div>
                </div>
        </main>
    )
}

export default home