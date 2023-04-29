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

    render() {
        let listUsers = this.state.userRedux;
        console.log('check list user redux: ',listUsers)
        return (
               
                    <table id='customers'>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
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
                                                <button className='btnEdit' ><i className="fas fa-pencil-alt"></i></button>
                                                <button className='btnDelete' ><i className="fas fa-trash-alt"></i></button>
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
        fetchUsersRudux : () => dispatch(actions.fetchAllUsersStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
