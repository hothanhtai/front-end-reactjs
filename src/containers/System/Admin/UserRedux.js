import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
import './UserRedux.scss'
import image from '../../../assets/images/giphy.gif'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr : [],
            positionArr : [],
            roleArr : [],
            previewImageUrl : '',
            isOpen : false,
        }
    }

    async componentDidMount() {

        this.props.getGenderStart();

        this.props.getPositionStart();

        this.props.getRoleStart();

        // try {
        //    let res = await getAllCodeService("gender") 
        //    if(res && res.data.errCode === 0){
        //     this.setState({
        //         genderArr : res.data.data
        //     })
            
        //    }
        //    console.log("check type ", res.data.data)   
        // } catch (e) {
        //     console.log(e)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.genderRedux !== this.props.genderRedux){
            this.setState({
                genderArr : this.props.genderRedux
            })
        }
        if(prevProps.roleRedux !== this.props.roleRedux){
            this.setState({
                roleArr : this.props.roleRedux
            })
        }
        if(prevProps.positionRedux !== this.props.positionRedux){
            this.setState({
                positionArr : this.props.positionRedux
            })
        }
    }

    handleOnChangeImage = (e) =>{
        let data = e.target.files;
        let file = data[0];
        if(file) {
            //tạo đường link url để review hình ảnh vừa upload
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImageUrl : objectUrl
            })
        }
    }

    openReviewImage = () => {
        if(!this.state.previewImageUrl){
            return;
        }
        this.setState({
            isOpen :true
        })
    }

    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        return (
            <div className="user-redux-container" >
                <div className='title'><FormattedMessage id="manage-user.title"/></div>
                <div className='user-redux-body'>
                    <div className='container align-center'>
                       
                        <div style={{fontSize: "20px", fontWeight:"bold"}} className='col-md-12 my-3'><FormattedMessage id= "manage-user.add"/></div>
                        <form>
                            <div className="row">
                                <div className='col-md-12'>{isLoadingGender ?
                                <div>
                                    <img style={{width:50}} src={image}/> 
                                    <span>Loading...</span>
                                </div>
                                  :''}</div>
                                <div className="col-md-3">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" name='email' id='inputEmail4' placeholder="Email" />
                                </div>
                                <div className="col-md-3">
                                    <label for="inputPassword4"><FormattedMessage id = "manage-user.password"/></label>
                                    <input type="password" className="form-control" name='password' id='inputPassword4' placeholder="Password" />
                                </div>
                                <div className="col-md-3">
                                    <label for="firstName4"><FormattedMessage id = "manage-user.firstname"/></label>
                                    <input type="text" className="form-control" name='firstName' id='firstName4' placeholder="First Name" />
                                </div>
                                <div className="col-md-3">
                                    <label for="lastName4"><FormattedMessage id = "manage-user.lastname"/></label>
                                    <input type="text" className="form-control" name='lastName' id='lastName4' placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label for="phoneNumber"><FormattedMessage id = "manage-user.phone"/></label>
                                    <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-9">
                                <label for="address"><FormattedMessage id = "manage-user.address"/></label>
                                <input type="text" className="form-control" id="address" placeholder="Address" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label for="gender"><FormattedMessage id = "manage-user.gender"/></label>
                                    <select className="form-control">
                                        {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return(
                                                <option key={index}>{language === LANGUAGES.VI? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        }
                                        
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="gender"><FormattedMessage id = "manage-user.position"/></label>
                                    <select className="form-control">
                                        {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return(
                                                <option key={index}>{language === LANGUAGES.VI? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        }
                                        
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="roleid"><FormattedMessage id = "manage-user.role"/></label>
                                    <select className="form-control">
                                       {roles && roles.length >0 &&
                                        roles.map((item,index) => {
                                            return (
                                                <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        
                                       }
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="image"><FormattedMessage id = "manage-user.image"/></label>
                                    <div className='review-img-container'>
                                        <input 
                                        type="file" 
                                        hidden 
                                        className="form-control" 
                                        id="image"
                                        onChange={(e) => this.handleOnChangeImage(e)}
                                        />
                                        <label className='lable-upload' htmlFor='image'>Tải ảnh <i className='fas fa-upload'></i></label>
                                        <div 
                                        className='preview-image'
                                        style={{backgroundImage: `url(${this.state.previewImageUrl})`}}
                                        onClick={() => this.openReviewImage()}
                                        >
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                           
                           <div className='col-md-12 mt-3'>
                                <button type="submit" className="btn btn-success p-md-1 text-md-center"><FormattedMessage id = "manage-user.save"/></button>   
                           </div>
                        </form>
                        
                    </div>
                </div>
                {this.state.isOpen === true && 
                    <Lightbox
                        mainSrc={this.state.previewImageUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux : state.admin.genders,
        isLoadingGender : state.admin.isLoadingGender,
        roleRedux : state.admin.roles,
        positionRedux : state.admin.positions,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart : () => dispatch(actions.fetchGenderStart()),

        getPositionStart : () => dispatch(actions.fetchPositionStart()),

        getRoleStart : () => dispatch(actions.fetchRoleStart()),
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux : (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
