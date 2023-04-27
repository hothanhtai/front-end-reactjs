import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService ,deleteUserService,editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';

class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUser : [],
            isOpenModalUser : false,
            isOpenModalEditUser : false,
            userEdit : {}

        }
    }

    /*
    *Life cycle react
    *1. Run constructor -> init state
    *2. componentDidMount -> setState
    *3. Render
    * */
    async componentDidMount() {
      await this.getAllUsersFromReact();
       
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers("ALL")
        if(response && response.errCode === 0){
            this.setState({
                arrUser : response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser : true
        })
    }


    toggleUserModal = () => {
        this.setState({
            isOpenModalUser : !this.state.isOpenModalUser
        })
    }

    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser : !this.state.isOpenModalEditUser
        })
    }

    createNewUser = async (data) => {
        try {
           let response =  await createNewUserService(data);
           if(response && response.message.errCode !== 0 ){
                console.log(response.message.errCode)
                alert(response.message.errMessage)
           }else{
                alert(response.message.errMessage)

                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser : false
                }, () => {
                    this.forceUpdate();
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')//phát ra emitter để bên thằng con có thể lắng nghe và thực hiện
           }
           
        } catch (e) {
            console.log(e)
        }
    }

    saveEditUser =async (item) => {
       try {
            let res = await editUserService(item);
            if(res && res.message.errCode ===0){
                alert(res.message.errMessage)
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalEditUser : false
                }, () => {
                    this.forceUpdate();
                })
            }else{
                alert(res.message.errMessage)
            }
       } catch (e) {
         console.log(e)
       }
    }

    handleEditUser = async (item) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit : item
        })
    }

    handleDelete = async (item) => {
        try {
            let res = await deleteUserService(item.id);
            if(res && res.message.errCode === 0){
                alert(res.message.errMessage)
                await this.getAllUsersFromReact();
            }
            else{
                alert(res.message.errMessage)
            }

            
        } catch (e) {
            
        }
    }

    render() {
        let arrUser = this.state.arrUser;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen = {this.state.isOpenModalUser}
                    toggleModal = {this.toggleUserModal}//truyền props function từ cha sang thằng con
                    createNewUser = {this.createNewUser}//truyền props function từ cha sang thằng con
                />
                    {this.state.isOpenModalEditUser && 
                        <ModalEditUser
                        isOpen = {this.state.isOpenModalEditUser}
                        toggleModal = {this.toggleUserEditModal}//truyền props function từ cha sang thằng con
                        currentUser = {this.state.userEdit}
                        saveEditUser = {this.saveEditUser}//truyền props function từ cha sang thằng con
                        />
                    }
              
                <div className='title text-center'>UserManage</div>
                <div>
                    <button 
                    className='btnAddUser'
                    onClick={() => this.handleAddNewUser()}
                    >
                        <i className='fas fa-user-plus'></i>
                        Add New User
                    </button>
                </div>
                <div className='users-table mt-4 mx-3'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                                {
                                    arrUser && arrUser.map((item) => {
                                        return(
                                            <>
                                            <tr key={item.id}>
                                                <td>{item.email}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <button className='btnEdit' onClick={() => this.handleEditUser(item)}><i className="fas fa-pencil-alt"></i></button>
                                                    <button className='btnDelete' onClick={() => this.handleDelete(item)}><i className="fas fa-trash-alt"></i></button>
                                                </td>
                                            </tr>
                                            </>
                                        )
                                    })
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
