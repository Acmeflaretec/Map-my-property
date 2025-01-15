import { Button, Grid, TextField, ToggleButton, Rating, IconButton, Box } from '@mui/material';
import Input from 'components/Input';
import PageLayout from 'layouts/PageLayout';
import React, { useEffect, useState } from 'react';
import Typography from 'components/Typography';
import toast from 'react-hot-toast';
import { useGetProjectsById, useUpdateProjects, useDeleteProjects } from 'queries/ProductQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { Delete, Add } from '@mui/icons-material';
import { Icons } from 'components/Property/Icons.tsx'
import IconPickerPopup from './IconPickerPopup'
import FieldSection from './FieldSection';

const EditProjects = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { data, isLoading } = useGetProjectsById({ id });
  const [iconPickerOpen, setIconPickerOpen] = useState(false);
  const [selectedIconField, setSelectedIconField] = useState(null);


  useEffect(() => {
    if (data?.data) {
      setDetails(data.data);
    }
  }, [data]);

  const { mutateAsync: updateProjects, isLoading: loading } = useUpdateProjects();
  const { mutateAsync: deleteProjects, isLoading: deleting } = useDeleteProjects();

  const handleChange = (e) => {
    setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    let flag = true
    try {
      if (!details?.title) {
        return toast.error("title is required")
      }
      if (!details?.subtitle) {
        return toast.error("subtitle is required")
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
      const formData = new FormData();
      for (const key in details) {
        if (details.hasOwnProperty(key) && !['expertOpinions', 'bedrooms', 'areas', 'features',
          'faqs', 'testimonials', 'imageGallery', 'plans', 'accommodation', 'masterPlan'].includes(key)) {
          formData.append(key, details[key]);
        }
      }
      details.features.forEach(feature => {
        feature.items.forEach(item => {
          formData.append(`features[${feature.title}][]`, JSON.stringify(item));
        });
      });
      ['expertOpinions', 'bedrooms', 'areas'].forEach(field => {
        details[field].forEach(value => {
          if (value) {
            formData.append(field, value);
          }
        });
      });

      details?.faqs?.forEach(si => {
        if (si.questions === '') {

        } else {
          formData.append('questions', si.questions);
          formData.append('answer', si.answer);
        }

      }); 
      details?.testimonials?.forEach((review, i) => {
        if (review.name === '') {

        } else {
          if (review.image) {
            formData.append(`reviewsName`, review.name);
            formData.append(`reviewsRating`, review.rating);
            formData.append(`reviewsReview`, review.review);
            formData.append(`reviews`, review.image);
            formData.append(`reviewsImagePocision`, typeof (review.image) === 'object' ? '' : review.image);

          } else {
            toast.error(`reviews ${i + 1} field image is required`)
            flag = false
            setDisable(false)
          }
        }
      });
      if (details?.masterPlan) {
        if (details.masterPlan.title === '') {

        } else {
          if (details.masterPlan.src) {
            formData.append(`masterPlan`, details.masterPlan.src);
            formData.append(`masterPlanTitle`, details.masterPlan.title);
            formData.append(`masterPlanDesc`, details.masterPlan.desc);
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
            formData.append(`imageGalleryPocision`, typeof (Gallery.src) === 'object' ? '' : Gallery.src);
          } else {
            toast.error(`image Gallery ${i + 1} field image is required`)
            flag = false
            setDisable(false)
          }

        }
      });
      details?.plans?.forEach((Plans, i) => {
        if (Plans.title === '') {

        } else {
          if (Plans.src) {
            console.log("df", typeof (Plans.src) === 'object');

            formData.append(`floorPlans`, Plans.src);
            formData.append(`floorPlansTitle`, Plans.title);
            formData.append(`floorPlansDesc`, Plans.desc);
            formData.append(`floorPlansimagePocision`, typeof (Plans.src) === 'object' ? '' : Plans.src);
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
        updateProjects(formData)
          .then((res) => {
            if (res) {
              toast.success(res?.message ?? "Projects updated successfully");
              navigate('/projects');
            }
          })
          .catch((err) => {
            toast.error(err?.message ?? "Something went wrong");
          });
      }
    } catch (error) {
      console.error(error);
    }
  };
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
    setDetails(prevData => ({ ...prevData, faqs: [...prevData.faqs, { questions: '', answer: '' }] }));
  };
  const handleFAQsChange = (index, field, value) => {
    const newFAQs = [...details.faqs];
    newFAQs[index] = { ...newFAQs[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, faqs: newFAQs }));
  };

  const handleRemoveFAQs = (index) => {
    const newFAQs = details.faqs.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, faqs: newFAQs }));
  };

  const handleAddReview = () => {
    setDetails((prevData) => ({
      ...prevData,
      testimonials: [...prevData.testimonials, { name: '', rating: 0, review: '' }],
    }));
  };

  const handleReviewChange = (reviewIndex, field, value) => {
    const newReviews = [...details.testimonials];
    newReviews[reviewIndex] = { ...newReviews[reviewIndex], [field]: value };
    setDetails((prevData) => ({ ...prevData, testimonials: newReviews }));
  };

  const handleRemoveReview = (reviewIndex) => {
    const newReviews = details.testimonials.filter((_, i) => i !== reviewIndex);
    setDetails((prevData) => ({ ...prevData, testimonials: newReviews }));
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
    if (field === "testimonials") {
      handleNestedChange(field, index, 'image', file);
    } else {
      handleNestedChange(field, index, 'src', file);
    }
  };

  const handleMasterFileChange = (event) => {
    const file = event.target.files[0];
    setDetails((prev) => ({ ...prev, masterPlan: { ...prev.masterPlan, src: file } }))
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
    <PageLayout title={'Edit Projects'}>
      {isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> :
        <Grid container spacing={5} display={'flex'} direction={'row'} p={8}>
          <Grid item container spacing={2} xs={12}>
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
            <Grid item xs={12} >
              <Input
                required
                disabled
                placeholder="Category"
                id="Category"
                name="Category"
                value={details?.category?.name || ''}
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



            {details?.features?.map((feature, index) => (
              <Box key={index} mt={2} p={2} border={1}>
                <TextField fullWidth label="Feature Title" value={feature.title} onChange={(e) => handleFeaturesChange(index, 'title', e.target.value)} />
                {feature.items.map((item, itemIndex) => (
                  <Box key={itemIndex} display="flex" alignItems="center" mt={1}>
                    {/* <IconButton onClick={() => setIconPickerOpen(true) && setSelectedIconField({ featureIndex: index, itemIndex })}> */}
                    <IconButton onClick={() => handleIconPickerOpen(index, itemIndex)}>
                      {Icons[item.icon] ? Icons[item.icon]({ width: '24px', height: '24px' }) : <Add />}
                    </IconButton>
                    <TextField placeholder="Text" value={item.text} onChange={(e) => handleFeatureItemsChange(index, itemIndex, 'text', e.target.value)} fullWidth />
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
            <Button onClick={handleAddFeature}>Add Feature</Button>

            

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
              values={details.expertOpinions}
              onChange={(index, value) => handleFieldChange('expertOpinions', index, value)}
              onAdd={() => handleAddFields('expertOpinions')}
              onRemove={(index) => handleRemoveFields('expertOpinions', index)}
            />
            <FieldSection
              label="Bedrooms (BHK)"
              values={details.bedrooms}
              onChange={(index, value) => handleFieldChange('bedrooms', index, value)}
              onAdd={() => handleAddFields('bedrooms')}
              onRemove={(index) => handleRemoveFields('bedrooms', index)}
            />

            <FieldSection
              label="Area (sq/ft)"
              values={details.areas}
              onChange={(index, value) => handleFieldChange('areas', index, value)}
              onAdd={() => handleAddFields('areas')}
              onRemove={(index) => handleRemoveFields('areas', index)}
            />
           
            <Grid item xs={12}>
              <Typography variant="h6">Master Plan</Typography>
              <Box display="flex" alignItems="center" marginBottom={1}>
                <TextField
                  placeholder=" Master Plan Title"
                  value={details?.masterPlan?.title}
                  style={{ marginRight: '5px' }}
                  fullWidth
                  onChange={(e) => setDetails((prev) => ({ ...prev, masterPlan: { ...prev.masterPlan, title: e.target.value } }))}
                />
                <TextField
                  placeholder="Description"
                  value={details?.masterPlan?.desc}
                  fullWidth
                  onChange={(e) => setDetails((prev) => ({ ...prev, masterPlan: { ...prev.masterPlan, desc: e.target.value } }))}
                />
              </Box>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Button variant="outlined" component="label" style={{ color: 'gray', marginTop: '5px' }}>
                  Upload Image
                  <input
                    type="file"
                    hidden
                    onChange={(e) => handleMasterFileChange(e)}
                  />
                </Button>
                {details?.masterPlan?.src && (
                  <Box mt={1}>
                    <img
                      src={
                        typeof (details?.masterPlan?.src) === 'object'
                          ? URL.createObjectURL(details?.masterPlan?.src)
                          : `${process.env.REACT_APP_API_URL}/uploads/${details?.masterPlan?.src}`
                      }
                      alt={`masterPlan`}
                      style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                    />
                  </Box>
                )}

              </Box>
            </Grid>
            {['imageGallery', 'plans', 'accommodation'].map((field) => (
              <Grid item xs={12} key={field}>

                <Typography variant="h6">{field.replace(/([A-Z])/g, ' $1').trim()}</Typography>
                {details[field]?.map((item, index) => (
                  <Box key={index} marginBottom={1}>
                    <Box display="flex" alignItems="center">
                      {field !== 'accommodation' && (
                        <TextField
                          placeholder="Title"
                          value={item?.title}
                          required
                          onChange={(e) => handleNestedChange(field, index, 'title', e.target.value)}
                          style={{ marginRight: '5px' }}
                          fullWidth
                        />
                      )}
                      {field !== 'accommodation' && (
                        <TextField
                          placeholder="Description"
                          value={item?.desc}
                          style={{ marginRight: '5px' }}
                          onChange={(e) => handleNestedChange(field, index, 'desc', e.target.value)}
                          fullWidth
                        />
                      )}

                      {field === 'accommodation' && (
                        <TextField
                          placeholder="Unit"
                          value={item?.unit}
                          style={{ marginRight: '5px' }}
                          onChange={(e) => handleNestedChange(field, index, 'unit', e.target.value)}
                          fullWidth
                        />
                      )}
                      {field === 'accommodation' && (
                        <TextField
                          placeholder="Area"
                          value={item?.area}
                          style={{ marginRight: '5px' }}
                          onChange={(e) => handleNestedChange(field, index, 'area', e.target.value)}
                          fullWidth
                        />
                      )}
                      {field === 'accommodation' && (
                        <TextField
                          placeholder="Price"
                          value={item?.price}
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
                        {item?.src && (
                          <Box mt={1}>
                            <img
                              src={
                                typeof item.src === 'object'
                                  ? URL.createObjectURL(item?.src)
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
                {details?.faqs?.map((FAQs, index) => (
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
                      {details.faqs.length > 1 && (
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
              {details?.testimonials?.map((review, index) => (
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
                        onChange={(e) => handleFileChange('testimonials', index, e)}
                      />
                    </Button>
                    {review.image && (
                      <Box mt={1}>
                        <img
                          src={
                            typeof review.image === 'object'
                              ? URL.createObjectURL(review.image)
                              : `${process.env.REACT_APP_API_URL}/uploads/${review.image}`
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
                  {details?.testimonials?.length > 1 && (
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



            <Grid item xs={12} sm={6}>
              <Typography variant="caption">
                Projects status &nbsp;
              </Typography>
              <ToggleButton
                value={details?.isAvailable}
                selected={details?.isAvailable}
                onChange={() => {
                  setDetails(prev => ({ ...prev, isAvailable: !details?.isAvailable }))
                }}
              >
                {details?.isAvailable ? 'Active' : 'Blocked'}
              </ToggleButton>
            </Grid>
            <Grid item xs={12} sm={12} mt={'auto'}>
              <Grid item xs={12}>
                <Button onClick={handleSubmit}>Update Projects</Button>

                {/* <Button color="secondary" onClick={handleDelete}>DELETE Projects</Button> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>}
      <IconPickerPopup
        open={iconPickerOpen}
        onClose={handleIconPickerClose}
        onSelectIcon={handleIconSelect}
      />
    </PageLayout>
  );
};

export default EditProjects;
