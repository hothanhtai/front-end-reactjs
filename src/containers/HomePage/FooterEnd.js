import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';



class FooterEnd extends Component {

    render() {

        return (
           <div className='section-search footer-end'>
               <div className='container'>
                    <div className='row'>
                        <div className='col-md-4' style={{color:'white'}}>© 2023 ThanhTai.</div>
                        <div className='col-md-8 social'>
                            <a href="#">
                                <img src="https://bookingcare.vn/themes/app1912/assets/img/social/facebook-square.svg" alt="" />
                            </a>
                            <a href="#">
                                <img src="https://bookingcare.vn/themes/app1912/assets/img/social/youtube-square.svg" alt="" />
                            </a>
                        </div>
                    </div>
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterEnd);
