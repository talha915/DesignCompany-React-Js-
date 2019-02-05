import React, { Component } from 'react';

/* Components */
import Header from './Header';
import Navbarmenu from './Navbarmenu';
import Bodycomp from './Bodycomp';
import Footercomp from './Footercomp';


/* Configurations */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from '../actions/user_actions';


class Main extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }


    render() {
        console.log("Props again", this.props);
        return (
            <div>
                <header >
                    <Header />
                    <Navbarmenu />
                </header>
                <section>
                    <Bodycomp data={this.props}/>
                    <Footercomp footerData={this.props.dataReducer}/>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        users: state.users,
        dataReducer: state.dataReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        getAllUsers: bindActionCreators(getAllUsers, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
