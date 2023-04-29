import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers } from '../../services/userService';
import {toast} from 'react-toastify'

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({type : actionTypes.FETCH_GENDER_START})
            let res = await getAllCodeService('GENDER');
            if(res && res.data.errCode === 0){
                dispatch(fetchGenderSuccess(res.data.data))  
            }else{
               dispatch(fetchGenderFailded());
            }
       } catch (e) {
            dispatch(fetchGenderFailded())
            console.log('fetchGenderStart error',e)
       }
    }
  
}
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data : genderData
})
export const fetchGenderFailded = () => ({
    type: actionTypes.FETCH_GENDER_FAILDED
})

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data : positionData
})
export const fetchPositionFailded = () => ({
    type: actionTypes.FETCH_POSITION_FAILDED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data : roleData
})
export const fetchRoleFailded = () => ({
    type: actionTypes.FETCH_ROLE_FAILDED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if(res && res.data.errCode === 0){
                dispatch(fetchPositionSuccess(res.data.data))  
            }else{
               dispatch(fetchPositionFailded());
            }
       } catch (e) {
            dispatch(fetchPositionFailded())
            console.log('fetchPositionStart error',e)
       }
    }
  
}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if(res && res.data.errCode === 0){
                dispatch(fetchRoleSuccess(res.data.data))  
            }else{
               dispatch(fetchRoleFailded());
            }
       } catch (e) {
            dispatch(fetchRoleFailded())
            console.log('fetchRoleStart error',e)
       }
    }
  
}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data)
            if(res && res.message.errCode === 0){
                toast.success(`${res.message.errMessage}`)
                dispatch(saveUserSuccess())  ;
                dispatch(fetchAllUsersStart());
                
            }else{
                alert(res.message.errMessage)
               dispatch(saveUserFailded());
            }
       } catch (e) {
            dispatch(saveUserFailded())
            console.log('saveUserFailded error',e)
       }
    }
}

export const saveUserFailded = () => ({
    type : 'CREATE_USER_FAILDED'
})

export const saveUserSuccess = () => ({
    type : 'CREATE_USER_SUCCESS'
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');
            console.log('data from server:',res)
            if(res && res.errCode === 0){
                dispatch(fetchAllUsersSuccess(res.users.reverse()))  
            }else{
               dispatch(fetchAllUsersFailded());
            }
       } catch (e) {
            dispatch(fetchAllUsersFailded())
            console.log('fetchRoleStart error',e)
       }
    }
  
}

export const fetchAllUsersFailded = () => ({
    type : 'FETCH_ALL_USERS_FAILDED'
})

export const fetchAllUsersSuccess = (data) => ({
    type : 'FETCH_ALL_USERS_SUCCESS',
    users : data
})