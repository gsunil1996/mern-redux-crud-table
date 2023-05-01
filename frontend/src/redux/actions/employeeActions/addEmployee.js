import axios from "axios";
import { ADD_EMPLOYEE_TABLE_DATA_FAILURE, ADD_EMPLOYEE_TABLE_DATA_REQUEST, ADD_EMPLOYEE_TABLE_DATA_RESET, ADD_EMPLOYEE_TABLE_DATA_SUCCESS } from "../../actionTypes/employeeActionTypes";

export const addEmployee = (payload) => async (dispatch) => {
    try {

        dispatch({
            type: ADD_EMPLOYEE_TABLE_DATA_REQUEST
        })

        const { data } = await axios.post(`http://localhost:5000/addEmployee`, payload);

        // console.log("inside action", data)

        dispatch({
            type: ADD_EMPLOYEE_TABLE_DATA_SUCCESS,
            payload: data || {}
        })

    } catch (error) {
        dispatch({
            type: ADD_EMPLOYEE_TABLE_DATA_FAILURE,
            payload: error && error.message
        })
    }
}

export const addEmployeeReset = () => async (dispatch) => {
    dispatch({
        type: ADD_EMPLOYEE_TABLE_DATA_RESET
    })
}