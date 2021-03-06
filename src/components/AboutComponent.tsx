import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <h2>About Me</h2>
                        </div>
                        <div className="col-2 align-self-center">
                            <h5><i className="fas fa-file-download fa-lg"></i> <a href="assets/docs/shostrand_resume.pdf">Resume</a></h5>
                        </div>
                    </div>
                    <hr className="mt-1" />
                    <p>My name is Mike Shostrand. I'm a software engineer currently looking for a challenging opportunity in the Denver area! I have spent most of my professional at Garmin working on an embedded system as a UI developer. I dive into that in depth in the <a href="#experience">Experience</a> Section</p>

                    <p>Lately, I have become more fascinated with web technologies. I've been doing some React development and am taking more classes related to these topics. I hope to find a place where to work when I can quickly expand my knowledge of scaling techniques and web technologies and make a difference quickly.</p>
                </div>
            </div>
        </div>
    );
}

export default About;