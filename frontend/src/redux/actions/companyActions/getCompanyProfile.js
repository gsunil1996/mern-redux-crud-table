import axios from "axios";
import { GET_COMPANY_PROFILE_FAILURE, GET_COMPANY_PROFILE_REQUEST, GET_COMPANY_PROFILE_RESET, GET_COMPANY_PROFILE_SUCCESS } from "../../actionTypes/companyActionTypes";

export const getCompanyProfile = ({ id }) => async (dispatch) => {
    try {

        dispatch({
            type: GET_COMPANY_PROFILE_REQUEST
        })

        const { data } = await axios.get(`http://localhost:5000/companiesTable/${id}`);

        dispatch({
            type: GET_COMPANY_PROFILE_SUCCESS,
            payload: data || {}
        })

    } catch (error) {
        dispatch({
            type: GET_COMPANY_PROFILE_FAILURE,
            payload: error && error.message
        })
    }
}

export const getCompanyProfileReset = () => async (dispatch) => {
    dispatch({
        type: GET_COMPANY_PROFILE_RESET
    })
}