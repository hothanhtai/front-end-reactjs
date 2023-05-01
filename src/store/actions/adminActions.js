import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService, getTopDoctorHomeService } from '../../services/userService';
import {toast,cssTransition} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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
                toast.success(`${res.message.errMessage}`,{
                    icon: "♥️",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                   
                })
                
                dispatch(saveUserSuccess())  ;
                dispatch(fetchAllUsersStart());
                
            }else{
                toast.warn(`${res.message.errMessage}`,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            //    dispatch(saveUserFailded());
            }
       } catch (e) {
        toast.warn(`${e}`)
            dispatch(saveUserFailded())
       }
    }
}

export const saveUserFailded = () => ({
    type : actionTypes.CREATE_USER_FAILDED
})

export const saveUserSuccess = () => ({
    type : actionTypes.CREATE_USER_SUCCESS
})

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');
            let res1 = await getTopDoctorHomeService(3)
            console.log('data from server:',res1)
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
    type : actionTypes.FETCH_ALL_USERS_FAILDED
})

export const fetchAllUsersSuccess = (data) => ({
    type : actionTypes.FETCH_ALL_USERS_SUCCESS,
    users : data
})

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId)
            if(res && res.message.errCode === 0){
                toast.success(`${res.message.errMessage}`)
                dispatch(deleteUserSuccess())  ;
                dispatch(fetchAllUsersStart());
                
            }else{
                toast.warn(`${res.message.errMessage}`)
               dispatch(deleteUserFailded());
            }
       } catch (e) {
        toast.warn(`${e}`)
            dispatch(deleteUserFailded())
       }
    }
}

export const deleteUserSuccess = () => ({
    type : actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailded = () => ({
    type : actionTypes.DELETE_USER_FAILDED
})

export const editUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(userId)
            if(res && res.message.errCode === 0){
                toast.success(`${res.message.errMessage}`)
                dispatch(deleteUserSuccess())  ;
                dispatch(fetchAllUsersStart());
                
            }else{
                toast.warn(`${res.message.errMessage}`)
               dispatch(deleteUserFailded());
            }
       } catch (e) {
        toast.warn(`${e}`)
            dispatch(deleteUserFailded())
       }
    }
}

export const editUserSuccess = () => ({
    type : actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailded = () => ({
    type : actionTypes.EDIT_USER_FAILDED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('10');
            if(res && res.errCode === 0){
                dispatch({
                    type : actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors : res.data
                })
            }else{
                dispatch({
                    type : actionTypes.FETCH_TOP_DOCTORS_FAILDED
                })
            } 
                
       } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILDED',e)
            dispatch({
                type : actionTypes.FETCH_TOP_DOCTORS_FAILDED
            })
       }
    }
}