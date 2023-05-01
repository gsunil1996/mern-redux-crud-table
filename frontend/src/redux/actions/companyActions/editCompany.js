import axios from "axios";
import { EDIT_COMPANY_TABLE_DATA_FAILURE, EDIT_COMPANY_TABLE_DATA_REQUEST, EDIT_COMPANY_TABLE_DATA_RESET, EDIT_COMPANY_TABLE_DATA_SUCCESS } from "../../actionTypes/companyActionTypes";

export const editCompany = (payload) => async (dispatch) => {
    try {

        dispatch({
            type: EDIT_COMPANY_TABLE_DATA_REQUEST
        })

        const { tableRowId, data } = payload;

        const response = await axios.patch(`http://localhost:5000/updateCompanyDetails/${tableRowId}`, data);

        // console.log("inside action", response.data)

        dispatch({
            type: EDIT_COMPANY_TABLE_DATA_SUCCESS,
            payload: response.data || {}
        })

    } catch (error) {
        dispatch({
            type: EDIT_COMPANY_TABLE_DATA_FAILURE,
            payload: error && error.message
        })
    }
}

export const editCompanyReset = () => async (dispatch) => {
    dispatch({
        type: EDIT_COMPANY_TABLE_DATA_RESET
    })
}