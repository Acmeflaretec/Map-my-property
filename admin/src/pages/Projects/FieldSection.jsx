import React from "react";
import {   Typography, TextField, Button, IconButton, Box,Grid} from '@mui/material'
// import Box from 'components/Box'
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';

const FieldSection = ({ label, values, onChange, onAdd, onRemove }) => (
    <Grid item xs={12}>
      <Typography variant="h6">{label}</Typography>
      {values?.map((value, index) => (
        <Box key={index} display="flex" alignItems="center" mt={1}>
          <TextField
            placeholder={`${label} ${index + 1}`}
            value={value}
            onChange={(e) => onChange(index, e.target.value)}
            fullWidth
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





//   <Grid item xs={12}>
//                 <Typography variant="h6">Master Plan</Typography>
//                 <Grid marginBottom={1}>
//                   <TextField
//                     placeholder=" Master Plan Title"
//                     value={details?.masterPlan?.title}
//                     style={{ marginRight: '5px' }}
//                     onChange={(e) => setDetails((prev) => ({ ...prev, masterPlan: { ...prev.masterPlan, title: e.target.value } }))}
//                   // onChange={(e) => handleNestedChange("masterPlan", 0, 'title', e.target.value)}
//                   />
//                   <TextField
//                     placeholder="Description"
//                     value={details?.masterPlan?.desc}
//                     onChange={(e) => setDetails((prev) => ({ ...prev, masterPlan: { ...prev.masterPlan, desc: e.target.value } }))}
//                   // onChange={(e) => handleNestedChange("masterPlan", 0, 'desc', e.target.value)}
//                   />
//                 </Grid>
//                 {/* <TextField
//                   type="file"
//                   fullWidth
//                   // onChange={(e) => handleFileChange('masterPlan', 0, e)}
//                   onChange={(e) => handleMasterFileChange(e)}
//                 /> */}
//                 <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
//                   <Button variant="outlined" component="label" style={{ color: 'gray', marginTop: '5px' }}>
//                     Upload Image
//                     <input
//                       type="file"
//                       hidden
//                       onChange={(e) => handleMasterFileChange(e)}
//                     />
//                   </Button>
//                   {details?.masterPlan?.src && (
//                     <Box mt={1}>
//                       <img
//                         src={
//                           typeof (details?.masterPlan?.src) === 'object'
//                             ? URL.createObjectURL(details?.masterPlan?.src)
//                             : `${process.env.REACT_APP_API_URL}/uploads/${details?.masterPlan?.src}`
//                         }
//                         alt={`masterPlan`}
//                         style={{ width: '100%', height: '100px', objectFit: 'cover' }}
//                       />
//                     </Box>
//                   )}
  
//                 </Box>
//               </Grid>
//               {['imageGallery', 'floorPlans', 'accommodation'].map((field) => (
//                 <Grid item xs={12} key={field}>
//                   <Typography variant="h6">{field.replace(/([A-Z])/g, ' $1').trim()}</Typography>
//                   {details[field]?.map((item, index) => (
//                     <Box key={index} display="flex" alignItems="center" marginBottom={1}>
//                       {field !== 'accommodation' && (
//                         <TextField
//                           placeholder="Title"
//                           value={item.title}
//                           required
//                           onChange={(e) => handleNestedChange(field, index, 'title', e.target.value)}
//                           style={{ marginRight: '5px' }}
//                         />
//                       )}
//                       {field !== 'accommodation' && (
//                         <TextField
//                           placeholder="Description"
//                           value={item.desc}
//                           style={{ marginRight: '5px' }}
//                           onChange={(e) => handleNestedChange(field, index, 'desc', e.target.value)}
//                         />
//                       )}
//                       {field !== 'accommodation' && (
//                         // <TextField
//                         //   type="file"
//                         //   onChange={(e) => handleFileChange(field, index, e)}
//                         // />
//                         <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
//                           <Button variant="outlined" component="label" style={{ color: 'gray', marginTop: '5px' }}>
//                             Upload Image
//                             <input
//                               type="file"
//                               hidden
//                               onChange={(e) => handleFileChange(field, index, e)}
//                             />
//                           </Button>
//                           {item.src && (
//                             <Box mt={1}>
//                               <img
//                                 src={
//                                   typeof item.src === 'object'
//                                     ? URL.createObjectURL(item.src)
//                                     : `${process.env.REACT_APP_API_URL}/uploads/${item.src}`
//                                 }
//                                 alt={`${item} ${index + 1}`}
//                                 style={{ width: '100%', height: '100px', objectFit: 'cover' }}
//                               />
//                             </Box>
//                           )}
  
//                         </Box>
//                       )}
//                       {field === 'accommodation' && (
//                         <TextField
//                           placeholder="Unit"
//                           value={item.unit}
//                           style={{ marginRight: '5px' }}
//                           onChange={(e) => handleNestedChange(field, index, 'unit', e.target.value)}
//                         />
//                       )}
//                       {field === 'accommodation' && (
//                         <TextField
//                           placeholder="Area"
//                           value={item.area}
//                           style={{ marginRight: '5px' }}
//                           onChange={(e) => handleNestedChange(field, index, 'area', e.target.value)}
//                         />
//                       )}
//                       {field === 'accommodation' && (
//                         <TextField
//                           placeholder="Price"
//                           value={item.price}
//                           onChange={(e) => handleNestedChange(field, index, 'price', e.target.value)}
//                         />
//                       )}
//                       <IconButton onClick={() => handleRemoveField(field, index)}>
//                         <Delete />
//                       </IconButton>
//                     </Box>
//                   ))}
//                   <Button onClick={() => handleAddField(field)} variant="contained" color="primary" fullWidth className="mt-4">Add {field}</Button>
//                 </Grid>
  
//               ))}