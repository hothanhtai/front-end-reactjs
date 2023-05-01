import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss'
import * as actions from '../../../store/actions';



class TableManageUser extends Component {

    constructor(props){
        super(props);
        this.state = {
          userRedux : []
        }
    }

    componentDidMount(){
        this.props.fetchUsersRudux()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.listUsers !== this.props.listUsers){
            this.setState({
                userRedux : this.props.listUsers
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id)
    }

    handleEditUser = (user) => {
       this.props.handleEditUserFromParent(user)
    }

    render() {
        let listUsers = this.state.userRedux;
        console.log('check list user redux: ',listUsers)
        return (
               
                    <table id='customers'>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th><FormattedMessage id = "manage-user.firstname"/></th>
                                <th><FormattedMessage id = "manage-user.lastname"/></th>
                                <th><FormattedMessage id = "manage-user.address"/></th>
                                <th><FormattedMessage id = "manage-user.action"/></th>
                            </tr>
                            {listUsers && listUsers.length > 0 &&
                                listUsers.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button type='button' onClick={() => this.handleEditUser(item)} className='btnEdit' ><i className="fas fa-pencil-alt"></i></button>
                                                <button type='button' onClick={() =>  this.handleDeleteUser(item)} className='btnDelete' ><i className="fas fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers : state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersRudux : () => dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux : (id) => dispatch(actions.deleteUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
