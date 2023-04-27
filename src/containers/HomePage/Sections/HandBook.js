import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';




class HandBook extends Component {

    render() {

        return (
            <div className='section-search section-handbook'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='section-title'>Cẩm nang</span>
                    <button className='section-btn'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
                            <span>Bệnh viện đa khoa Đông Đô</span>
                        </div>
                        <div className='section-customize'>
                            <div className='img-customize handbook'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
