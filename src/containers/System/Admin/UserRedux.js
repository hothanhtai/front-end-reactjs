import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
import './UserRedux.scss'
import image from '../../../assets/images/giphy.gif'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr : [],
            positionArr : [],
            roleArr : [],
            previewImageUrl : '',
            isOpen : false,

            

            email : '',
            password : '',
            firstName : '',
            lastName : '',
            phone : '',
            address : '',
            gender : '',
            position : '',
            role : '',
            avatar : '',
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
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr : arrGenders,
                gender : arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if(prevProps.roleRedux !== this.props.roleRedux){
            let arrRoles = this.props.roleRedux
            this.setState({
                roleArr : arrRoles,
                role : arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }

        if(prevProps.positionRedux !== this.props.positionRedux){
            let arrPositions = this.props.positionRedux
            this.setState({
                positionArr : arrPositions,
                position : arrPositions && arrPositions.length > 0 ? arrPositions[0].key : ''
            })
        }

        if(prevProps.listUsers !== this.props.listUsers){
            this.setState({
                email : '',
                password : '',
                firstName : '',
                lastName : '',
                phone : '',
                address : '',
                gender : '',
                position : '',
                role : '',
                avatar : '',
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
                previewImageUrl : objectUrl,
                avatar : file,
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

    handleSaveUser = () => {

        let isValid = this.checkValidateInput();
        if(isValid === false) {
            return;
        }

        

        //fire redux action
        this.props.createNewUser({
            email: this.state.email ,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber : this.state.phone,
            gender : this.state.gender,
            roleId : this.state.role,
            positionId : this.state.position,
        })

        this.props.fetchUsersRudux();
    }

    checkValidateInput = () => {
        let isValid =  true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phone', 'address']
        for(let i = 0 ; i < arrCheck.length ; i++){
            if(!this.state[arrCheck[i]]){
                isValid = false;
                alert('This input is required : ' +  arrCheck[i])
                break;
            }
        }
        return isValid;
    }

    onChangeInput = (event, id) => {

        let copyState = {...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
            
    }

    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;

        // let email = this.state.email;
        let { email, password, firstName, lastName, phone, address, gender, position, role, avatar } = this.state;
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
                                    <label for="email">Email</label>
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    name='email' 
                                    id='email' 
                                    value={email}
                                    onChange={(event) => {this.onChangeInput(event, 'email')}}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label for="password"><FormattedMessage id = "manage-user.password"/></label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    name='password' 
                                    id='password' 
                                    value={password}
                                    onChange={(event) => {this.onChangeInput(event, 'password')}}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label for="firstName"><FormattedMessage id = "manage-user.firstname"/></label>
                                    <input t
                                    ype="text" 
                                    className="form-control" 
                                    name='firstName' 
                                    id='firstName' 
                                    value={firstName}
                                    onChange={(event) => {this.onChangeInput(event, 'firstName')}}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label for="lastName"><FormattedMessage id = "manage-user.lastname"/></label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name='lastName' 
                                    id='lastName' 
                                    value={lastName}
                                    onChange={(event) => {this.onChangeInput(event, 'lastName')}}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label for="phoneNumber"><FormattedMessage id = "manage-user.phone"/></label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="phoneNumber" 
                                    value={phone}
                                    onChange={(event) => {this.onChangeInput(event, 'phone')}}
                                    />
                                </div>
                                <div className="col-md-9">
                                <label for="address"><FormattedMessage id = "manage-user.address"/></label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                value={address}
                                onChange={(event) => {this.onChangeInput(event, 'address')}}
                                />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <label for="gender"><FormattedMessage id = "manage-user.gender"/></label>
                                    <select 
                                    className="form-control"
                                    onChange={(event) => {this.onChangeInput(event, 'gender')}}
                                    >
                                        {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return(
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        }
                                        
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="gender"><FormattedMessage id = "manage-user.position"/></label>
                                    <select className="form-control"
                                    onChange={(event) => {this.onChangeInput(event, 'position')}}
                                    >
                                        {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return(
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        }
                                        
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label for="roleid"><FormattedMessage id = "manage-user.role"/></label>
                                    <select 
                                    className="form-control"
                                    onChange={(event) => {this.onChangeInput(event, 'role')}}
                                    >
                                       {roles && roles.length >0 &&
                                        roles.map((item,index) => {
                                            return (
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
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
                           
                           {/* <div className='col-md-12 mt-3'> */}
                                <button 
                                type='button'
                                className="btn btn-success text-md-center btn-save-user-redux"
                                onClick={() => this.handleSaveUser()}
                                >
                                    <FormattedMessage id = "manage-user.save"/>
                                </button>   
                           {/* </div> */}
                           
                           <div className='row'>
                                <div className='col-12'>
                                        <TableManageUser/>
                                </div>
                           </div>
                           <div style={{height: '200px'}}></div>
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
        listUsers : state.admin.users

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart : () => dispatch(actions.fetchGenderStart()),

        getPositionStart : () => dispatch(actions.fetchPositionStart()),

        getRoleStart : () => dispatch(actions.fetchRoleStart()),

        createNewUser : (data) => dispatch(actions.createNewUser(data)),

        fetchUsersRudux : () => dispatch(actions.fetchAllUsersStart())

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux : (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
