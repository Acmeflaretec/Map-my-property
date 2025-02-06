import React from "react";
import { Dialog, DialogTitle, Grid, IconButton } from "@mui/material";
import { Icons } from "components/Property/Icons.jsx";
import PropTypes from "prop-types";
import Typography from "components/Typography";

const IconPickerPopup = ({ open, onClose, onSelectIcon }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Select an Icon</DialogTitle>
      <Grid container spacing={2} px={2} pb={4}>
        {Object.entries(Icons).map(([iconName, IconComponent]) => (
          <Grid
            item
            xs={4}
            sm={3}
            md={2}
            key={iconName}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <IconButton onClick={() => onSelectIcon(iconName)}>
              <IconComponent width="30" height="30" />
            </IconButton>
            <Typography
              variant="caption"
              color="secondary"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100px",
                text: "center",
              }}
            >
              {iconName}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Dialog>
  );
};

IconPickerPopup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelectIcon: PropTypes.func.isRequired,
};

export default IconPickerPopup;
