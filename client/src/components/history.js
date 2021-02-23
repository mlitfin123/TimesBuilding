import React from 'react';
import Nav from './nav';

const history = () => {
    return (
        <main>
            <div className="row">
                <div>
                    <Nav />
                </div>
                <div className="col">
            <div>
                <p className="history-content">               
                The Times Building was the home of the Time Printing Company which was founded in 1911 and became the Carroll County Times in 1956.  The Times Building has been renovated to maintain the historic charm while being a vibrant business location.<br></br><br></br>
                Read about the renovation in this Carroll County Times <a href="\accessories\timesarticle.pdf" target="_blank">article</a>.
                </p>
            </div>
            <div className="history-image-content">
                <table>
                    <tr>
                        <td><img className="history-images" src=".\images\AdditionalImages\Times_Building_1943_cropped (Small).jpg" alt="Times Building" width="500px"></img></td>
                        <td><p>A sketch of The Times Building from a 1943 calendar.</p></td>
                    </tr>
                    <tr>
                        <td><img className="history-images" src=".\images\AdditionalImages\Times Printing Company 1925 (Small).jpg" alt="Office Staff" width="500px"></img></td>
                        <td><p>The office staff of The Times Printing Co. posed in their old office at 63 E. Main St. Westminster, c. 1925.</p></td>
                    </tr>
                    <tr>
                        <td><img className="history-images" src=".\images\AdditionalImages\hallway.jpg" alt="Hallway" width="300px"></img></td>
                        <td><p>The old Times Printing Company office is now a bright and open hallway leading to 10,000 sq/ft of remodeled office space.  This entryway boasts original tin ceilings and tin walls added in the 1930's and uncovered during the recent renovation.</p></td>
                    </tr>
                </table>
            </div>
            </div>
            </div>
        </main>
    )
}

export default history