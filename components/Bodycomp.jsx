import React, { Component } from 'react';
import '../scss/Bodycomp.scss';

/* Components */
import Cardscomp from './Cardscomp';


class Bodycomp extends Component {
    render() {
        console.log("Now props: ", this.props);
        return (
            <div>
                <div className="body-style">
                    <p className="heading">
                        What We Do
                </p>
                    
                </div>
                <Cardscomp cardData = {this.props}/>
            </div>

        );
    }
}

export default Bodycomp;