import { Autocomplete, Button, Grid, TextField, IconButton, Rating } from '@mui/material'
import Box from 'components/Box'
import Input from 'components/Input'
import PageLayout from 'layouts/PageLayout'
import React, { useState } from 'react'
import Typography from 'components/Typography'
import { useGetCategory, useAddProjects,useGetSelectBuilders } from 'queries/ProductQuery'
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
    FAQs: [{ questions: '', answer: '' }],
    reviews: [{ name: '', rating: 0, review: '', src: '' }],
    masterPlan: [{ title: '', desc: '', src: '' }],
    imageGallery: [{ title: '', desc: '', src: '' }],
    floorPlans: [{ title: '', desc: '', src: '' }],
    accommodation: [{ unit: '', area: '', price: '' }],
    features: [{ title: '', items: [{ text: '', helpertext: '', icon: '' }] }]
  })
  const [builder, setBuilders] = useState()
  const { data, isLoading } = useGetCategory({ pageNo: 1, pageCount: 100 });
  const { mutateAsync: AddProjects, isLoading: loading } = useAddProjects()
  const { data:build } = useGetSelectBuilders({ pageNo: 1, pageCount: 100 });
  const handleChange = (e) => {
    setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [disable, setDisable] = useState(false)
  const [iconPickerOpen, setIconPickerOpen] = useState(false);
  const [selectedIconField, setSelectedIconField] = useState({});

  console.log('selectedIconField', selectedIconField);


  const [category, setCategory] = useState()

  const handleSubmit = () => {
    let flag = true

    try {
      if (!details?.title) {
        return toast.error("title is required")
      }
      if (!details?.subtitle) {
        return toast.error("subtitle is required")
      }
      if (!category?._id) {
        return toast.error("category is required")
      }
      if (!builder?._id) {
        return toast.error("builder is required")
      }
      if (!details?.imageGallery[0]?.title) {
        return toast.error("imageGallery is required")
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
      setDisable(true)
      const formData = new FormData();
      for (const key in details) {
        if (details.hasOwnProperty(key) && !['ExpertOpinions', 'Bedrooms', 'Areas', 'features',
          'FAQs', 'reviews', 'imageGallery', 'floorPlans', 'accommodation', 'masterPlan'].includes(key)) {
          formData.append(key, details[key]);
        }
      }
      formData.append('category', category?._id);
      formData.append('builder', builder?._id);

      details.features.forEach(feature => {
        feature.items.forEach(item => {
          formData.append(`features[${feature.title}][]`, JSON.stringify(item));
        });
      });
      ['ExpertOpinions', 'Bedrooms', 'Areas'].forEach(field => {
        details[field].forEach(value => {
          if (value) {
            formData.append(field, value);
          }
        });
      });

      details?.FAQs?.forEach(si => {
        if (si.questions === '') {

        } else {
          formData.append('questions', si.questions);
          formData.append('answer', si.answer);
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

  const handleFeaturesChange = (index, key, value) => {
    const updatedFeatures = [...details.features];
    updatedFeatures[index][key] = value;
    setDetails({ ...details, features: updatedFeatures });
  };

  const handleFeatureItemsChange = (featureIndex, itemIndex, key, value) => {
    const updatedItems = [...details.features[featureIndex].items];
    updatedItems[itemIndex] = { ...updatedItems[itemIndex], [key]: value };
    const updatedFeatures = [...details.features];
    updatedFeatures[featureIndex].items = updatedItems;
    setDetails({ ...details, features: updatedFeatures });
  };

  const handleAddFeature = () => setDetails(prev => ({ ...prev, features: [...prev.features, { title: '', items: [{ text: '', helpertext: '', icon: '' }] }] }));

  const handleRemoveFeature = (index) => {
    const updatedFeatures = details.features.filter((_, i) => i !== index);
    setDetails({ ...details, features: updatedFeatures });
  };

  const handleAddFeatureItem = (featureIndex) => {
    const updatedItems = [...details.features[featureIndex].items, { text: '', helpertext: '', icon: '' }];
    const updatedFeatures = [...details.features];
    updatedFeatures[featureIndex].items = updatedItems;
    setDetails({ ...details, features: updatedFeatures });
  };

  const handleRemoveFeatureItem = (featureIndex, itemIndex) => {
    const updatedItems = details.features[featureIndex].items.filter((_, i) => i !== itemIndex);
    const updatedFeatures = [...details.features];
    updatedFeatures[featureIndex].items = updatedItems;
    setDetails({ ...details, features: updatedFeatures });
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



  const handleIconPickerOpen = (featureIndex, itemIndex) => {
    setSelectedIconField({ featureIndex, itemIndex });
    setIconPickerOpen(true);
  };

  const handleIconPickerClose = () => {
    setIconPickerOpen(false);
  };

  const handleIconSelect = (iconName) => {
    const { featureIndex, itemIndex } = selectedIconField;
    const updatedFeatures = [...details.features];
    const updatedItems = [...updatedFeatures[featureIndex].items];
    updatedItems[itemIndex] = { ...updatedItems[itemIndex], icon: iconName };
    updatedFeatures[featureIndex].items = updatedItems;
    setDetails(prev => ({ ...prev, features: updatedFeatures }));
    setIconPickerOpen(false);
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
  // console.log('builders', builder);

  return (
    <PageLayout
      title={'Add Projects'}
    >
      <Grid container spacing={5} display={'flex'} direction={'row'} p={8} >
        <Grid item container spacing={2} xs={12} >
          <Grid item xs={12} >
            <Input
              required
              placeholder="Item Title"
              id="title"
              name="title"
              value={details?.title || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required
              placeholder="Item sub title"
              id="subtitle"
              name="subtitle"
              value={details?.subtitle || ''}
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
          <Grid item xs={12} sm={12}>
            <Autocomplete
              id="Builders-select"
              options={build?.data}
              value={builder}
              onChange={(event, newValue) => {
                setBuilders(newValue);
              }}
              autoHighlight
              getOptionLabel={(option) => option.title}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`${process.env.REACT_APP_API_URL}/uploads/${option?.image}`}
                  />
                  <Typography color="inherit" variant="caption">
                    {option?.title} <br />
                    {option?.subtitle}
                  </Typography>
                  <Typography sx={{ ml: 'auto' }} color={option?.isAvailable ? 'success' : 'error'} variant="caption">
                    {option?.isAvailable ? 'available' : 'NA'}
                  </Typography>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Choose a builder"
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
              type='number'
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
              type='number'
              placeholder="Max Price"
              id="maxPrice"
              name="maxPrice"
              value={details.maxPrice}
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




          <Grid item xs={12}>
            {details.features.map((feature, index) => (
              <Box key={index} mt={2} p={2} border={1}>
                <Typography variant="h6">Feature Title</Typography>
                <TextField fullWidth placeholder="Feature Title" value={feature.title} onChange={(e) => handleFeaturesChange(index, 'title', e.target.value)} />
                {feature.items.map((item, itemIndex) => (
                  <Box key={itemIndex} display="flex" alignItems="center" mt={1}>
                    {/* <IconButton onClick={() => setIconPickerOpen(true) && setSelectedIconField({ featureIndex: index, itemIndex })}> */}
                    <IconButton onClick={() => handleIconPickerOpen(index, itemIndex)}>
                      {Icons[item.icon] ? Icons[item.icon]({ width: '24px', height: '24px' }) : <Add />}
                    </IconButton>
                    <TextField placeholder="Text" style={{marginRight:'5px'}} value={item.text} onChange={(e) => handleFeatureItemsChange(index, itemIndex, 'text', e.target.value)} fullWidth />
                    <TextField placeholder="Helpertext" value={item.helpertext} onChange={(e) => handleFeatureItemsChange(index, itemIndex, 'helpertext', e.target.value)} fullWidth />
                    <IconButton onClick={() => handleRemoveFeatureItem(index, itemIndex)}>
                      <Delete />
                    </IconButton>
                  </Box>
                ))}
                <Button onClick={() => handleAddFeatureItem(index)}>Add Item</Button>
                <Button onClick={() => handleRemoveFeature(index)}>Remove Feature</Button>
              </Box>
            ))}
            <Box style={{marginTop:'10px'}}>
              <Button onClick={handleAddFeature} variant="contained" color="primary" fullWidth className="mt-4">Add Feature</Button>
            </Box>
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
          <FieldSection
            label="Expert Opinions"
            values={details.ExpertOpinions}
            onChange={(index, value) => handleFieldChange('ExpertOpinions', index, value)}
            onAdd={() => handleAddFields('ExpertOpinions')}
            onRemove={(index) => handleRemoveFields('ExpertOpinions', index)}
          />
          <FieldSection
            label="Bedrooms (BHK)"
            values={details.Bedrooms}
            onChange={(index, value) => handleFieldChange('Bedrooms', index, value)}
            onAdd={() => handleAddFields('Bedrooms')}
            onRemove={(index) => handleRemoveFields('Bedrooms', index)}
          />

          <FieldSection
            label="Area (sq/ft)"
            values={details.Areas}
            onChange={(index, value) => handleFieldChange('Areas', index, value)}
            onAdd={() => handleAddFields('Areas')}
            onRemove={(index) => handleRemoveFields('Areas', index)}
          />

          <Grid item xs={12}>
            <Typography variant="h6">Master Plan</Typography>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <TextField
                placeholder=" Master Plan Title"
                value={details.masterPlan.title}
                style={{ marginRight: '5px' }}
                fullWidth
                onChange={(e) => handleNestedChange("masterPlan", 0, 'title', e.target.value)}
              />
              <TextField
                placeholder="Description"
                value={details.masterPlan.desc}
                fullWidth
                onChange={(e) => handleNestedChange("masterPlan", 0, 'desc', e.target.value)}
              />
            </Box>
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
              <Typography variant="h6">{field.replace(/([A-Z])/g, ' $1').trim()}</Typography>
              {details[field].map((item, index) => (
                <Box key={index} marginBottom={1}>
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




