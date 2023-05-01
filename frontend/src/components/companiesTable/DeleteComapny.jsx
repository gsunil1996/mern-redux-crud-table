import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import NotificationDialog from '../notifications/NotificationDialog';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { deleteCompany, deleteCompanyReset } from '../../redux/actions/companyActions/deleteCompany';
import { getCompanyTable } from '../../redux/actions/companyActions/getCompanyTable';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteComapny = (props) => {

    const dispatch = useDispatch();

    const { deleteCompanyOpen, setDeleteCompanyOpen, tableRowId, page, setCurrentPage } = props;


    const { companyDeletedData, companyDeleteDataLoading, companyDeleteDataIsError, companyDeleteDataError, companyDeleteDataIsSuccess } = useSelector((state) => state.deleteCompanyData);

    const [successMessage, setSuccessMessage] = useState("")
    const [failureMessage, setFailureMessage] = useState("")
    const [notificationOpen, setNotificationOpen] = React.useState(false);

    const handleNotificationClickOpen = () => {
        setNotificationOpen(true);
    };

    const handleNotificationClose = () => {
        setNotificationOpen(false);
        setSuccessMessage("")
        setFailureMessage("")
    };

    const handleDeleteCompanyClose = () => {
        setDeleteCompanyOpen(false)
    }

    const handleComapanyDelete = () => {
        dispatch(deleteCompany({ id: tableRowId }))
    }

    useEffect(() => {

        if (companyDeleteDataIsSuccess) {
            setSuccessMessage("User Deleted Successfully")
            setFailureMessage("")
            handleDeleteCompanyClose()
            handleNotificationClickOpen()
            dispatch(deleteCompanyReset())
            sessionStorage.setItem("companiesPage", page)
            setCurrentPage(page)
            dispatch(getCompanyTable({ search: "", gender: "all", status: "all", sort: "new", page }))
        } else if (companyDeleteDataIsError) {
            setSuccessMessage("")
            setFailureMessage("Something Went Wrong")
            handleNotificationClickOpen()
            dispatch(deleteCompanyReset())
        }

    }, [companyDeleteDataIsSuccess, companyDeleteDataIsError])



    return (
        <div>
            <Dialog
                fullWidth={true}
                maxWidth='sm'
                open={deleteCompanyOpen}
                onClose={handleDeleteCompanyClose}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <div style={{ textAlign: "center" }} >
                        <h3 style={{ marginTop: "0px" }} >Are you sure to delete this user</h3>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }} >
                        <Button variant="contained" color="primary" onClick={handleDeleteCompanyClose} >
                            No
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleComapanyDelete} >
                            {companyDeleteDataLoading ? (
                                <CircularProgress style={{ color: "#fff" }} />
                            ) : (
                                "Yes"
                            )}
                        </Button>
                    </div>

                </DialogContent>

            </Dialog>

            <NotificationDialog notificationOpen={notificationOpen} handleNotificationClose={handleNotificationClose} successMessage={successMessage} failureMessage={failureMessage} />
        </div>
    )
}

export default DeleteComapny