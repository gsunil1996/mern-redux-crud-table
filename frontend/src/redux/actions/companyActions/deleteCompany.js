import axios from "axios";
import { DELETE_COMPANY_TABLE_DATA_FAILURE, DELETE_COMPANY_TABLE_DATA_REQUEST, DELETE_COMPANY_TABLE_DATA_RESET, DELETE_COMPANY_TABLE_DATA_SUCCESS } from "../../actionTypes/companyActionTypes";

export const deleteCompany = ({ id }) => async (dispatch) => {
    try {

        dispatch({
            type: DELETE_COMPANY_TABLE_DATA_REQUEST
        })

        const { data } = await axios.delete(`http://localhost:5000/deleteCompany/${id}`)

        // console.log("Inside action response", data);

        dispatch({
            type: DELETE_COMPANY_TABLE_DATA_SUCCESS,
            payload: data || {}
        })

    } catch (error) {
        dispatch({
            type: DELETE_COMPANY_TABLE_DATA_FAILURE,
            payload: error && error.message
        })
    }
}

export const deleteCompanyReset = () => async (dispatch) => {
    dispatch({
        type: DELETE_COMPANY_TABLE_DATA_RESET
    })
}