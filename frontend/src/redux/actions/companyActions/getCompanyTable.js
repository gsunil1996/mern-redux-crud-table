import axios from "axios";
import { GET_COMPANY_TABLE_DATA_FAILURE, GET_COMPANY_TABLE_DATA_REQUEST, GET_COMPANY_TABLE_DATA_RESET, GET_COMPANY_TABLE_DATA_SUCCESS } from "../../actionTypes/companyActionTypes";

export const getCompanyTable = ({ search, gender, status, sort, page }) => async (dispatch) => {
    try {

        dispatch({
            type: GET_COMPANY_TABLE_DATA_REQUEST
        })

        const { data } = await axios.get(`http://localhost:5000/companiesTable?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`)

        //  console.log("inside action", data)

        dispatch({
            type: GET_COMPANY_TABLE_DATA_SUCCESS,
            payload: data || []
        })

    } catch (error) {
        dispatch({
            type: GET_COMPANY_TABLE_DATA_FAILURE,
            payload: error && error.message
        })
    }
}

export const getCompanyTableReset = () => async (dispatch) => {
    dispatch({
        type: GET_COMPANY_TABLE_DATA_RESET
    })
}