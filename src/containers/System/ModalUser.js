import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            firstName : '',
            lastName : '',
            address : '' 
           
        };

        this.listenToEmitter();
    }

    listenToEmitter(){
        //dùng emitter để lắng nghe một event từ thằng cha phát ra
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email : '',
                password : '',
                firstName : '',
                lastName : '',
                address : '' 
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
       this.props.toggleModal();
       this.setState({
        email : '',
        password : '',
        firstName : '',
        lastName : '',
        address : '' 
       })
    }

    handleOnChangeInput = (e, id) => {
        let copyState = {...this.state}
        copyState[id] = e.target.value
        this.setState({
           ...copyState
        });
    }

    handleAddNewUser = () => {
       
        let isValid = this.checkValidateInPut();
        if(isValid) {
            //call API create modal
            console.log('data modal', this.state) 
            this.props.createNewUser(this.state);//gọi hàm bên thằng cha và truyền giá trị từ thằng con qua lại thằng cha

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
              Create a new user
            </ModalHeader>
            <ModalBody>
                <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input 
                                type='email' 
                                onChange={(e) => this.handleOnChangeInput(e, "email")}
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input 
                                type='password' 
                                onChange={(e) => this.handleOnChangeInput(e, "password")}
                                value={this.state.password}
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
              <Button color="success" className='px-3' onClick={() => {this.handleAddNewUser()}}>
                Add New
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);




