import { ADD_EMPLOYEE_TABLE_DATA_FAILURE, ADD_EMPLOYEE_TABLE_DATA_REQUEST, ADD_EMPLOYEE_TABLE_DATA_RESET, ADD_EMPLOYEE_TABLE_DATA_SUCCESS, DELETE_EMPLOYEE_TABLE_DATA_FAILURE, DELETE_EMPLOYEE_TABLE_DATA_REQUEST, DELETE_EMPLOYEE_TABLE_DATA_RESET, DELETE_EMPLOYEE_TABLE_DATA_SUCCESS, EDIT_EMPLOYEE_TABLE_DATA_FAILURE, EDIT_EMPLOYEE_TABLE_DATA_REQUEST, EDIT_EMPLOYEE_TABLE_DATA_RESET, EDIT_EMPLOYEE_TABLE_DATA_SUCCESS, GET_EMPLOYEE_PROFILE_FAILURE, GET_EMPLOYEE_PROFILE_REQUEST, GET_EMPLOYEE_PROFILE_RESET, GET_EMPLOYEE_PROFILE_SUCCESS, GET_EMPLOYEE_TABLE_DATA_FAILURE, GET_EMPLOYEE_TABLE_DATA_REQUEST, GET_EMPLOYEE_TABLE_DATA_RESET, GET_EMPLOYEE_TABLE_DATA_SUCCESS } from "../actionTypes/employeeActionTypes";


// get employee table
const getEmployeeTableInitialState = {
    data: [],
    isLoading: false,
    isError: false,
    error: "",
    isSuccess: false,
}

export const getEmployeeTableReducer = (state = getEmployeeTableInitialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_TABLE_DATA_REQUEST:
            return {
                ...state,
                data: [],
                isLoading: true,
                isError: false,
                error: "",
                isSuccess: false,
            }
        case GET_EMPLOYEE_TABLE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                data: action.payload
            }
        case GET_EMPLOYEE_TABLE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload,
            }
        case GET_EMPLOYEE_TABLE_DATA_RESET:
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


// get employee profile

const getEmployeeProfileInitialState = {
    employeeProfileData: {},
    employeeProfileIsLoading: false,
    employeeProfileIsError: false,
    employeeProfileError: "",
    employeeProfileIsSuccess: false,
}

export const getEmployeeProfileReducer = (state = getEmployeeProfileInitialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_PROFILE_REQUEST:
            return {
                ...state,
                employeeProfileData: {},
                employeeProfileIsLoading: true,
                employeeProfileIsError: false,
                employeeProfileError: "",
                employeeProfileIsSuccess: false,
            }
        case GET_EMPLOYEE_PROFILE_SUCCESS:
            return {
                ...state,
                employeeProfileData: action.payload,
                employeeProfileIsLoading: false,
                employeeProfileIsSuccess: true,
            }
        case GET_EMPLOYEE_PROFILE_FAILURE:
            return {
                ...state,
                employeeProfileIsLoading: false,
                employeeProfileIsError: true,
                employeeProfileError: action.payload,
            }
        case GET_EMPLOYEE_PROFILE_RESET:
            return {
                ...state,
                employeeProfileData: {},
                employeeProfileIsLoading: false,
                employeeProfileIsError: false,
                employeeProfileError: "",
                employeeProfileIsSuccess: false,
            }
        default:
            return state
    }
}

// add employee data
const addEmployeeInitialState = {
    employeeAddedData: {},
    employeeAddDataLoading: false,
    employeeAddedDataIsError: false,
    employeeAddedDataError: "",
    employeeAddedDataIsSuccess: false,
}

export const addEmployeeReducer = (state = addEmployeeInitialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE_TABLE_DATA_REQUEST:
            return {
                ...state,
                employeeAddedData: {},
                employeeAddDataLoading: true,
                employeeAddedDataIsError: false,
                employeeAddedDataError: "",
                employeeAddedDataIsSuccess: false,
            }
        case ADD_EMPLOYEE_TABLE_DATA_SUCCESS:
            return {
                ...state,
                employeeAddedData: action.payload,
                employeeAddDataLoading: false,
                employeeAddedDataIsSuccess: true,
            }
        case ADD_EMPLOYEE_TABLE_DATA_FAILURE:
            return {
                ...state,
                employeeAddDataLoading: false,
                employeeAddedDataIsError: true,
                employeeAddedDataError: action.payload,
            }
        case ADD_EMPLOYEE_TABLE_DATA_RESET:
            return {
                ...state,
                employeeAddedData: {},
                employeeAddDataLoading: false,
                employeeAddedDataIsError: false,
                employeeAddedDataError: "",
                employeeAddedDataIsSuccess: false,
            }
        default:
            return state
    }
}

// edit employee data
const editEmployeeInitialState = {
    employeeEditedData: {},
    employeeEditDataLoading: false,
    employeeEditDataIsError: false,
    employeeEditDataError: "",
    employeeEditDataIsSuccess: false,
}

export const editEmployeeReducer = (state = editEmployeeInitialState, action) => {
    switch (action.type) {
        case EDIT_EMPLOYEE_TABLE_DATA_REQUEST:
            return {
                ...state,
                employeeEditedData: {},
                employeeEditDataLoading: true,
                employeeEditDataIsError: false,
                employeeEditDataError: "",
                employeeEditDataIsSuccess: false,
            }
        case EDIT_EMPLOYEE_TABLE_DATA_SUCCESS:
            return {
                ...state,
                employeeEditedData: action.payload,
                employeeEditDataLoading: false,
                employeeEditDataIsSuccess: true,
            }
        case EDIT_EMPLOYEE_TABLE_DATA_FAILURE:
            return {
                ...state,
                employeeEditDataLoading: false,
                employeeEditDataIsError: true,
                employeeEditDataError: action.payload,
            }
        case EDIT_EMPLOYEE_TABLE_DATA_RESET:
            return {
                ...state,
                employeeEditedData: {},
                employeeEditDataLoading: false,
                employeeEditDataIsError: false,
                employeeEditDataError: "",
                employeeEditDataIsSuccess: false,
            }
        default:
            return state
    }
}

// delete employee
const deleteEmployeeInitialState = {
    employeeDeletedData: {},
    employeeDeleteDataLoading: false,
    employeeDeleteDataIsError: false,
    employeeDeleteDataError: "",
    employeeDeleteDataIsSuccess: false,
}

export const deleteEmployeeReducer = (state = deleteEmployeeInitialState, action) => {
    switch (action.type) {
        case DELETE_EMPLOYEE_TABLE_DATA_REQUEST:
            return {
                ...state,
                employeeDeletedData: {},
                employeeDeleteDataLoading: true,
                employeeDeleteDataIsError: false,
                employeeDeleteDataError: "",
                employeeDeleteDataIsSuccess: false,
            }
        case DELETE_EMPLOYEE_TABLE_DATA_SUCCESS:
            return {
                ...state,
                employeeDeletedData: action.payload,
                employeeDeleteDataLoading: false,
                employeeDeleteDataIsSuccess: true,
            }
        case DELETE_EMPLOYEE_TABLE_DATA_FAILURE:
            return {
                ...state,
                employeeDeleteDataLoading: false,
                employeeDeleteDataIsError: true,
                employeeDeleteDataError: action.payload,
            }
        case DELETE_EMPLOYEE_TABLE_DATA_RESET:
            return {
                ...state,
                employeeDeletedData: {},
                employeeDeleteDataLoading: false,
                employeeDeleteDataIsError: false,
                employeeDeleteDataError: "",
                employeeDeleteDataIsSuccess: false,
            }

        default:
            return state
    }
}