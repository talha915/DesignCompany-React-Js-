import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../scss/Cardcomp.scss';

class Cardscomp extends Component {
    render() {
        let users = this.props.cardData.data.users;
        console.log("Card Data", users);
        const usersList = users.map((data) => {
            return (
                <div className="col-md-4" key={Math.random()}>
                    <Card >
                        <CardBody>
                            <CardTitle><b>{data.name}</b></CardTitle>
                            <CardSubtitle>{data.username}</CardSubtitle>
                            <CardText>Phone: {data.phone}</CardText>
                            <CardText>Email: {data.email}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        })
        return (
            <div className="cards-style">
                <div className="container row">
                    {usersList}
                </div>
            </div>
        );
    }
}
export default Cardscomp;