import { Autocomplete, Button, Grid, TextField, IconButton, Rating } from '@mui/material'
import Box from 'components/Box'
import Input from 'components/Input'
import PageLayout from 'layouts/PageLayout'
import React, { useState } from 'react'
import ImageList from './ImageList';
import Typography from 'components/Typography'
import { useGetCategory, useAddProjects } from 'queries/ProductQuery'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Delete, Add } from '@mui/icons-material';
import { Icons } from 'components/Property/Icons.tsx'
import IconPickerPopup from './IconPickerPopup'
import FieldSection from './FieldSection'

const AddProjects = () => {
  const navigat = useNavigate()
  const [details, setDetails] = useState({
    ExpertOpinions: [''],
    Bedrooms: [''],
    Areas: [''],
    configuration: [{ configuration: '', details: '', icon: '' }],
    ApartmentAmenities: [{ text: '', helpertext: '', icon: '' }],
    LocationAdvantages: [{ text: '', helpertext: '', icon: '' }],
    FAQs: [{ questions: '', answer: '' }],
    spec: [{ Specifications: '', details: '', icon: '' }],
    reviews: [{ name: '', rating: 0, review: '', src: '' }],
    masterPlan: [{ title: '', desc: '', src: '' }],
    imageGallery: [{ title: '', desc: '', src: '' }],
    floorPlans: [{ title: '', desc: '', src: '' }],
    accommodation: [{ unit: '', area: '', price: '' }],
  })
  const { data, isLoading } = useGetCategory({ pageNo: 1, pageCount: 100 });
  const { mutateAsync: AddProjects, isLoading: loading } = useAddProjects()
  const handleChange = (e) => {
    setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [disable, setDisable] = useState(false)
  // const [flag, setFlag] = useState(true)

  const [iconPickerOpen, setIconPickerOpen] = useState(false);
  const [selectedIconField, setSelectedIconField] = useState(null);



  const [category, setCategory] = useState()

  const handleSubmit = () => {
    let flag = true
    try {
      if (!details?.name) {
        return toast.error("name is required")
      }
      if (!details?.subheading) {
        return toast.error("name is subheading")
      }
      if (!category?._id) {
        return toast.error("category is required")
      }
      if (!details?.image) {
        return toast.error("image is required")
      }
      if (!details?.minPrice) {
        return toast.error("minPrice is required")
      }
      if (!details?.maxPrice) {
        return toast.error("maxPrice is required")
      }
      if (!details?.description) {
        return toast.error("description is required")
      }
      if (!details?.BuilderDescription) {
        return toast.error("BuilderDescription is required")
      }
      setDisable(true)
      const formData = new FormData();
      details?.image?.forEach((image) => {
        formData.append('images', image, image.name);
      });
      for (const key in details) {
        // if (details.hasOwnProperty(key) && key !== "image" && key !== "spec" && key !== "configuration" && key !== "FAQs" && key !== "ExpertOpinions" && key !== "reviews" && key !== "ApartmentAmenities" && key !== "LocationAdvantages"
        //   && key !== 'imageGallery' && key !== 'floorPlans' && key !== 'accommodation' && key !== 'masterPlan') {
        if (details.hasOwnProperty(key) && !['ExpertOpinions', 'Bedrooms', 'Areas', 'image', 'spec', 'configuration',
          'FAQs', 'reviews', 'ApartmentAmenities', 'LocationAdvantages', 'imageGallery', 'floorPlans', 'accommodation', 'masterPlan'].includes(key)) {
          formData.append(key, details[key]);
        }
      }
      formData.append('category', category?._id);
      // details?.ExpertOpinions?.forEach(fit => {
      //   if (fit === '') {

      //   } else {
      //     return formData.append('ExpertOpinions', fit)
      //   }
      // });
      ['ExpertOpinions', 'Bedrooms', 'Areas'].forEach(field => {
        details[field].forEach(value => {
          if (value) {
            formData.append(field, value);
          }
        });
      });

      details?.configuration?.forEach(si => {
        if (si.configuration === '') {

        } else {
          formData.append('configuration', si.configuration);
          formData.append('configurationDetails', si.details);
          formData.append('configurationIcon', si.icon);
        }

      });
      details?.ApartmentAmenities?.forEach(si => {
        if (si.text === '') {

        } else {
          formData.append('ApartmentText', si.text);
          formData.append('ApartmentHelpertext', si.helpertext);
          formData.append('ApartmentIcon', si.icon);
        }

      });
      details?.LocationAdvantages?.forEach(si => {
        if (si.text === '') {

        } else {
          formData.append('LocationText', si.text);
          formData.append('LocationHelpertext', si.helpertext);
          formData.append('LocationIcon', si.icon);
        }

      });
      details?.FAQs?.forEach(si => {
        if (si.questions === '') {

        } else {
          formData.append('questions', si.questions);
          formData.append('answer', si.answer);
        }

      });
      details?.spec?.forEach(specif => {
        if (specif.Specifications === '') {

        } else {
          formData.append('Specifications', specif.Specifications);
          formData.append('SpecificationsDetails', specif.details);
          formData.append('SpecificationsIcon', specif.icon);
        }
      });
      details?.reviews?.forEach((review, i) => {
        if (review.name === '') {

        } else {
          if (review.src) {
            formData.append(`reviewsName`, review.name);
            formData.append(`reviewsRating`, review.rating);
            formData.append(`reviewsReview`, review.review);
            formData.append(`reviews`, review.src);
          } else {
            toast.error(`reviews ${i + 1} field image is required`)
            // setFlag(false)
            flag = false
            setDisable(false)
          }
        }
      });
      if (details?.masterPlan) {
        if (details.masterPlan[0].title === '') {

        } else {
          if (details.masterPlan[0].src) {
            formData.append(`masterPlan`, details.masterPlan[0].src);
            formData.append(`masterPlanTitle`, details.masterPlan[0].title);
            formData.append(`masterPlanDesc`, details.masterPlan[0].desc);
          } else {
            return toast.error(" masterPlan image is required")
            setDisable(false)
          }

        }
      }
      details?.imageGallery?.forEach((Gallery, i) => {
        if (Gallery.title === '') {

        } else {
          if (Gallery.src) {
            formData.append(`imageGallery`, Gallery.src);
            formData.append(`imageGalleryTitle`, Gallery.title);
            formData.append(`imageGalleryDesc`, Gallery.desc);
          } else {
            toast.error(`image Gallery ${i + 1} field image is required`)
            // setFlag(false)
            flag = false
            setDisable(false)
          }

        }
      });
      details?.floorPlans?.forEach((Plans, i) => {
        if (Plans.title === '') {

        } else {
          if (Plans.src) {
            formData.append(`floorPlans`, Plans.src);
            formData.append(`floorPlansTitle`, Plans.title);
            formData.append(`floorPlansDesc`, Plans.desc);

          } else {
            toast.error(`floor Plans ${i + 1} field image is required`)
            // setFlag(false)
            flag = false
            setDisable(false)
          }

        }
      });
      details?.accommodation?.forEach(unit => {
        if (unit.unit === '') {

        } else {
          formData.append(`accommodationUnit`, unit.unit);
          formData.append(`accommodationArea`, unit.area);
          formData.append(`accommodationPrice`, unit.price);
        }
      });



      if (flag) {
        AddProjects(formData)
          .then((res) => {
            toast.success(res?.message ?? "Projects added");
            setDisable(false)
            navigat('/projects')
          })
          .catch((err) => {
            toast.error(err?.message ?? "Something went wrong");
            setDisable(false)
          });
      }
    } catch (error) {
      setDisable(false)
      console.error(error)
    }
  }



  // const handleExpertOpinionsChange = (index, value) => {
  //   const newfeature = [...details.ExpertOpinions];
  //   newfeature[index] = value;
  //   setDetails(prevData => ({ ...prevData, ExpertOpinions: newfeature }));
  // };
  // const handleAddExpertOpinions = () => {
  //   setDetails(prevData => ({ ...prevData, ExpertOpinions: [...prevData.ExpertOpinions, ''] }));
  // };
  // const handleRemoveExpertOpinions = (index) => {
  //   const newfeature = details.ExpertOpinions.filter((_, i) => i !== index);
  //   setDetails(prevData => ({ ...prevData, ExpertOpinions: newfeature }));
  // };
  const handleFieldChange = (field, index, value) => {
    const updated = [...details[field]];
    updated[index] = value;
    setDetails(prevData => ({ ...prevData, [field]: updated }));
  };

  const handleAddFields = (field) => {
    setDetails(prevData => ({ ...prevData, [field]: [...prevData[field], ''] }));
  };

  const handleRemoveFields = (field, index) => {
    const updated = details[field].filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, [field]: updated }));
  };
  const handleAddconfiguration = () => {
    setDetails(prevData => ({ ...prevData, configuration: [...prevData.configuration, { configuration: '', details: '' }] }));
  };
  const handleconfigurationChange = (index, field, value) => {
    const newconfiguration = [...details.configuration];
    newconfiguration[index] = { ...newconfiguration[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, configuration: newconfiguration }));
  };

  const handleRemoveconfiguration = (index) => {
    const newconfiguration = details.configuration.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, configuration: newconfiguration }));
  };



  const handleApartmentAmenities = () => {
    setDetails(prevData => ({ ...prevData, ApartmentAmenities: [...prevData.ApartmentAmenities, { text: '', helpertext: '' }] }));
  };
  const handleApartmentAmenitiesChange = (index, field, value) => {
    const newApartmentAmenities = [...details.ApartmentAmenities];
    newApartmentAmenities[index] = { ...newApartmentAmenities[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, ApartmentAmenities: newApartmentAmenities }));
  };

  const handleRemoveApartmentAmenities = (index) => {
    const newApartmentAmenities = details.ApartmentAmenities.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, ApartmentAmenities: newApartmentAmenities }));
  };



  const handleLocationAdvantages = () => {
    setDetails(prevData => ({ ...prevData, LocationAdvantages: [...prevData.LocationAdvantages, { text: '', helpertext: '' }] }));
  };
  const handleLocationAdvantagesChange = (index, field, value) => {
    const newLocationAdvantages = [...details.LocationAdvantages];
    newLocationAdvantages[index] = { ...newLocationAdvantages[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, LocationAdvantages: newLocationAdvantages }));
  };

  const handleRemoveLocationAdvantages = (index) => {
    const newLocationAdvantages = details.LocationAdvantages.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, LocationAdvantages: newLocationAdvantages }));
  };


  const handleAddFAQs = () => {
    setDetails(prevData => ({ ...prevData, FAQs: [...prevData.FAQs, { questions: '', answer: '' }] }));
  };
  const handleFAQsChange = (index, field, value) => {
    const newFAQs = [...details.FAQs];
    newFAQs[index] = { ...newFAQs[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, FAQs: newFAQs }));
  };

  const handleRemoveFAQs = (index) => {
    const newFAQs = details.FAQs.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, FAQs: newFAQs }));
  };

  const handleAddSpecifications = () => {
    setDetails(prevData => ({ ...prevData, spec: [...prevData.spec, { Specifications: '', details: '' }] }));
  };
  const handleSpecificationsChange = (index, field, value) => {
    const newconfiguration = [...details.spec];
    newconfiguration[index] = { ...newconfiguration[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, spec: newconfiguration }));
  };

  const handleSpecificationsRemove = (index) => {
    const newconfiguration = details.spec.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, spec: newconfiguration }));
  };


  const handleAddReview = () => {
    setDetails((prevData) => ({
      ...prevData,
      reviews: [...prevData.reviews, { name: '', rating: 0, review: '' }],
    }));
  };

  const handleReviewChange = (reviewIndex, field, value) => {
    const newReviews = [...details.reviews];
    newReviews[reviewIndex] = { ...newReviews[reviewIndex], [field]: value };
    setDetails((prevData) => ({ ...prevData, reviews: newReviews }));
  };

  const handleRemoveReview = (reviewIndex) => {
    const newReviews = details.reviews.filter((_, i) => i !== reviewIndex);
    setDetails((prevData) => ({ ...prevData, reviews: newReviews }));
  };



  const handleIconPickerOpen = (field, index) => {
    setSelectedIconField({ field, index });
    setIconPickerOpen(true);
  };

  const handleIconPickerClose = () => {
    setIconPickerOpen(false);
  };

  const handleIconSelect = (iconName) => {
    const { field, index } = selectedIconField;
    const updatedData = [...details[field]];
    updatedData[index] = { ...updatedData[index], icon: iconName };
    setDetails(prevData => ({ ...prevData, [field]: updatedData }));
    handleIconPickerClose();
  };

  const handleNestedChange = (field, index, subField, value) => {
    const updated = [...details[field]];
    updated[index][subField] = value;
    setDetails((prev) => ({ ...prev, [field]: updated }));
  };

  const handleFileChange = (field, index, e) => {
    const file = e.target.files[0];
    handleNestedChange(field, index, 'src', file);
  };

  const handleAddField = (field) => {
    const newItem = field === 'accommodation' ? { unit: '', area: '', price: '' } : { title: '', desc: '', src: '' };
    setDetails((prev) => ({ ...prev, [field]: [...prev[field], newItem] }));
  };

  const handleRemoveField = (field, index) => {
    const updated = details[field].filter((_, i) => i !== index);
    setDetails((prev) => ({ ...prev, [field]: updated }));
  };


  console.log('details', details);

  return (
    <PageLayout
      title={'Add Projects'}
    >
      <Grid container spacing={5} display={'flex'} direction={'row'} p={8} >
        <Grid item container spacing={2} xs={12} >
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              placeholder="Item name"
              id="name"
              name="name"
              value={details?.name || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required
              placeholder="Item subheading"
              id="subheading"
              name="subheading"
              value={details?.subheading || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Autocomplete
              id="category-select"
              options={data?.data}
              value={category}
              onChange={(event, newValue) => {
                setCategory(newValue);
              }}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`${process.env.REACT_APP_API_URL}/uploads/${option?.image}`}
                  />
                  <Typography color="inherit" variant="caption">
                    {option?.name} <br />
                    {option?.desc}
                  </Typography>
                  <Typography sx={{ ml: 'auto' }} color={option?.isAvailable ? 'success' : 'error'} variant="caption">
                    {option?.isAvailable ? 'available' : 'NA'}
                  </Typography>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Choose a category"
                  inputProps={{
                    ...params.inputProps,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="description"
              placeholder="More about"
              name="description"
              value={details?.description || ''}
              onChange={handleChange}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              required
              placeholder="Min Price"
              id="minPrice"
              name="minPrice"
              value={details.minPrice}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <Input
              required
              placeholder="Max Price"
              id="maxPrice"
              name="maxPrice"
              value={details.price}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Input
              required
              placeholder="URL (href)"
              id="href"
              name="href"
              value={details.href}
              onChange={handleChange}
            />
          </Grid>


          <Grid item xs={12} >
            <Grid container direction="row">
              {details?.configuration?.map((configuration, index) => (
                <Grid item xs={12} key={index}>
                  <Box key={index} display="flex" alignItems="center">
                    <IconButton onClick={() => handleIconPickerOpen('configuration', index)}>
                      {Icons[configuration.icon] ? Icons[configuration.icon]({ width: '24px', height: '24px' }) : <Add />}
                    </IconButton>

                    <TextField
                      placeholder={`Configuration ${index + 1}`}
                      value={configuration.configuration}
                      onChange={(e) => handleconfigurationChange(index, 'configuration', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      style={{ marginRight: '5px' }}
                    />
                    <TextField
                      placeholder="details"
                      value={configuration.details}
                      onChange={(e) => handleconfigurationChange(index, 'details', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                    />
                    {details.configuration.length > 1 && (
                      <IconButton onClick={() => handleRemoveconfiguration(index)}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              ))}
              <Button onClick={handleAddconfiguration} variant="contained" color="primary" fullWidth className="mt-4">
                Add Configuration
              </Button>
            </Grid>
          </Grid>



          <Grid item xs={12} >
            <Grid container direction="row">
              {details?.ApartmentAmenities?.map((ApartmentAmenities, index) => (
                <Grid item xs={12} key={index}>
                  <Box key={index} display="flex" alignItems="center">
                    <IconButton onClick={() => handleIconPickerOpen('ApartmentAmenities', index)}>
                      {Icons[ApartmentAmenities.icon] ? Icons[ApartmentAmenities.icon]({ width: '24px', height: '24px' }) : <Add />}
                    </IconButton>

                    <TextField
                      placeholder={`Apartment Amenities ${index + 1}`}
                      value={ApartmentAmenities.text}
                      onChange={(e) => handleApartmentAmenitiesChange(index, 'text', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      style={{ marginRight: '5px' }}
                    />
                    <TextField
                      placeholder="details"
                      value={ApartmentAmenities.helpertext}
                      onChange={(e) => handleApartmentAmenitiesChange(index, 'helpertext', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                    />
                    {details.ApartmentAmenities.length > 1 && (
                      <IconButton onClick={() => handleRemoveApartmentAmenities(index)}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              ))}
              <Button onClick={handleApartmentAmenities} variant="contained" color="primary" fullWidth className="mt-4">
                Add Apartment Amenities
              </Button>
            </Grid>
          </Grid>


          <Grid item xs={12} >
            <Grid container direction="row">
              {details?.LocationAdvantages?.map((LocationAdvantages, index) => (
                <Grid item xs={12} key={index}>
                  <Box key={index} display="flex" alignItems="center">
                    <IconButton onClick={() => handleIconPickerOpen('LocationAdvantages', index)}>
                      {Icons[LocationAdvantages.icon] ? Icons[LocationAdvantages.icon]({ width: '24px', height: '24px' }) : <Add />}
                    </IconButton>

                    <TextField
                      placeholder={`Location Advantages ${index + 1}`}
                      value={LocationAdvantages.text}
                      onChange={(e) => handleLocationAdvantagesChange(index, 'text', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      style={{ marginRight: '5px' }}
                    />
                    <TextField
                      placeholder="details"
                      value={LocationAdvantages.helpertext}
                      onChange={(e) => handleLocationAdvantagesChange(index, 'helpertext', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                    />
                    {details.LocationAdvantages.length > 1 && (
                      <IconButton onClick={() => handleRemoveLocationAdvantages(index)}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              ))}
              <Button onClick={handleLocationAdvantages} variant="contained" color="primary" fullWidth className="mt-4">
                Add Location Advantages
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Input
              required
              placeholder="Location Embed url"
              id="location"
              name="location"
              value={details?.location || ''}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} >
            <Grid container direction="row">
              {details?.spec?.map((spec, index) => (
                <Grid item xs={12} key={index}>
                  <Box key={index} display="flex" alignItems="center">
                    <IconButton onClick={() => handleIconPickerOpen('spec', index)}>
                      {Icons[spec.icon] ? Icons[spec.icon]({ width: '24px', height: '24px' }) : <Add />}
                    </IconButton>
                    <TextField
                      placeholder={`Specifications Type ${index + 1}`}
                      value={spec.Specifications}
                      onChange={(e) => handleSpecificationsChange(index, 'Specifications', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      style={{ marginRight: '5px' }}
                    />
                    <TextField
                      placeholder="Details"
                      value={spec.details}
                      onChange={(e) => handleSpecificationsChange(index, 'details', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                    />
                    {details.spec.length > 1 && (
                      <IconButton onClick={() => handleSpecificationsRemove(index)}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              ))}
              <Button onClick={handleAddSpecifications} variant="contained" color="primary" fullWidth className="mt-4">
                Add Specifications
              </Button>
            </Grid>
          </Grid>


          <Grid item xs={12}>
            {/* {details?.ExpertOpinions?.map((ExpertOpinions, index) => (
              <Box key={index} display="flex" alignItems="center">
                <TextField
                  placeholder={`Expert Opinions ${index + 1}`}
                  value={ExpertOpinions}
                  onChange={(e) => handleExpertOpinionsChange(index, e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
                {details.ExpertOpinions.length > 1 && (
                  <IconButton onClick={() => handleRemoveExpertOpinions(index)}>
                    <Delete />
                  </IconButton>
                )}
              </Box>
            ))}
            <Button onClick={handleAddExpertOpinions} variant="contained" color="primary" fullWidth className="mt-4">
              Expert Opinions
            </Button> */}
            <FieldSection
              label="Expert Opinions"
              values={details.ExpertOpinions}
              onChange={(index, value) => handleFieldChange('ExpertOpinions', index, value)}
              onAdd={() => handleAddFields('ExpertOpinions')}
              onRemove={(index) => handleRemoveFields('ExpertOpinions', index)}
            />
          </Grid>
          <FieldSection
            label="Bedrooms (BHK)"
            values={details.Bedrooms}
            onChange={(index, value) => handleFieldChange('Bedrooms', index, value)}
            onAdd={() => handleAddField('Bedrooms')}
            onRemove={(index) => handleRemoveField('Bedrooms', index)}
          />

          <FieldSection
            label="Area (sq/ft)"
            values={details.Areas}
            onChange={(index, value) => handleFieldChange('Areas', index, value)}
            onAdd={() => handleAddField('Areas')}
            onRemove={(index) => handleRemoveField('Areas', index)}
          />

          <Grid item xs={12}>
            <Input
              id="BuilderDescription"
              placeholder="More about the Builder"
              name="BuilderDescription"
              value={details?.BuilderDescription || ''}
              onChange={handleChange}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              placeholder="Ongoing Projects"
              name="ongoing"
              value={details?.ongoing || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              placeholder="Upcoming Projects"
              name="upcoming"
              value={details?.upcoming || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Input
              placeholder="Completed Projects"
              name="completed"
              value={details?.completed || ''}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Master Plan</Typography>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <TextField
                placeholder=" Master Plan Title"
                value={details.masterPlan.title}
                style={{ marginRight: '5px' }}
                fullWidth
                // onChange={(e) => setDetails((prev) => ({ ...prev, masterPlan: { ...prev.masterPlan, title: e.target.value } }))}
                onChange={(e) => handleNestedChange("masterPlan", 0, 'title', e.target.value)}
              />
              <TextField
                placeholder="Description"
                value={details.masterPlan.desc}
                fullWidth
                // onChange={(e) => setDetails((prev) => ({ ...prev, masterPlan: { ...prev.masterPlan, desc: e.target.value } }))}
                onChange={(e) => handleNestedChange("masterPlan", 0, 'desc', e.target.value)}
              />
            </Box>
            {/* <TextField
              type="file"
              fullWidth
              onChange={(e) => handleFileChange('masterPlan', 0, e)}
            /> */}
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Button variant="outlined" component="label" style={{ color: 'gray', marginTop: '5px' }}>
                Upload Image
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange('masterPlan', 0, e)}
                />
              </Button>
              {details?.masterPlan[0]?.src && (
                <Box mt={1}>
                  <img
                    src={
                      typeof (details?.masterPlan[0]?.src) === 'object'
                        ? URL.createObjectURL(details?.masterPlan[0]?.src)
                        : `${process.env.REACT_APP_API_URL}/uploads/${details?.masterPlan[0]?.src}`
                    }
                    alt={`masterPlan`}
                    style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                  />
                </Box>
              )}

            </Box>
          </Grid>
          {['imageGallery', 'floorPlans', 'accommodation'].map((field) => (
            <Grid item xs={12} key={field}>
              {/* <Grid container> */}

              <Typography variant="h6">{field.replace(/([A-Z])/g, ' $1').trim()}</Typography>
              {details[field].map((item, index) => (
                <Box key={index}  marginBottom={1}>
                  <Box display="flex" alignItems="center">
                    {field !== 'accommodation' && (
                      <TextField
                        placeholder="Title"
                        value={item.title}
                        required
                        onChange={(e) => handleNestedChange(field, index, 'title', e.target.value)}
                        style={{ marginRight: '5px' }}
                        fullWidth
                      />
                    )}
                    {field !== 'accommodation' && (
                      <TextField
                        placeholder="Description"
                        value={item.desc}
                        style={{ marginRight: '5px' }}
                        onChange={(e) => handleNestedChange(field, index, 'desc', e.target.value)}
                        fullWidth
                      />
                    )}

                    {field === 'accommodation' && (
                      <TextField
                        placeholder="Unit"
                        value={item.unit}
                        style={{ marginRight: '5px' }}
                        onChange={(e) => handleNestedChange(field, index, 'unit', e.target.value)}
                        fullWidth
                      />
                    )}
                    {field === 'accommodation' && (
                      <TextField
                        placeholder="Area"
                        value={item.area}
                        style={{ marginRight: '5px' }}
                        onChange={(e) => handleNestedChange(field, index, 'area', e.target.value)}
                        fullWidth
                      />
                    )}
                    {field === 'accommodation' && (
                      <TextField
                        placeholder="Price"
                        value={item.price}
                        onChange={(e) => handleNestedChange(field, index, 'price', e.target.value)}
                        fullWidth
                      />
                    )}
                  </Box>
                  {field !== 'accommodation' && (
                    // <TextField
                    //   type="file"
                    //   onChange={(e) => handleFileChange(field, index, e)}
                    // />
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                      <Button variant="outlined" component="label" style={{ color: 'gray', marginTop: '5px' }}>
                        Upload Image
                        <input
                          type="file"
                          hidden
                          onChange={(e) => handleFileChange(field, index, e)}
                        />
                      </Button>
                      {item.src && (
                        <Box mt={1}>
                          <img
                            src={
                              typeof item.src === 'object'
                                ? URL.createObjectURL(item.src)
                                : `${process.env.REACT_APP_API_URL}/uploads/${item.src}`
                            }
                            alt={`${item} ${index + 1}`}
                            style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                          />
                        </Box>
                      )}

                    </Box>
                  )}
                  <IconButton onClick={() => handleRemoveField(field, index)} >
                    <Delete />
                  </IconButton>
                </Box>
              ))}
              <Button onClick={() => handleAddField(field)} variant="contained" color="primary" fullWidth className="mt-4">Add {field}</Button>
            </Grid>


          ))}




          <Grid item xs={12} >
            <Grid container direction="row">
              {details?.FAQs?.map((FAQs, index) => (
                <Grid item xs={12} key={index}>
                  <Box key={index} display="flex" alignItems="center">
                    <TextField
                      placeholder={`questions ${index + 1}`}
                      value={FAQs.questions}
                      onChange={(e) => handleFAQsChange(index, 'questions', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      style={{ marginRight: '5px' }}
                    />
                    <TextField
                      placeholder="answer"
                      value={FAQs.answer}
                      onChange={(e) => handleFAQsChange(index, 'answer', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                    />
                    {details.FAQs.length > 1 && (
                      <IconButton onClick={() => handleRemoveFAQs(index)}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              ))}
              <Button onClick={handleAddFAQs} variant="contained" color="primary" fullWidth className="mt-4">
                Add FAQs
              </Button>
            </Grid>
          </Grid>


          <Grid item xs={12}>
            <Typography variant="h6">Reviews</Typography>
            {details.reviews.map((review, index) => (
              <Box key={index} mt={2} display="flex" flexDirection="column">
                <TextField
                  placeholder="Reviewer Name"
                  value={review.name}
                  onChange={(e) =>
                    handleReviewChange(index, 'name', e.target.value)
                  }
                  fullWidth
                  margin="normal"
                />
                <Rating
                  value={review.rating}
                  onChange={(e, value) =>
                    handleReviewChange(index, 'rating', value)
                  }
                />
                {/* <TextField
                  type="file"
                  fullWidth
                  onChange={(e) => handleFileChange('reviews', index, e)}
                /> */}
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                  <Button variant="outlined" component="label" style={{ color: 'gray', marginTop: '5px' }}>
                    Upload Image
                    <input
                      type="file"
                      hidden
                      onChange={(e) => handleFileChange('reviews', index, e)}
                    />
                  </Button>
                  {review.src && (
                    <Box mt={1}>
                      <img
                        src={
                          typeof review.src === 'object'
                            ? URL.createObjectURL(review.src)
                            : `${process.env.REACT_APP_API_URL}/uploads/${review.src}`
                        }
                        alt={`Review ${index + 1}`}
                        style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                      />
                    </Box>
                  )}

                </Box>
                <TextField
                  placeholder="Review"
                  value={review.review}
                  onChange={(e) =>
                    handleReviewChange(index, 'review', e.target.value)
                  }
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                />
                {details.reviews.length > 1 && (
                  <IconButton onClick={() => handleRemoveReview(index)}>
                    <Delete />
                  </IconButton>
                )}
              </Box>
            ))}
            <Button
              onClick={handleAddReview}
              variant="contained"
              color="primary"
              className="mt-4"
              fullWidth
            >
              Add Review
            </Button>
          </Grid>

        </Grid>
        <Grid item container spacing={2} xs={12} sm={12} md={6} py={5}>
          {/* <Grid xs={12}>
            <ImageList data={details?.image} dispatch={setDetails} />
          </Grid> */}
          <Grid item xs={12} sm={8}></Grid>
          <Grid item xs={12} sm={4} mt={'auto'}>
            <Button sx={{ mr: 0, width: '100%' }} onClick={handleSubmit} disabled={disable} variant='contained'>
              Add Projects
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <IconPickerPopup
        open={iconPickerOpen}
        onClose={handleIconPickerClose}
        onSelectIcon={handleIconSelect}
      />

    </PageLayout>
  )
}



export default AddProjects