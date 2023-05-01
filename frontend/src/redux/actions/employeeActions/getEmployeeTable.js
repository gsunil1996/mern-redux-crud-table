import axios from "axios";
import { GET_EMPLOYEE_TABLE_DATA_FAILURE, GET_EMPLOYEE_TABLE_DATA_REQUEST, GET_EMPLOYEE_TABLE_DATA_RESET, GET_EMPLOYEE_TABLE_DATA_SUCCESS } from "../../actionTypes/employeeActionTypes";

export const getEmployeeTable = ({ search, gender, status, sort, page }) => async (dispatch) => {
    try {

        dispatch({
            type: GET_EMPLOYEE_TABLE_DATA_REQUEST
        })

        const { data } = await axios.get(`http://localhost:5000/employeesTable?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`)

        //  console.log("inside action", data)

        dispatch({
            type: GET_EMPLOYEE_TABLE_DATA_SUCCESS,
            payload: data || []
        })

    } catch (error) {
        dispatch({
            type: GET_EMPLOYEE_TABLE_DATA_FAILURE,
            payload: error && error.message
        })
    }
}

export const getEmployeeTableReset = () => async (dispatch) => {
    dispatch({
        type: GET_EMPLOYEE_TABLE_DATA_RESET
    })
}