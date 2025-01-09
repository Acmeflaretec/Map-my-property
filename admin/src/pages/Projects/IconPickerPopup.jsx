import React from 'react';
import { Dialog, DialogTitle, Grid, IconButton } from '@mui/material';
import { Icons } from 'components/Property/Icons.tsx';
import PropTypes from 'prop-types';

const IconPickerPopup = ({ open, onClose, onSelectIcon }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Select an Icon</DialogTitle>
            <Grid container spacing={2} p={2}>
                {Object.entries(Icons).map(([iconName, IconComponent]) => (
                    <Grid item xs={4} sm={3} md={2} key={iconName}>
                        <IconButton onClick={() => onSelectIcon(iconName)}>
                            <IconComponent width="30" height="30" />
                        </IconButton>
                        {/* <div style={{ textAlign: 'center', }}>{iconName}</div> */}
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
