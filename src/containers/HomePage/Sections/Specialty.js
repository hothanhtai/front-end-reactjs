import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
// Import css files
import Slider from 'react-slick';


class Specialty extends Component {
    
    render() {
        
     
        
        return (
           
            <div className='section-search section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='section-title'>Chuyên khoa phổ biến</span>
                        <button className='section-btn'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                            <div className='section-customize'>
                                <div className='img-customize specialty'></div>
                                <span>Cơ xương khớp</span>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
