import React, { useState } from "react";
import PageLayout from "layouts/PageLayout";
import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const { item } = state;
  const [enquiry, setEnquiry] = useState(item);

  return (
    <PageLayout title="Enquiry Details">
      {!enquiry ? (
        <Typography fontSize={14} sx={{ paddingX: 5 }}>
          Loading...
        </Typography>
      ) : (
        <Grid container spacing={5} display="flex" direction="row" p={4} justifyContent="center">
          <Grid
            item
            container
            alignContent="start"
            width="100%"
            xs={12}
            sm={12}
            md={7}
            lg={5}
            spacing={3}
          >
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Typography fontSize={14} sx={{ width: "150px" }}>
                    Enquired on
                  </Typography>
                  <Typography fontSize={14} sx={{ flex: 1 }}>
                    : &nbsp; {new Date(enquiry?.createdAt).toLocaleDateString()}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Typography fontSize={14} sx={{ width: "150px" }}>
                    Customer Name
                  </Typography>
                  <Typography fontSize={14} sx={{ flex: 1 }}>
                    : &nbsp; {enquiry?.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Typography fontSize={14} sx={{ width: "150px" }}>
                    Phone
                  </Typography>
                  <Typography fontSize={14} sx={{ flex: 1 }}>
                    : &nbsp; <a target="_blank" rel="noreferrer" href={`tel:${enquiry?.contactNumber}`}>{enquiry?.contactNumber}</a>
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Typography fontSize={14} sx={{ width: "150px" }}>
                    Email
                  </Typography>
                  <Typography fontSize={14} sx={{ flex: 1 }}>
                    : &nbsp; <a target="_blank" rel="noreferrer" href={`mailto:${enquiry?.email}`}>{enquiry?.email}</a>
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Typography fontSize={14} sx={{ width: "150px" }}>
                    Loan Assistance
                  </Typography>
                  <Typography fontSize={14} sx={{ flex: 1 }}>
                    : &nbsp; {enquiry?.loanAssistance ? "Yes" : "No"}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Typography fontSize={14} sx={{ width: "150px" }}>
                    BHK Preference
                  </Typography>
                  <Typography fontSize={14} sx={{ flex: 1 }}>
                    : &nbsp; {enquiry?.bhkPreference}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex" }}>
                  <Typography fontSize={14} sx={{ width: "150px" }}>
                    Area Preference
                  </Typography>
                  <Typography fontSize={14} sx={{ flex: 1 }}>
                    : &nbsp; {enquiry?.areaPreference}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body2" py={2} fontWeight={600}>
                Project Details
              </Typography>
              <Typography fontSize={14}>Project Name: {enquiry.projectId?.title} </Typography>
              <Typography fontSize={14}>Location: {enquiry.projectId?.location} </Typography>
              <Typography fontSize={14}>
                <a
                  href={`https://www.mapmyproperty.in/property/${enquiry?.projectId?._id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  view project
                </a>
              </Typography>
              <Typography fontSize={14}>
                <a
                  href={`https://www.mapmyproperty.in/builder/${enquiry?.projectId?.builder}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  view builder details
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </PageLayout>
  );
};

export default Details;
