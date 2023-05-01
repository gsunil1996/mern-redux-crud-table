import axios from "axios";
import { EDIT_EMPLOYEE_TABLE_DATA_FAILURE, EDIT_EMPLOYEE_TABLE_DATA_REQUEST, EDIT_EMPLOYEE_TABLE_DATA_RESET, EDIT_EMPLOYEE_TABLE_DATA_SUCCESS } from "../../actionTypes/employeeActionTypes";

export const editEmployee = (payload) => async (dispatch) => {
    try {

        dispatch({
            type: EDIT_EMPLOYEE_TABLE_DATA_REQUEST
        })

        const { tableRowId, data } = payload;

        const response = await axios.patch(`http://localhost:5000/updateEmployeeDetails/${tableRowId}`, data);

        // console.log("inside action", response.data)

        dispatch({
            type: EDIT_EMPLOYEE_TABLE_DATA_SUCCESS,
            payload: response.data || {}
        })

    } catch (error) {
        dispatch({
            type: EDIT_EMPLOYEE_TABLE_DATA_FAILURE,
            payload: error && error.message
        })
    }
}

export const editEmployeeReset = () => async (dispatch) => {
    dispatch({
        type: EDIT_EMPLOYEE_TABLE_DATA_RESET
    })
}