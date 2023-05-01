import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import moment from "moment";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { getCompanyProfile } from "../../redux/actions/companyActions/getCompanyProfile";
import { useDispatch, useSelector } from "react-redux";


const CompanyProfile = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    const { companyProfileData, companyProfileIsLoading, companyProfileIsError, companyProfileError, companyProfileIsSuccess } = useSelector((state) => state.companyProfile);


    useEffect(() => {
        dispatch(getCompanyProfile({ id }))
    }, [id]);

    return companyProfileIsLoading ? (
        <div style={{ width: "100%", marginTop: "20px" }}>
            <CircularProgress />
        </div>
    ) : companyProfileIsError ? (
        <div style={{ width: "100%", marginTop: "20px", textAlign: "center" }}>
            <h1>{companyProfileError}</h1>
        </div>
    ) : companyProfileIsSuccess ? (
        <div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "max-content", margin: "auto" }}>
                    <Card variant="outlined" style={{ marginTop: "20px" }}>
                        <CardContent>
                            <div>
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate("/companiesTable")}
                                >
                                    Back
                                </Button>
                            </div>
                            <div className="text-center">
                                <h3>{companyProfileData?.fname + " " + companyProfileData?.lname}</h3>
                                <h4>Email: {companyProfileData?.email}</h4>
                                <h5>Phone Number: {companyProfileData?.mobile}</h5>
                                <h4>Gender: {companyProfileData?.gender}</h4>
                                <h4>Location: {companyProfileData?.location}</h4>
                                <h4>Status: {companyProfileData?.status}</h4>
                                <h5>
                                    Date Created:-
                                    {moment(companyProfileData?.datecreated).format("DD-MM-YYYY")}
                                </h5>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    ) : ""
}

export default CompanyProfile