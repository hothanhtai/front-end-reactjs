import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTION } from '../../../utils';
import * as actions from '../../../store/actions';
import './UserRedux.scss'
import image from '../../../assets/images/giphy.gif'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
import {toast} from 'react-toastify';
import CommonUtils from '../../../utils/CommonUtils';

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

            action: '',

            userEditId : ''
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
            console.log(arrGenders)
            this.setState({
                genderArr : arrGenders,
                gender : arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : ''
            })
        }
        if(prevProps.roleRedux !== this.props.roleRedux){
            let arrRoles = this.props.roleRedux
            
            this.setState({
                roleArr : arrRoles,
                role : arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : ''
            })
        }

        if(prevProps.positionRedux !== this.props.positionRedux){
            let arrPositions = this.props.positionRedux
           
            this.setState({
                positionArr : arrPositions,
                position : arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : ''
            })
        }

        if(prevProps.listUsers !== this.props.listUsers){
            let arrPositions = this.props.positionRedux
            let arrRoles = this.props.roleRedux
            let arrGenders = this.props.genderRedux;
            this.setState({
                email : '',
                password : '',
                firstName : '',
                lastName : '',
                phone : '',
                address : '',
                gender : arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : '' ,
                position : arrPositions && arrPositions.length > 0 ? arrPositions[0].keyMap : '',
                role : arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : '',
                avatar : '',
                action : CRUD_ACTION.CREATE,
                previewImageUrl : ''
            })
        }
    }

    handleOnChangeImage = async (event) =>{
        let data = event.target.files;
        let file = data[0];
        if(file) {
            let base64 = await CommonUtils.getBase64(file)
            //tạo đường link url để review hình ảnh vừa upload
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImageUrl : objectUrl,
                avatar : base64,
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

        let {action} = this.state
        if(action === CRUD_ACTION.CREATE){
            //fire redux create user
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
                avatar : this.state.avatar
            })

        }

        if(action === CRUD_ACTION.EDIT){
             //fire redux edit user
            this.props.editUserRedux({
                id :this.state.userEditId,
                email: this.state.email ,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber : this.state.phone,
                gender : this.state.gender,
                roleId : this.state.role,
                positionId : this.state.position,
                avatar : this.state.avatar
                
                
            })
        }


        this.props.fetchUsersRudux();
    }

    checkValidateInput = () => {
        let isValid =  true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phone', 'address']
        for(let i = 0 ; i < arrCheck.length ; i++){
            if(!this.state[arrCheck[i]]){
                isValid = false;
                toast.warn('This input is required : ' +  arrCheck[i])
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
    handleEditUserFromParent = (user) => {
        let imageBase64 = '';
        if(user.image){
            imageBase64 = new Buffer(user.image, 'base64').toString('binary')
        }
        this.setState({
            email : user.email,
            password : 'hardcode',
            firstName : user.firstName,
            lastName : user.lastName,
            phone : user.phoneNumber,
            address : user.address,
            gender : user.gender,
            position : user.positionId,
            role : user.roleId,
            avatar : '',
            previewImageUrl : imageBase64,
            action : CRUD_ACTION.EDIT,
            userEditId : user.id
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
                                    disabled= {this.state.action === CRUD_ACTION.EDIT ? 'disabled' : ''}
                                    
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
                                    disabled= {this.state.action === CRUD_ACTION.EDIT ? 'disabled' : ''}
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
                                    <label><FormattedMessage id = "manage-user.gender"/></label>
                                    <select 
                                    value={gender}
                                    className="form-control"
                                    onChange={(event) => {this.onChangeInput(event, 'gender')}}
                                    >
                                        {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return(
                                                <option key={index} value={item.keyMap}>{language === LANGUAGES.VI? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        }
                                        
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label><FormattedMessage id = "manage-user.position"/></label>
                                    <select 
                                    value={position}
                                    className="form-control"
                                    onChange={(event) => {this.onChangeInput(event, 'position')}}
                                    >
                                        {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return(
                                                <option key={index} value={item.keyMap}>{language === LANGUAGES.VI? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                        }
                                        
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label><FormattedMessage id = "manage-user.role"/></label>
                                    <select
                                    value={role} 
                                    className="form-control"
                                    onChange={(event) => {this.onChangeInput(event, 'role')}}
                                    >
                                       {roles && roles.length >0 &&
                                        roles.map((item,index) => {
                                            return (
                                                <option key={index} value={item.keyMap}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
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
                           
                           <div className='button-user-redux'>
                                <button 
                                        style={{marginRight:"6px"}}
                                        type='button'
                                        className= {this.state.action === CRUD_ACTION.EDIT ? "btn btn-warning text-md-center btn-save-user-redux" : 
                                                                                            "btn btn-success text-md-center btn-save-user-redux"}
                                        onClick={() => this.handleSaveUser()}
                                        >
                                            {this.state.action === CRUD_ACTION.EDIT ? <FormattedMessage id = "manage-user.edit"/> : 
                                                                                        <FormattedMessage id = "manage-user.save"/> }
                                            
                                        </button>   
                                        <button
                                            className={this.state.action === CRUD_ACTION.EDIT ? 'btn btn-danger text-md-center btn-save-user-redux' : 
                                                                                                'hidden'}
                                        >
                                            <FormattedMessage id = "manage-user.cancel" />
                                        </button>
                             </div>
                           
                           <div className='row'>
                                <div className='col-12'>
                                        <TableManageUser
                                            handleEditUserFromParent = {this.handleEditUserFromParent}
                                            action = {this.state.action}
                                        />
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

        fetchUsersRudux : () => dispatch(actions.fetchAllUsersStart()),

        editUserRedux : (data) => dispatch(actions.editUser(data))

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux : (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
