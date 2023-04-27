import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';



class OutstandingDoctor extends Component {

    render() {

        return (
            <div className='section-search section-outstanding-doctor'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='section-title'>Bác sĩ nổi bật tuần qua</span>
                    <button className='section-btn'>Xem thêm</button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
                        </div>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
                        </div>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
                        </div>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
                        </div>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
                        </div>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
                        </div>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
                        </div>
                        <div className='section-customize section-customize-outstanding-doctor'>
                           <div className = 'outer-bg'>
                                 <div className='img-customize outstanding-doctor'></div>
                           </div>
                            <div className = 'position text-center'>
                                <div>Phó giáo sư tiến sĩ</div>
                                <div>Bùi Thị Nga</div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
