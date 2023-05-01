import { ADD_COMPANY_TABLE_DATA_FAILURE, ADD_COMPANY_TABLE_DATA_REQUEST, ADD_COMPANY_TABLE_DATA_RESET, ADD_COMPANY_TABLE_DATA_SUCCESS, DELETE_COMPANY_TABLE_DATA_FAILURE, DELETE_COMPANY_TABLE_DATA_REQUEST, DELETE_COMPANY_TABLE_DATA_RESET, DELETE_COMPANY_TABLE_DATA_SUCCESS, EDIT_COMPANY_TABLE_DATA_FAILURE, EDIT_COMPANY_TABLE_DATA_REQUEST, EDIT_COMPANY_TABLE_DATA_RESET, EDIT_COMPANY_TABLE_DATA_SUCCESS, GET_COMPANY_PROFILE_FAILURE, GET_COMPANY_PROFILE_REQUEST, GET_COMPANY_PROFILE_RESET, GET_COMPANY_PROFILE_SUCCESS, GET_COMPANY_TABLE_DATA_FAILURE, GET_COMPANY_TABLE_DATA_REQUEST, GET_COMPANY_TABLE_DATA_RESET, GET_COMPANY_TABLE_DATA_SUCCESS } from "../actionTypes/companyActionTypes";


// get company table
const getCompanyTableDataInitialState = {
    data: [],
    isLoading: false,
    isError: false,
    error: "",
    isSuccess: false,
}

export const getCompanyTableReducer = (state = getCompanyTableDataInitialState, action) => {
    switch (action.type) {
        case GET_COMPANY_TABLE_DATA_REQUEST:
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
                error: "",
                isSuccess: false,
            }
        case GET_COMPANY_TABLE_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isSuccess: true,
            }
        case GET_COMPANY_TABLE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload,
            }
        case GET_COMPANY_TABLE_DATA_RESET:
            return {
                ...state,
                data: [],
                isLoading: false,
                isError: false,
                error: "",
                isSuccess: false,
            }

        default:
            return state
    }
}

// get company profile
const getCompanyProfileInitialState = {
    companyProfileData: {},
    companyProfileIsLoading: false,
    companyProfileIsError: false,
    companyProfileError: "",
    companyProfileIsSuccess: false,
}

export const getCompanyProfileReducer = (state = getCompanyProfileInitialState, action) => {
    switch (action.type) {
        case GET_COMPANY_PROFILE_REQUEST:
            return {
                ...state,
                companyProfileData: {},
                companyProfileIsLoading: true,
                companyProfileIsError: false,
                companyProfileError: "",
                companyProfileIsSuccess: false,
            }
        case GET_COMPANY_PROFILE_SUCCESS:
            return {
                ...state,
                companyProfileData: action.payload,
                companyProfileIsLoading: false,
                companyProfileIsSuccess: true,
            }
        case GET_COMPANY_PROFILE_FAILURE:
            return {
                ...state,
                companyProfileIsLoading: false,
                companyProfileIsError: true,
                companyProfileError: action.payload,
            }
        case GET_COMPANY_PROFILE_RESET:
            return {
                ...state,
                companyProfileData: {},
                companyProfileIsLoading: false,
                companyProfileIsError: false,
                companyProfileError: "",
                companyProfileIsSuccess: false,
            }
        default:
            return state;
    }
}

// add company table
const addCompanyTableInitialState = {
    companyAddedData: {},
    companyAddDataLoading: false,
    companyAddedDataIsError: false,
    companyAddedDataError: "",
    companyAddedDataIsSuccess: false,
}

export const addCompanyTableReducer = (state = addCompanyTableInitialState, action) => {
    switch (action.type) {

        case ADD_COMPANY_TABLE_DATA_REQUEST:
            return {
                ...state,
                companyAddedData: {},
                companyAddDataLoading: true,
                companyAddedDataIsError: false,
                companyAddedDataError: "",
                companyAddedDataIsSuccess: false,
            }
        case ADD_COMPANY_TABLE_DATA_SUCCESS:
            return {
                ...state,
                companyAddedData: action.payload,
                companyAddDataLoading: false,
                companyAddedDataIsSuccess: true,
            }
        case ADD_COMPANY_TABLE_DATA_FAILURE:
            return {
                ...state,
                companyAddDataLoading: false,
                companyAddedDataIsError: true,
                companyAddedDataError: action.payload,
            }
        case ADD_COMPANY_TABLE_DATA_RESET:
            return {
                ...state,
                companyAddedData: {},
                companyAddDataLoading: false,
                companyAddedDataIsError: false,
                companyAddedDataError: "",
                companyAddedDataIsSuccess: false,
            }

        default:
            return state
    }
}

// edit company table
const editCompanyTableInitialState = {
    companyEditedData: {},
    companyEditDataLoading: false,
    companyEditDataIsError: false,
    companyEditDataError: "",
    companyEditDataIsSuccess: false,
}

export const editCompanyDataReducer = (state = editCompanyTableInitialState, action) => {
    switch (action.type) {

        case EDIT_COMPANY_TABLE_DATA_REQUEST:
            return {
                ...state,
                companyEditedData: {},
                companyEditDataLoading: true,
                companyEditDataIsError: false,
                companyEditDataError: "",
                companyEditDataIsSuccess: false,
            }
        case EDIT_COMPANY_TABLE_DATA_SUCCESS:
            return {
                ...state,
                companyEditedData: action.payload,
                companyEditDataLoading: false,
                companyEditDataIsSuccess: true,
            }
        case EDIT_COMPANY_TABLE_DATA_FAILURE:
            return {
                ...state,
                companyEditDataLoading: false,
                companyEditDataIsError: true,
                companyEditDataError: action.payload,
            }
        case EDIT_COMPANY_TABLE_DATA_RESET:
            return {
                ...state,
                companyEditedData: {},
                companyEditDataLoading: false,
                companyEditDataIsError: false,
                companyEditDataError: "",
                companyEditDataIsSuccess: false,
            }

        default:
            return state
    }
}

// delete company table
const deleteCompanyInitialState = {
    companyDeletedData: {},
    companyDeleteDataLoading: false,
    companyDeleteDataIsError: false,
    companyDeleteDataError: "",
    companyDeleteDataIsSuccess: false,
}


export const deleteCompanyReducer = (state = deleteCompanyInitialState, action) => {
    switch (action.type) {
        case DELETE_COMPANY_TABLE_DATA_REQUEST:
            return {
                ...state,
                companyDeletedData: {},
                companyDeleteDataLoading: false,
                companyDeleteDataIsError: false,
                companyDeleteDataError: "",
                companyDeleteDataIsSuccess: false,
            }
        case DELETE_COMPANY_TABLE_DATA_SUCCESS:
            return {
                ...state,
                companyDeletedData: action.payload,
                companyDeleteDataLoading: false,
                companyDeleteDataIsSuccess: true,
            }
        case DELETE_COMPANY_TABLE_DATA_FAILURE:
            return {
                ...state,
                companyDeleteDataLoading: false,
                companyDeleteDataIsError: true,
                companyDeleteDataError: action.payload,
            }
        case DELETE_COMPANY_TABLE_DATA_RESET:
            return {
                ...state,
                companyDeletedData: {},
                companyDeleteDataLoading: false,
                companyDeleteDataIsError: false,
                companyDeleteDataError: "",
                companyDeleteDataIsSuccess: false,
            }

        default:
            return state
    }
}