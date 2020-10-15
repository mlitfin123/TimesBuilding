import React from "react";
import { Link } from "react-router-dom";

const available = () => {
    return (
        <main>
            <div className="title">
                <h2>
                    Currently Available Space
                </h2>
                <h4>
                    The Times Building is currently 100% leased. Inquire about future retail or office space availability by clicking <Link to={"./contact"}>HERE</Link>.
                </h4>
            </div>
        </main>
    )
}

export default available