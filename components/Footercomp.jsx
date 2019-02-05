import React, { Component } from 'react';
import '../scss/Footercomp.scss';
class Footercomp extends Component {
    render() {
        let footerList = this.props.footerData;
        console.log("Footer Data", footerList);

        const footerDataList = footerList.map((data, index)=>{
            return(
                <div className="col-md-4" key={Math.random()}>
                    <h5>
                        {data.heading}
                    </h5>
                    <p className="subheading">
                        {data.subheading}
                    </p>
                    <p className="date">
                        {data.date}
                    </p>
                    <p>
                        {data.details}
                    </p>    
                </div>  
            );
        })
        return(
            <div className="footer-style">
                <div className="container row">
                    {footerDataList}
                </div>
            </div>
        );
    }
}

export default Footercomp;