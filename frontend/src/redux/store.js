import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { addCompanyTableReducer, deleteCompanyReducer, editCompanyDataReducer, getCompanyProfileReducer, getCompanyTableReducer } from "./reducers/CompanyTableReducer";
import { addEmployeeReducer, deleteEmployeeReducer, editEmployeeReducer, getEmployeeProfileReducer, getEmployeeTableReducer } from "./reducers/employeeTableReducer";

const reducer = combineReducers({
    getCompany: getCompanyTableReducer,
    companyProfile: getCompanyProfileReducer,
    addCompanyData: addCompanyTableReducer,
    editCompanyData: editCompanyDataReducer,
    deleteCompanyData: deleteCompanyReducer,
    getEmployee: getEmployeeTableReducer,
    employeeProfile: getEmployeeProfileReducer,
    addEmployeeData: addEmployeeReducer,
    editEmployeeData: editEmployeeReducer,
    deleteEmployeeData: deleteEmployeeReducer
});

const middlware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlware))
);

export default store;