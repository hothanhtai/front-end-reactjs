import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Sections/Specialty.js';
import MedicalFacility from './Sections/MedicalFacility';
import OutstandingDoctor from './Sections/OutstandingDoctor';
import HandBook from './Sections/HandBook';
import About from './Sections/About';
import HomeFooter from './HomeFooter';
import FooterEnd from './FooterEnd';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
          };

        return (
            <div>
                <HomeHeader/>
                <Specialty settings = {settings}/>
                <MedicalFacility settings = {settings}/>
                <OutstandingDoctor settings = {settings}/>
                <HandBook settings = {settings}/>
                <About/>
                <HomeFooter/>
                <FooterEnd/>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
