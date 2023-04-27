import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import flagvn from '../../assets/vn.png'
import flagen from '../../assets/eng.png'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {
    
    changeLanguage = (language) => {
       this.props.changeLanguageAppRedux(language)

    }
    render() {
        let language = this.props.lang;
       
        
        return (
            <React.Fragment>
               
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i style={{fontSize: '27px',color:'grey',cursor:'pointer',paddingRight:'10px'}} className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div className='title-content'><b><FormattedMessage id="home-header.speciality" /></b></div>
                                <div className='text'><FormattedMessage id="home-header.searchdoctor"/></div>
                            </div>
                            <div className='child-content'>
                                <div className='title-content'><b><FormattedMessage id="home-header.health-facility" /></b></div>
                                <div className='text'><FormattedMessage id="home-header.choose-hospital" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='title-content'><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className='text'><FormattedMessage id="home-header.gooddoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div className='title-content'><b><FormattedMessage id="home-header.checkup-package" /></b></div>
                                <div className='text'><FormattedMessage id="home-header.general-check" /></div>
                            </div>
                            
                        </div>
                        <div className='right-content'>
                            <div className='support-content'> 
                                <span className='icon-question'><i className="fas fa-question"></i></span> 
                                <FormattedMessage id="home-header.support" />
                            </div>
                            <div className='language'>
                                <div className={language === LANGUAGES.VI ? 'flag-vn active' : 'flag-vn' }><img onClick={() => this.changeLanguage(LANGUAGES.VI)} style={{backgroundSize:'cover'}} src={flagvn} alt="" /></div>
                                <div className={language === LANGUAGES.EN ? 'flag-en active' : 'flag-en' }><img onClick={() => this.changeLanguage(LANGUAGES.EN)} style={{width: '29px'}} src={flagen} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='home-header-banner'>
                   
                        <div className='layout'>
                        <div className='title1'><FormattedMessage id="home-header.medical-background" /></div>
                        <div className='title2'><b><FormattedMessage id="home-header.comprehensive-care" /></b></div>
                        <div className='search'>
                            <i style={{fontSize: '23px',color:'black',cursor:'pointer'}} className="fab fa-searchengin"></i>
                            <input type="text" placeholder="Tìm kiếm"/>
                        </div>
                        <div className='app-download'>
                            <a href=""><img src="https://bookingcare.vn/assets/icon/google-play-badge.svg" alt="" /></a>
                            <a href=""><img src="https://bookingcare.vn/assets/icon/app-store-badge-black.svg" alt="" /></a>
                        </div>
                        </div>
                        <div className='options'>
                            <ul>
                                <li>
                                    <a>
                                        <div class="img-chuyenkhoa"></div> 
                                        <FormattedMessage id="home-header.examination" /><br/><FormattedMessage id="home-header.specialist" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-tuxa"></div> 
                                        <FormattedMessage id="home-header.examination" /><br/><FormattedMessage id="home-header.remote-examination" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-tongquat"></div> 
                                        <FormattedMessage id="home-header.examination" /><br/><FormattedMessage id="home-header.general" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-yhoc"></div> 
                                        <FormattedMessage id="home-header.analysis" /><br/><FormattedMessage id="home-header.medicine" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-tinhthan"></div> 
                                        <FormattedMessage id="home-header.health" /><br/><FormattedMessage id="home-header.spirit" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-nhakhoa"></div> 
                                        <FormattedMessage id="home-header.examination" /><br/><FormattedMessage id="home-header.dentistry" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-phauthuat"></div> 
                                        <FormattedMessage id="home-header.package" /><br/><FormattedMessage id="home-header.surgery" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-spyte"></div> 
                                        <FormattedMessage id="home-header.product" /><br/><FormattedMessage id="home-header.medical" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <div class="img-testsk"></div> 
                                        <FormattedMessage id="home-header.test" /><br/><FormattedMessage id="home-header.health" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo : state.user.userInfo,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux : (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
