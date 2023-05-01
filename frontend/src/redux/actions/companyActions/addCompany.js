import axios from "axios";
import { ADD_COMPANY_TABLE_DATA_FAILURE, ADD_COMPANY_TABLE_DATA_REQUEST, ADD_COMPANY_TABLE_DATA_RESET, ADD_COMPANY_TABLE_DATA_SUCCESS } from "../../actionTypes/companyActionTypes";

export const addCompanyTableData = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: ADD_COMPANY_TABLE_DATA_REQUEST
        })

        const { data } = await axios.post(`http://localhost:5000/addCompany`, payload);

        dispatch({
            type: ADD_COMPANY_TABLE_DATA_SUCCESS,
            payload: data || {}
        })

    } catch (error) {
        dispatch({
            type: ADD_COMPANY_TABLE_DATA_FAILURE,
            payload: error && error.message
        })
    }
}

export const addCompanyTableDataReset = () => async (dispatch) => {
    dispatch({
        type: ADD_COMPANY_TABLE_DATA_RESET
    })
}