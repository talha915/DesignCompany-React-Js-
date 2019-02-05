import React, { Component } from 'react';
import '../index.scss';
import '../scss/Header.scss';
import { Input, InputGroup, Button, InputGroupAddon } from 'reactstrap';
class Header extends Component {
    render() {
        return (
            <div className="header-style">
                <div className="container row">
                    <div className="col-md-8">
                        <p className="heading">
                            Design Company
                        </p>
                        <p className="subheading">
                            Company Slogan Goes Here
                        </p>
                    </div>
                    
                    <div className="col-md-4">
                        <InputGroup className="searchbar">
                            <Input />
                            <InputGroupAddon addonType="append"><Button color="primary">Search</Button></InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;