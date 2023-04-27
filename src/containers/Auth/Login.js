import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import { ToastContainer ,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as actions from "../../store/actions";

import './Login.scss';
import { handleLoginApi } from '../../services/userService';
import { FormattedMessage } from 'react-intl';




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username : "",
        password : "",
        isShowPassword : false,
        errMessage : "",
        toastOptions : {  
            position: "top-right",
            autoClose: 8000,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
           
        },
        }
    }
    
    handleOnChangeUsername = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password : event.target.value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage : ""
        })
        try {
           
            let data = await handleLoginApi(this.state.username, this.state.password)
            if(data && data.errCode !== 0){
                this.setState({
                    errMessage : data.message
                })
                
                toast.error(this.state.errMessage, this.state.toastOptions);
            }
            if(data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
            }

        } catch (e) {
            if(e.response){
                if(e.response.data){
                    this.setState({
                        errMessage : e.response.data.message
                    })
                toast.error(this.state.errMessage, this.state.toastOptions);
                   
                }
            }
            console.log(e);
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    
    render() {
      
        return (
          <div className='login-background'>
            <div className='login-container'>
                <div className='login-content row'>
                        <div className='col-12  mt-4 text-login'>Login</div>
                        <div className='col-12  mt-4 form-group login-input'>
                            <label>Username</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder='Enter your username'
                          
                            onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12  mt-3 form-group login-input'>
                            <label>Password</label>
                            <div className='eye-group'>
                                <input  
                                type= {this.state.isShowPassword ? "text" : "password"}  
                                className="form-control" 
                                placeholder='Enter your password'
                                onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => {this.handleShowHidePassword()}}>
                                    <i className={this.state.isShowPassword ? "fa fa-eye" : "fa fa-eye-slash    "}></i>
                                </span>
                              
                            </div>
                        </div>
                       
                        <div className="col-12  mt-4 btn-login">
                            <button onClick={() => {this.handleLogin()}}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span>Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-5">
                            <span className="text-other-login">Or Login With: </span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                            <i className="fab fa-github github"></i>
                        </div>

                </div>
               
            </div>
            <ToastContainer/>
            
          </div>
          
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess : (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
