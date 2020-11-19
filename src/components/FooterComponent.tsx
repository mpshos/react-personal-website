import React from 'react';

function Footer() {
    return (
        <div className="bg-secondary footer">
            <div className="container text-white">
                <div className="row justify-content-between pt-3">
                    <div className="col-8">
                        <i className="fa fa-envelope-o fa-lg"></i> : <a className="text-white" href="mailto:michael.shostrand@gmail.com">
                        michael.shostrand@gmail.com</a>
                    </div>
                    <div className="col-2">
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/michael-shostrand"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>&copy; Copyright 2020 Michael Shostrand</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;