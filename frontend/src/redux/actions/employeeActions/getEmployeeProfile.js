import axios from "axios";
import { GET_EMPLOYEE_PROFILE_FAILURE, GET_EMPLOYEE_PROFILE_REQUEST, GET_EMPLOYEE_PROFILE_RESET, GET_EMPLOYEE_PROFILE_SUCCESS } from "../../actionTypes/employeeActionTypes";

export const getEmployeeProfile = ({ id }) => async (dispatch) => {

    try {

        dispatch({
            type: GET_EMPLOYEE_PROFILE_REQUEST
        })

        const { data } = await axios.get(`http://localhost:5000/employeesTable/${id}`);

        //  console.log("inside action", data)

        dispatch({
            type: GET_EMPLOYEE_PROFILE_SUCCESS,
            payload: data || {}
        })

    } catch (error) {
        dispatch({
            type: GET_EMPLOYEE_PROFILE_FAILURE,
            payload: error && error.message
        })
    }

}

export const getEmployeeProfileReset = () => async (dispatch) => {
    dispatch({
        type: GET_EMPLOYEE_PROFILE_RESET
    })
}