import axios from "axios"


export const fetchToAddNewStudent = async (s, dispatch) => {
    try {
      await axios.post('http://localhost:9999/students', s)
        // nếu thêm mới student thành công : 
        dispatch({
            type: 'ADD_NEW_STUDENT',
            payload: s
        })

    } catch (error) {
        console.log('error when try to add new student : '.error);
    }
}


export const fetchToDeleteStudent = async (id, dispatch) => {
    try {
      await axios.delete(`http://localhost:9999/students/${id}`)
        // nếu xóa student thành công : 
        dispatch({
            type: 'DELETE_STUDENT',
            payload: id
        })

    } catch (error) {
        console.log('error when try to delete student : ', error);
    }
}


export const fetchToAddAddress = async (newAddress, dispatch) => {
    try {
       await axios.post(`http://localhost:9999/address`, newAddress)
        // nếu xóa student thành công : 
        dispatch({
            type: 'ADD_NEW_ADDRESS',
            payload: newAddress
        })

    } catch (error) {
        console.log('error when try to delete student : ', error);
    }
}
