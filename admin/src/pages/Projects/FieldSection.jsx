import React from "react";
import {   Typography, TextField, Button, IconButton, Box,Grid} from '@mui/material'
// import Box from 'components/Box'
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Input from 'components/Input';

const FieldSection = ({ label, values, onChange, onAdd, onRemove }) => (
    <Grid item xs={12}>
      <Typography variant="h6">{label}</Typography>
      {values?.map((value, index) => (
        <Box key={index} display="flex" alignItems="center" mt={1}>
          <Input
            placeholder={`${label} ${index + 1}`}
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            fullWidth
            type={label === "Area (sq/ft)" && 'number'}
          />
          {values?.length > 1 && (
            <IconButton onClick={() => onRemove(index)}>
              <Delete />
            </IconButton>
          )}
        </Box>
      ))}
      <Button onClick={onAdd} variant="contained" color="primary" fullWidth style={{marginTop:'10px'}}>
        Add {label}
      </Button>
    </Grid>
  );


  FieldSection.propTypes = {
    label: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };
  
  export default FieldSection;




