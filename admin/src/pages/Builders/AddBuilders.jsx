import { Autocomplete, Button, Grid, TextField, IconButton, Rating } from '@mui/material'
import Box from 'components/Box'
import Input from 'components/Input'
import PageLayout from 'layouts/PageLayout'
import React, { useState } from 'react'
import ImageList from './ImageList';
import Typography from 'components/Typography'
import { useAddBuilders } from 'queries/ProductQuery'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Delete } from '@mui/icons-material';

const AddBuilders = () => {
  const navigat = useNavigate()
  const [details, setDetails] = useState({
    features: [{ text: '', helpertext: '' }],
    reviews: [{ name: '', rating: 0, review: '', image: '' }],
    // addresses: [{ street: '', city: '', state: '', zip: '', country: '', phone: '' }],
    // FAQs: [{ questions: '', answer: '' }],
  })

  const fileInputRef = React.useRef(null);
  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handlelogoFileChange = (event) => {
    const file = event.target.files[0];
    setDetails(prev => ({ ...prev, logo: file }));
  };

  const { mutateAsync: AddBuilders, isLoading: loading } = useAddBuilders()
  const handleChange = (e) => {
    setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [disable, setDisable] = useState(false)

  const handleSubmit = () => {
    let flag = true
    try {

      if (!details?.title) {
        return toast.error("title is required")
      }
      if (!details?.subtitle) {
        return toast.error("subtitle is required")
      }
      if (!details?.image) {
        return toast.error("image is required")
      }
      if (!details?.logo) {
        return toast.error("logo is required")
      }
      if (!details?.description) {
        return toast.error("description is required")
      }
      if (!details?.vision) {
        return toast.error("vision is required")
      }
      if (!details?.location) {
        return toast.error("location is required")
      }

      setDisable(true)
      const formData = new FormData();
      // details?.image?.forEach((image) => {
      //   formData.append('images', image, image.name);
      // });
      typeof (details.image) == 'object' && formData.append("images", details?.image, details?.image?.name);
      typeof (details.logo) == 'object' && formData.append("logo", details?.logo, details?.logo?.name);
      for (const key in details) {
        if (details.hasOwnProperty(key) && !['image', 'FAQs', 'reviews', 'addresses', 'features', 'logo'].includes(key)) {
          formData.append(key, details[key]);
        }
      }
      details?.features?.forEach(features => {
        if (features.text === '') {

        } else {
          formData.append('featuresText', features.text);
          formData.append('featuresHelpertext', features.helpertext);
        }
      });
      details?.reviews?.forEach((review, i) => {
        if (review.name === '') {

        } else {
          if (review.image) {
            formData.append(`reviewsName`, review.name);
            formData.append(`reviewsRating`, review.rating);
            formData.append(`reviewsReview`, review.review);
            formData.append(`reviews`, review.image);
          } else {
            toast.error(`reviews ${i + 1} field image is required`)
            flag = false
            setDisable(false)
          }
        }
      });
      // details?.FAQs?.forEach(si => {
      //   if (si.questions === '') {

      //   } else {
      //     formData.append('questions', si.questions);
      //     formData.append('answer', si.answer);
      //   }

      // });
      // details?.addresses?.forEach((address) => {
      //   if (address.street) {
      //     formData.append('addressStreet', address.street);
      //     formData.append('addressCity', address.city);
      //     formData.append('addressState', address.state);
      //     formData.append('addressZip', address.zip);
      //     formData.append('addressCountry', address.country);
      //     formData.append('addressPhone', address.phone);
      //   }
      // });
      if (flag) {
        AddBuilders(formData)
          .then((res) => {
            toast.success(res?.message ?? "Builders added");
            setDisable(false)
            navigat('/builders')
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

  const handleAddFeatures = () => {
    setDetails(prevData => ({ ...prevData, features: [...prevData.features, { text: '', helpertext: '' }] }));
  };
  const handleFeaturesChange = (index, field, value) => {
    const newconfiguration = [...details.features];
    newconfiguration[index] = { ...newconfiguration[index], [field]: value };;
    setDetails(prevData => ({ ...prevData, features: newconfiguration }));
  };

  const handleFeaturesRemove = (index) => {
    const newconfiguration = details.features.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, features: newconfiguration }));
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

  const handleFileChange = (field, index, e) => {
    const file = e.target.files[0];
    const updated = [...details[field]];
    updated[index]['image'] = file;
    setDetails((prev) => ({ ...prev, [field]: updated }));
  }


  // const handleAddAddress = () => {
  //   setDetails((prevData) => ({
  //     ...prevData,
  //     addresses: [...prevData.addresses, { street: '', city: '', state: '', zip: '', country: '', phone: '' }],
  //   }));
  // };

  // const handleAddressChange = (index, field, value) => {
  //   const newAddresses = [...details.addresses];
  //   newAddresses[index] = { ...newAddresses[index], [field]: value };
  //   setDetails((prevData) => ({ ...prevData, addresses: newAddresses }));
  // };

  // const handleRemoveAddress = (index) => {
  //   const newAddresses = details.addresses.filter((_, i) => i !== index);
  //   setDetails((prevData) => ({ ...prevData, addresses: newAddresses }));
  // };

  // const handleAddFAQs = () => {
  //   setDetails(prevData => ({ ...prevData, FAQs: [...prevData.FAQs, { questions: '', answer: '' }] }));
  // };
  // const handleFAQsChange = (index, field, value) => {
  //   const newFAQs = [...details.FAQs];
  //   newFAQs[index] = { ...newFAQs[index], [field]: value };;
  //   setDetails(prevData => ({ ...prevData, FAQs: newFAQs }));
  // };

  // const handleRemoveFAQs = (index) => {
  //   const newFAQs = details.FAQs.filter((_, i) => i !== index);
  //   setDetails(prevData => ({ ...prevData, FAQs: newFAQs }));
  // };
  console.log('details', details);

  return (
    <PageLayout
      title={'Add Builders'}
    >
      <Grid container spacing={5} display={'flex'} direction={'row'} p={8} >
        <Grid item container spacing={2} xs={12} sm={12} md={6} py={5}>
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              placeholder="Item title"
              id="title"
              name="title"
              value={details?.title || ''}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required
              placeholder="Item subtitle"
              id="subtitle"
              name="subtitle"
              value={details?.subtitle || ''}
              onChange={handleChange}
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
          <Grid item xs={12}>
            <Input
              id="vision"
              placeholder="our vision"
              name="vision"
              value={details?.vision || ''}
              onChange={handleChange}
              multiline
              rows={5}
            />
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
              {details?.features?.map((features, index) => (
                <Grid item xs={12} key={index}>
                  <Box key={index} display="flex" alignItems="center">
                    <TextField
                      placeholder={`Features Type ${index + 1}`}
                      value={features.text}
                      onChange={(e) => handleFeaturesChange(index, 'text', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                      style={{ marginRight: '5px' }}
                    />
                    <TextField
                      placeholder="helpertext"
                      value={features.helpertext}
                      onChange={(e) => handleFeaturesChange(index, 'helpertext', e.target.value)}
                      fullWidth
                      margin="normal"
                      required
                    />
                    {details.features.length > 1 && (
                      <IconButton onClick={() => handleFeaturesRemove(index)}>
                        <Delete />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              ))}
              <Button onClick={handleAddFeatures} variant="contained" color="primary" fullWidth className="mt-4">
                Add Features
              </Button>
            </Grid>
          </Grid>

          {/* <Grid item xs={12}>
            <Typography variant="h6">Addresses</Typography>
            {details.addresses.map((address, index) => (
              <Box key={index} mt={2} display="flex" flexDirection="column">
                <TextField
                  placeholder="Street"
                  value={address.street}
                  onChange={(e) => handleAddressChange(index, 'street', e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="City"
                  value={address.city}
                  onChange={(e) => handleAddressChange(index, 'city', e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="State"
                  value={address.state}
                  onChange={(e) => handleAddressChange(index, 'state', e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Zip Code"
                  value={address.zip}
                  onChange={(e) => handleAddressChange(index, 'zip', e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Country"
                  value={address.country}
                  onChange={(e) => handleAddressChange(index, 'country', e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  placeholder="Phone Number"
                  value={address.phone}
                  onChange={(e) => handleAddressChange(index, 'phone', e.target.value)}
                  fullWidth
                  margin="normal"
                />
                {details.addresses.length > 1 && (
                  <IconButton onClick={() => handleRemoveAddress(index)}>
                    <Delete />
                  </IconButton>
                )}
              </Box>
            ))}
            <Button
              onClick={handleAddAddress}
              variant="contained"
              color="primary"
              className="mt-4"
              fullWidth
            >
              Add Address
            </Button>
          </Grid>


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
          </Grid> */}


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
          <Grid xs={12}>
            <ImageList data={details?.image} dispatch={setDetails} />
          </Grid>

          <Grid item xs={12} >
            <Typography variant="h6">Add logo</Typography>
            <Box
              sx={{
                width: 200,
                height: 100,
                cursor: "pointer",
                backgroundColor: "#212121",
                "&:hover": {
                  backgroundColor: "#424242",
                  opacity: [0.9, 0.8, 0.7],
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              onClick={handleFileSelect}
            >

              {details?.logo ? (
                <img
                  style={{ width: 240, height: 135, padding: 22 }}
                  src={typeof (details?.logo) == 'object' ? URL.createObjectURL(details?.logo) : `${process.env.REACT_APP_API_URL}/${details?.logo}`}
                />
              ) : (
                <React.Fragment>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9994 51.3346H34.9994C46.666 51.3346 51.3327 46.668 51.3327 35.0013V21.0013C51.3327 9.33464 46.666 4.66797 34.9994 4.66797H20.9994C9.33268 4.66797 4.66602 9.33464 4.66602 21.0013V35.0013C4.66602 46.668 9.33268 51.3346 20.9994 51.3346Z"
                      stroke="#CDCDCD"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.0007 23.3333C23.578 23.3333 25.6673 21.244 25.6673 18.6667C25.6673 16.0893 23.578 14 21.0007 14C18.4233 14 16.334 16.0893 16.334 18.6667C16.334 21.244 18.4233 23.3333 21.0007 23.3333Z"
                      stroke="#CDCDCD"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.23047 44.2186L17.7338 36.4953C19.5771 35.2586 22.2371 35.3986 23.8938 36.8219L24.6638 37.4986C26.4838 39.0619 29.4238 39.0619 31.2438 37.4986L40.9505 29.1686C42.7705 27.6053 45.7105 27.6053 47.5305 29.1686L51.3338 32.4353"
                      stroke="#CDCDCD"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Typography sx={{ mt: 1, fontSize: 13 }}>
                    Upload Thumbnail
                  </Typography>
                </React.Fragment>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlelogoFileChange}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}></Grid>
          <Grid item xs={12} sm={4} mt={'auto'}>
            <Button sx={{ mr: 0, width: '100%' }} onClick={handleSubmit} disabled={disable} variant='contained'>
              Add Builders
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  )
}

export default AddBuilders