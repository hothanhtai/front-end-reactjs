import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from 'react-slick';



class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-search section-medical-facility'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='section-title'>Cơ sở y tế nổi bật</span>
                    <button className='section-btn'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize medical-facility'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
