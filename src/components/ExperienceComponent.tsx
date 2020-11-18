import React from 'react';
import { Card, CardBody, CardImg, CardText, CardHeader } from 'reactstrap';

/** /
*   
*
*
*/
function Experience() {
    return (
        <div className="container" id="experience">
            <div className="row">
                <div className="col-12">
                    <h2>Experience</h2>
                    <hr />
                </div>
            </div>

            {/* Garmin Section */}
            <div className="row">
                <div className="col-12">
                    <h4>Garmin</h4>
                </div>
                <div className="col-12 mb-3">
                    <img src="assets/images/garmin_avionics.jpg" className="img-fluid img-thumbnail" alt="Garmin Integrated Flight Deck" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5>Description</h5>
                    <p>I worked at Garmin for a total of about 5 and a half years including my summer internship before my full time position. Aviation electronics (avionics) is the segment that I was involved with. My team was one of the many that made up the Aviation Displays UI group. We were tasked with creating the UI that was presented to the pilot.</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <h5>Major Contributions</h5>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Card className="h-100">
                            <CardImg top width="100%" src="assets/images/p300.jpg" alt="Embraer Phenom 300" />
                            <CardHeader className="bg-primary text-white">Embraer Phenom Airframe Lead</CardHeader>
                            <CardBody>
                                <CardText>The airframe lead is the primary point of contact in the software world for a particular client. I was the lead for the Embraer Phenom line of executive jets for several years. Embraer is one of the top aviation companies, and an important partner for Garmin. My responsibilities included:</CardText>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Discussing new features with client engineering teams to determine requirements.</li>
                                    <li className="list-group-item">Maintaining and improving the parts of the UI that were custom to Embraer.</li>
                                    <li className="list-group-item">Determine content and delivery schedule for development phases.</li>
                                    <li className="list-group-item">Coordinating with internal software teams schedule fixes.</li>
                                    <li className="list-group-item">Debugging issues reported by Embraer</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className="h-100">
                            <CardImg top width="100%" src="assets/images/experience_jsx.jpg" alt="Markup" />
                            <CardHeader className="bg-primary text-white">Embedded Web Browser</CardHeader>
                            <CardBody>
                                <CardText>The Garmin display computer had a somewhat simplified "web" browser that was used to render low criticality pages. This made updating these pages much easier as it was a change to HTML, Javascript, or CSS files instead of the embedded software.</CardText>
                                <CardText>My responsibility was maintiaining and improving this browser. This required a deep dive on how browsers worked in general, which was fascinating. The embedded environment was very resource constrained, especially memory, so we had to come up with some creative workarounds for our limitations. </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5>Takeaway</h5>
                    <p>Garmin was my first full time position after graduating, and I'm grateful for my time there. I learned a ton very quickly, which is invaluable. We had strict code standards, so I learned to write cleaner code immediately. I came to understand fully the importance of communication, and my communication skills grew immensely. Overall, it was a tremendous experience for me.</p>
                </div>
            </div>

            {/* Intelispend Section */}
            <div className="row">
                <div className="col-12">
                    <h4>Intelispend Prepaid Solutions</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5>Description</h5>
                    <p>Intelispend was my introduction to the working world as it was my first internship. Intelispend specialized in providing prepaid credit cards that would be offered as part of a company incentive programs. While I was there it was under the umbrella of Maritz. However, it looks like it was acquired by another company shortly after I left. My time there was short, but it was a great learning experience</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h5>Major Contributions</h5>
                </div>
                <div className="col-12">
                    <p>Most of my time at Intelispend was spend testing the customer facing website. We used Watir to test the site which is a Ruby test framework built on top of Selenium.</p>
                    <p>In addition to the testing, I worked on adding a support page that allowed internal support people to execute common procedures. This was an interesting project, and involved creating a simple UI and some stored procedures corresponding to the maintenance tasks.</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;