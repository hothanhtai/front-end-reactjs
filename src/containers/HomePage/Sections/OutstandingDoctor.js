import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils';
import { FormattedMessage } from 'react-intl';




class OutstandingDoctor extends Component {

    constructor(props){
        super(props)
        this.state = {
            arrDoctors : []
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.topDoctorsRedux !== this.props.topDoctorsRedux){
            this.setState({
                arrDoctors : this.props.topDoctorsRedux 
            })
        }
    }

    componentDidMount() {
        this.props.loadTopDoctors()
    }

    render() {
        let allDoctors = this.state.arrDoctors;
        let {language} = this.props;
        return (
            <div className='section-search section-outstanding-doctor'>
            <div className='section-container'>
                <div className='section-header'>
                    <span className='section-title'><FormattedMessage id= "home-header.doctor-outstanding"/></span>
                    <button className='section-btn'><FormattedMessage id= "home-header.see-more"/></button>
                </div>
                <div className='section-body'>
                    <Slider {...this.props.settings}>
                       
                        {allDoctors && allDoctors.length > 0 && 
                            allDoctors.map((item, index) => {
                                let imageBase64 = '';
                                if(item.image){
                                    imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                }
                                let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                                let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                                return (
                                    <div className='section-customize section-customize-outstanding-doctor'>
                                    <div className = 'outer-bg'>
                                          <div className='img-customize outstanding-doctor'
                                          style={{backgroundImage: `url(${imageBase64})`}}
                                          ></div>
                                    </div>
                                     <div className = 'position text-center'>
                                         <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                         <div>Bùi Thị Nga</div>
                                     </div>
                                 </div>
                                )
                            })
                        }
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
        topDoctorsRedux : state.admin.topDoctors,
        language : state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors : () => dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
