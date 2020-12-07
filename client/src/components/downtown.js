import React from "react";
import Nav from "./nav";

const downtown = () => {
    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col">
                    <div className="title">
                <h4>
                    Downtown Westminster Activities
                </h4>
            </div>
            <div>
                <p className="downtown-title">
                The Times Building gives you a front row seat to lots of fun activities that bring shoppers and tourists into the heart of historic Westminster.  Activities include:
                </p>
                <p className="downtown-content">
                    <u>Main Street Mile Race &amp; Fun Run-</u> Draws over 700 runners along with lots of family and firends for a healthy way to encourage downtown tourism.<br></br><br></br>
                    <u>Flower &amp; Jazz Festival-</u> Colorful and vibrant springtime event with flowers, jazz brings lots of shoppers and over 120 gift and food vendors lining Main Street occurs directly in front of The Times Building.<br></br><br></br>
                    <u>Annual Memorial Day Parade-</u> Westminster celebrated their 141st annual parade passing directly in front of The Times Building.<br></br><br></br>
                    <u>Antique Fire Equipment Parade-</u> An annual antique fire equipment parade down cruises through Main Street to the Carroll County Farm Museum and brings lots of shoppers downtown in the late spring.<br></br><br></br>
                    <u>Westminster FallFest-</u> FallFest Parade &amp; Mile Run, Downtown carnival, crafts:  Shoppers and retail alike look forward to a fun filled fall weekend.<br></br><br></br>
                    <u>Downtown Halloween Parade-</u> Community event sponsored by American Post 31 featuring over 100 participants marching down Main Street directly in front of the The Times Building.<br></br><br></br>
                    <u>Midnight Madness-</u> Late night shopping, a custom car show &amp; live music attracts shoppers and diners for a late night.<br></br><br></br>
                </p>
            </div>
            <div className="downtown-images">
                <img src=".\images\AdditionalImages\MD-Westminster_-_Memorial_Day_Parade_ (Small).JPG" alt="Parade"></img>
                <p>Main Street Memorial Day Parade</p>
                <img src=".\images\AdditionalImages\Flower_&amp;_Jazz_Festival_In_Front_of_Times_bldg_2008_(314)[1] (Small).jpg" alt="Festival"></img>
                <p>Main Street Flower and Jazz Festival</p>
            </div>
            </div>
            </div>
        </main>
    )
}

export default downtown