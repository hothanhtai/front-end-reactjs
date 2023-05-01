import axios from "../axios"

const handleLoginApi = (email, password) => {
    console.log(email,password)
    return axios.post('/api/login',{email, password});
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('data send server: ', data)
    return axios.post('/api/create-new-user',data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user',{
        data :{id:userId}
    })
}

const editUserService = (item) => {
    return axios.put('/api/edit-user', item)
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
} 

const getTopDoctorHomeService = (limit) => {
        return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
export {handleLoginApi, 
    getAllUsers, 
    createNewUserService,
    deleteUserService, 
    editUserService, 
    getAllCodeService, 
    getTopDoctorHomeService
}