import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';



class About extends Component {

    render() {

        return (
            <div className='section-search section-about'>
               <div className='container'>
                    <div className='row'>
                            <div className='col-md-12' style={{fontSize:'24px', fontWeight:'bold', paddingLeft:'15px'}}>
                                Truyền thông nói gì về BookingCare
                            </div>
                        </div>
               </div>
                <div className='row'>
                    <div className='col-md-6' style={{textAlign:'right', padding:'10px'}}>
                        <iframe 
                            width="80%" 
                            height="350px" 
                            src="https://www.youtube.com/embed/7tiR7SI4CkI" 
                            title="BookingCare trên VTV1 ngày 21/02/2018 - Chương trình Cà phê khởi nghiệp" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className='col-md-6 social-channel'>
                        <ul>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <div className='img-social-channel'></div>
                                </a>
                            </li>
                            
                        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
