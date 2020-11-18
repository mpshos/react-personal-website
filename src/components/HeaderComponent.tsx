import React from 'react';
import { Jumbotron } from 'reactstrap';

function Header() {

    return (
        <Jumbotron className="bg-primary text-white text-center">
            {/* TODO: Make this look better */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="display-3">Hello</h1>
                    </div>
                    <div className="col">
                        <img className="img" src="https://media.giphy.com/media/QLKSt3wQqlj7a/giphy.gif" alt="Imagine the Waving Forest Gump GIF"/>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
}

export default Header