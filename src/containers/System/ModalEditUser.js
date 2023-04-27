import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash'

class ModalEditUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : '',
            email : '',
            password : '',
            firstName : '',
            lastName : '',
            address : '' 
           
        };

        
    }

   

    componentDidMount() {
        let user = this.props.currentUser;
        if(user && !_.isEmpty(user)){
            this.setState({
                id : user.id,
                email : user.email,
                password : 'password',
                firstName : user.firstName,
                lastName : user.lastName,
                address : user.address
            })
        }
    }

    toggle = () => {
       this.props.toggleModal(); 
    }

    handleOnChangeInput = (e, id) => {
        let copyState = {...this.state}
        copyState[id] = e.target.value
        this.setState({
           ...copyState
        });
    }

    handleSaveEditUser = () => {
       
        let isValid = this.checkValidateInPut();
        if(isValid) {
            //call API create modal
            this.props.saveEditUser(this.state);//gọi hàm bên thằng cha và truyền giá trị từ thằng con qua lại thằng cha

        }
    }

    checkValidateInPut = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName','address'];
        for(let i = 0 ; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false
                alert(`${arrInput[i]} is required!`);
                break;
            }
        }
        return isValid;
    }

    render() {
        return (
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={() => {this.toggle()}} 
            className={"modal-user-container"}
            size ="lg"
            
            >
            <ModalHeader toggle={() => {this.toggle()}}>
              Edit a user
            </ModalHeader>
            <ModalBody>
                <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input 
                                type='email' 
                                onChange={(e) => this.handleOnChangeInput(e, "email")}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input 
                                type='password' 
                                onChange={(e) => this.handleOnChangeInput(e, "password")}
                                value={this.state.password}
                                disabled
                            />
                        </div>
                </div>
                <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input 
                                type='text' 
                                onChange={(e) => this.handleOnChangeInput(e, "firstName")}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input 
                                type='text' 
                                onChange={(e) => this.handleOnChangeInput(e, "lastName")}
                                value={this.state.lastName}
                            />
                        </div>
                </div>
                <div className='modal-user-body'>
                        <div className='input-container max-width-input'>
                            <label>Address</label>
                            <input 
                                type='text'  
                                onChange={(e) => this.handleOnChangeInput(e, "address")}
                                value={this.state.address}
                            />
                        </div>
                </div>
            </ModalBody>
            <ModalFooter>
              <Button color="success" className='px-3' onClick={() => {this.handleSaveEditUser()}}>
                Save
              </Button>{' '}
              <Button color="danger" className='px-3' onClick={() => {this.toggle()}}>
                Cancel
              </Button>
            </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);




