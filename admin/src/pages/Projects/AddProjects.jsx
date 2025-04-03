import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  IconButton,
  Rating,
  MenuItem,
  Select,
} from "@mui/material";
import Box from "components/Box";
import Input from "components/Input";
import PageLayout from "layouts/PageLayout";
import React, { useState, useEffect } from "react";
import Typography from "components/Typography";
import { useGetCategory, useAddProjects, useGetSelectBuilders } from "queries/ProductQuery";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Delete, Add } from "@mui/icons-material";
import { Icons } from "components/Property/Icons.jsx";
import IconPickerPopup from "./IconPickerPopup";
import FieldSection from "./FieldSection";
import TextEditor from "utils/TextEditor";
import avatarFemale from "assets/images/avatar-female.png";
import avatarMale from "assets/images/avatar-male.png";
import EditorJSON from "./EditorJSON";

const AddProjects = () => {
  const navigate = useNavigate();

  const storageKey = "addProjectData";
  const initialDetails = {
    status: "Pre Launch",
    expertOpinions: [""],
    bedrooms: [""],
    areas: [""],
    faqs: [{ questions: "", answer: "" }],
    testimonials: [{ name: "", rating: 0, review: "", src: "" }],
    masterPlan: { title: "", desc: "", src: "" },
    imageGallery: [{ title: "", desc: "", src: "" }],
    plans: [{ title: "", desc: "", src: "" }],
    accommodation: [{ unit: "", area: "", price: "" }],
    features: [{ title: "", items: [{ text: "", helpertext: "", icon: "" }] }],
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
  };
  // const [details, setDetails] = useState()

  const [details, setDetails] = useState(() => {
    const savedData = localStorage.getItem(storageKey);
    return savedData ? JSON.parse(savedData) : initialDetails;
  });

  const [builder, setBuilders] = useState();
  const { data, isLoading } = useGetCategory({ pageNo: 1, pageCount: 100 });
  const { mutateAsync: AddProjects, isLoading: loading } = useAddProjects();
  const { data: build } = useGetSelectBuilders({ pageNo: 1, pageCount: 100 });
  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [disable, setDisable] = useState(false);
  const [iconPickerOpen, setIconPickerOpen] = useState(false);
  const [selectedIconField, setSelectedIconField] = useState({});

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(details));
  }, [details]);
  const handleClear = () => {
    localStorage.removeItem(storageKey);
    setDetails(initialDetails);
  };

  console.log("selectedIconField", selectedIconField);

  const [category, setCategory] = useState();

  const handleSubmit = () => {
    let flag = true;

    try {
      if (!details?.title) {
        return toast.error("title is required");
      }
      if (!details?.subtitle) {
        return toast.error("subtitle is required");
      }
      if (!category?._id) {
        return toast.error("category is required");
      }
      if (!builder?._id) {
        return toast.error("builder is required");
      }
      if (!details?.imageGallery?.[0]?.title) {
        return toast.error("imageGallery is required");
      }
      if (!details?.href) {
        return toast.error("url is required");
      }
      if (!details?.location) {
        return toast.error("location is required");
      }
      if (!details?.minPrice) {
        return toast.error("minPrice is required");
      }
      if (!details?.maxPrice) {
        return toast.error("maxPrice is required");
      }
      if (!details?.description) {
        return toast.error("description is required");
      }
      setDisable(true);
      const formData = new FormData();
      for (const key in details) {
        if (
          details.hasOwnProperty(key) &&
          ![
            "category",
            "builder",
            "expertOpinions",
            "bedrooms",
            "areas",
            "features",
            "faqs",
            "testimonials",
            "imageGallery",
            "plans",
            "accommodation",
            "masterPlan",
          ].includes(key)
        ) {
          formData.append(key, details[key]);
        }
      }
      if (category?._id) {
        formData.append("category", category._id);
      }
      if (builder?._id) {
        formData.append("builder", builder._id);
      }

      if (details?.features) {
        details.features.forEach((feature) => {
          if (feature?.items) {
            feature.items.forEach((item) => {
              formData.append(`features[${feature.title}][]`, JSON.stringify(item));
            });
          }
        });
      }

      ["expertOpinions", "bedrooms", "areas"].forEach((field) => {
        if (details?.[field]) {
          details[field].forEach((value) => {
            if (value) {
              formData.append(field, value);
            }
          });
        }
      });

      if (details?.faqs) {
        details.faqs.forEach((si) => {
          if (si.questions) {
            formData.append("questions", si.questions);
            formData.append("answer", si.answer);
          }
        });
      }

      if (details?.testimonials) {
        details.testimonials.forEach((testimonial, i) => {
          if (testimonial.name) {
            if (testimonial.src) {
              formData.append(`reviewsName`, testimonial.name);
              formData.append(`reviewsRating`, testimonial.rating);
              formData.append(`reviewsReview`, testimonial.review);
              if (
                testimonial.src &&
                typeof testimonial.src === "string" &&
                testimonial.src.startsWith("data:image/")
              ) {
                const blob = dataURLtoFile(testimonial.src, `file-${i}.png`);
                formData.append(`reviews`, blob);
              }
            } else {
              toast.error(`testimonial ${i + 1} field image is required`);
              flag = false;
              setDisable(false);
            }
          }
        });
      }

      if (details?.masterPlan) {
        if (details.masterPlan.title) {
          if (details.masterPlan.src) {
            if (
              details.masterPlan.src &&
              typeof details.masterPlan.src === "string" &&
              details.masterPlan.src.startsWith("data:image/")
            ) {
              const blob = dataURLtoFile(details.masterPlan.src, `file-0.png`);
              formData.append(`masterPlan`, blob);
            }
            formData.append(`masterPlanTitle`, details.masterPlan.title);
            formData.append(`masterPlanDesc`, details.masterPlan.desc);
          } else {
            setDisable(false);
            return toast.error(" masterPlan image is required");
          }
        }
      }

      if (details?.imageGallery) {
        details.imageGallery.forEach((Gallery, i) => {
          if (Gallery.title) {
            if (Gallery.src) {
              if (
                Gallery.src &&
                typeof Gallery.src === "string" &&
                Gallery.src.startsWith("data:image/")
              ) {
                const blob = dataURLtoFile(Gallery.src, `file-${i}.png`);
                formData.append(`imageGallery`, blob);
              }
              formData.append(`imageGalleryTitle`, Gallery.title);
              formData.append(`imageGalleryDesc`, Gallery.desc);
            } else {
              toast.error(`image Gallery ${i + 1} field image is required`);
              flag = false;
              setDisable(false);
            }
          }
        });
      }

      if (details?.plans) {
        details.plans.forEach((Plans, i) => {
          if (Plans.title) {
            if (Plans.src) {
              if (
                Plans.src &&
                typeof Plans.src === "string" &&
                Plans.src.startsWith("data:image/")
              ) {
                const blob = dataURLtoFile(Plans.src, `file-${i}.png`);
                formData.append(`plans`, blob);
              }
              formData.append(`plansTitle`, Plans.title);
              formData.append(`plansDesc`, Plans.desc);
            } else {
              toast.error(`plans Plans ${i + 1} field image is required`);
              flag = false;
              setDisable(false);
            }
          }
        });
      }

      if (details?.accommodation) {
        details.accommodation.forEach((unit) => {
          if (unit.unit) {
            formData.append(`accommodationUnit`, unit.unit);
            formData.append(`accommodationArea`, unit.area);
            formData.append(`accommodationPrice`, unit.price);
          }
        });
      }

      if (flag) {
        AddProjects(formData)
          .then((res) => {
            toast.success(res?.message ?? "Projects added");
            setDisable(false);
            localStorage.removeItem(storageKey);
            navigate("/projects");
          })
          .catch((err) => {
            toast.error(err?.message ?? "Something went wrong");
            setDisable(false);
          });
      }
    } catch (error) {
      setDisable(false);
      console.error(error);
    }
  };
  const handleFieldChange = (field, index, value) => {
    setDetails((prevData) => {
      const currentArray = Array.isArray(prevData[field]) ? prevData[field] : [""];
      const updated = [...currentArray];
      updated[index] = value;
      return { ...prevData, [field]: updated };
    });
  };

  const handleAddFields = (field) => {
    setDetails((prevData) => {
      const currentArray = Array.isArray(prevData[field]) ? prevData[field] : [""];
      return { ...prevData, [field]: [...currentArray, ""] };
    });
  };

  const handleRemoveFields = (field, index) => {
    setDetails((prevData) => {
      const currentArray = Array.isArray(prevData[field]) ? prevData[field] : [""];
      const updated = currentArray.filter((_, i) => i !== index);
      return { ...prevData, [field]: updated.length ? updated : [""] };
    });
  };

  const handleFeaturesChange = (index, key, value) => {
    setDetails((prev) => {
      const currentFeatures = prev.features || [
        { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
      ];
      const updatedFeatures = [...currentFeatures];
      if (!updatedFeatures[index]) {
        updatedFeatures[index] = { title: "", items: [{ text: "", helpertext: "", icon: "" }] };
      }
      updatedFeatures[index] = { ...updatedFeatures[index], [key]: value };
      return { ...prev, features: updatedFeatures };
    });
  };

  const handleFeatureItemsChange = (featureIndex, itemIndex, key, value) => {
    setDetails((prev) => {
      const currentFeatures = prev.features || [
        { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
      ];
      const updatedFeatures = [...currentFeatures];
      if (!updatedFeatures[featureIndex]) {
        updatedFeatures[featureIndex] = {
          title: "",
          items: [{ text: "", helpertext: "", icon: "" }],
        };
      }
      const currentItems = updatedFeatures[featureIndex].items || [
        { text: "", helpertext: "", icon: "" },
      ];
      const updatedItems = [...currentItems];
      if (!updatedItems[itemIndex]) {
        updatedItems[itemIndex] = { text: "", helpertext: "", icon: "" };
      }
      updatedItems[itemIndex] = { ...updatedItems[itemIndex], [key]: value };
      updatedFeatures[featureIndex].items = updatedItems;
      return { ...prev, features: updatedFeatures };
    });
  };

  const handleAddFeature = () => {
    setDetails((prev) => {
      const currentFeatures = prev.features || [
        { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
      ];
      return {
        ...prev,
        features: [
          ...currentFeatures,
          { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
        ],
      };
    });
  };

  const handleRemoveFeature = (index) => {
    setDetails((prev) => {
      const currentFeatures = prev.features || [
        { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
      ];
      const updatedFeatures = currentFeatures.filter((_, i) => i !== index);
      return {
        ...prev,
        features: updatedFeatures.length
          ? updatedFeatures
          : [{ title: "", items: [{ text: "", helpertext: "", icon: "" }] }],
      };
    });
  };

  const handleAddFeatureItem = (featureIndex) => {
    setDetails((prev) => {
      const currentFeatures = prev.features || [
        { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
      ];
      const updatedFeatures = [...currentFeatures];
      if (!updatedFeatures[featureIndex]) {
        updatedFeatures[featureIndex] = {
          title: "",
          items: [{ text: "", helpertext: "", icon: "" }],
        };
      }
      const currentItems = updatedFeatures[featureIndex].items || [
        { text: "", helpertext: "", icon: "" },
      ];
      updatedFeatures[featureIndex].items = [
        ...currentItems,
        { text: "", helpertext: "", icon: "" },
      ];
      return { ...prev, features: updatedFeatures };
    });
  };

  const handleRemoveFeatureItem = (featureIndex, itemIndex) => {
    setDetails((prev) => {
      const currentFeatures = prev.features || [
        { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
      ];
      const updatedFeatures = [...currentFeatures];
      if (!updatedFeatures[featureIndex]) {
        return prev;
      }
      const currentItems = updatedFeatures[featureIndex].items || [
        { text: "", helpertext: "", icon: "" },
      ];
      const updatedItems = currentItems.filter((_, i) => i !== itemIndex);
      updatedFeatures[featureIndex].items = updatedItems.length
        ? updatedItems
        : [{ text: "", helpertext: "", icon: "" }];
      return { ...prev, features: updatedFeatures };
    });
  };

  const handleAddFAQs = () => {
    setDetails((prevData) => {
      const currentFAQs = prevData.faqs || [{ questions: "", answer: "" }];
      return {
        ...prevData,
        faqs: [...currentFAQs, { questions: "", answer: "" }],
      };
    });
  };
  const handleFAQsChange = (index, field, value) => {
    setDetails((prevData) => {
      const currentFAQs = prevData.faqs || [{ questions: "", answer: "" }];
      const newFAQs = [...currentFAQs];
      if (!newFAQs[index]) {
        newFAQs[index] = { questions: "", answer: "" };
      }
      newFAQs[index] = { ...newFAQs[index], [field]: value };
      return { ...prevData, faqs: newFAQs };
    });
  };

  const handleRemoveFAQs = (index) => {
    setDetails((prevData) => {
      const currentFAQs = prevData.faqs || [{ questions: "", answer: "" }];
      const newFAQs = currentFAQs.filter((_, i) => i !== index);
      return {
        ...prevData,
        faqs: newFAQs.length ? newFAQs : [{ questions: "", answer: "" }],
      };
    });
  };

  const handleAddReview = () => {
    setDetails((prevData) => ({
      ...prevData,
      testimonials: [...prevData.testimonials, { name: "", rating: 0, review: "" }],
    }));
  };

  const handleReviewChange = (reviewIndex, field, value) => {
    const newTestimonials = [...details.testimonials];
    newTestimonials[reviewIndex] = { ...newTestimonials[reviewIndex], [field]: value };
    setDetails((prevData) => ({ ...prevData, testimonials: newTestimonials }));
  };

  const handleRemoveReview = (reviewIndex) => {
    const newTestimonials = details.testimonials.filter((_, i) => i !== reviewIndex);
    setDetails((prevData) => ({ ...prevData, testimonials: newTestimonials }));
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
    setDetails((prev) => {
      const currentFeatures = prev.features || [
        { title: "", items: [{ text: "", helpertext: "", icon: "" }] },
      ];
      const updatedFeatures = [...currentFeatures];
      if (!updatedFeatures[featureIndex]) {
        updatedFeatures[featureIndex] = {
          title: "",
          items: [{ text: "", helpertext: "", icon: "" }],
        };
      }
      const currentItems = updatedFeatures[featureIndex].items || [
        { text: "", helpertext: "", icon: "" },
      ];
      const updatedItems = [...currentItems];
      if (!updatedItems[itemIndex]) {
        updatedItems[itemIndex] = { text: "", helpertext: "", icon: "" };
      }
      updatedItems[itemIndex] = { ...updatedItems[itemIndex], icon: iconName };
      updatedFeatures[featureIndex].items = updatedItems;
      return { ...prev, features: updatedFeatures };
    });
    setIconPickerOpen(false);
  };

  const handleNestedChange = (field, index, subField, value) => {
    if (field === "masterPlan") {
      setDetails((prev) => ({
        ...prev,
        masterPlan: { ...prev.masterPlan, [subField]: value }
      }));
    } else {
      setDetails((prev) => {
        const currentArray = prev[field] || [];
        const updated = [...currentArray];
        if (!updated[index]) {
          updated[index] =
            field === "accommodation"
              ? { unit: "", area: "", price: "" }
              : { title: "", desc: "", src: "" };
        }
        updated[index][subField] = value;
        return { ...prev, [field]: updated };
      });
    }
  };

  // const handleFileChange = (field, index, e) => {
  //   const file = e.target.files[0];
  //   handleNestedChange(field, index, 'src', file);
  // };
  const handleFileChange = async (field, index, e) => {
    let file = e?.target?.files?.[0];

    if (!file) {
      const response = await fetch(e);
      const blob = await response.blob();
      file = new File([blob], "avatar.png", { type: blob.type });
    }
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        handleNestedChange(field, index, "src", base64String);
        if (field === "plans" || field === "imageGallery") {
          const fileName = file.name.replace(/\.[^/.]+$/, "");
          const formattedTitle = fileName
            .split(/[-_\s]/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
          handleNestedChange(field, index, "title", formattedTitle);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddField = (field) => {
    const newItem =
      field === "accommodation"
        ? { unit: "", area: "", price: "" }
        : { title: "", desc: "", src: "" };
    const currentArray = details[field] || [];
    setDetails((prev) => ({ ...prev, [field]: [...currentArray, newItem] }));
  };

  const handleRemoveField = (field, index) => {
    const currentArray = details[field] || [];
    const updated = currentArray.filter((_, i) => i !== index);
    setDetails((prev) => ({ ...prev, [field]: updated }));
  };

  console.log("details", details);
  // console.log('builders', builder);

  return (
    <PageLayout title={"Add Projects"}>
      <Grid container spacing={5} display={"flex"} direction={"row"} px={8} pb={8}>
        <Grid item container spacing={2} xs={12}>
          <Grid item xs={10} display={"flex"} alignItems={"center"} gap={1}>
            <Typography variant="h6">Basic Details</Typography>
            <Typography variant="caption" color="error">
              *required
            </Typography>
          </Grid>
          <EditorJSON details={details} setDetails={setDetails} />
          <Grid item xs={12}>
            <Typography variant="caption">
              Project Title <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              required
              placeholder="Project Title"
              id="title"
              name="title"
              value={details?.title || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              Project Subtitle <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              required
              placeholder="Project sub title"
              id="subtitle"
              name="subtitle"
              value={details?.subtitle || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">
              Project Category <span style={{ color: "red" }}>*</span>
            </Typography>
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
                <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`${process.env.REACT_APP_API_URL}/uploads/${option?.image}`}
                  />
                  <Typography color="inherit" variant="caption">
                    {option?.name} <br />
                    {option?.desc}
                  </Typography>
                  <Typography
                    sx={{ ml: "auto" }}
                    color={option?.isAvailable ? "success" : "error"}
                    variant="caption"
                  >
                    {option?.isAvailable ? "available" : "NA"}
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
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">
              Builder <span style={{ color: "red" }}>*</span>
            </Typography>
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
                <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`${process.env.REACT_APP_API_URL}/uploads/${option?.image}`}
                  />
                  <Typography color="inherit" variant="caption">
                    {option?.title} <br />
                    {option?.subtitle}
                  </Typography>
                  <Typography
                    sx={{ ml: "auto" }}
                    color={option?.isAvailable ? "success" : "error"}
                    variant="caption"
                  >
                    {option?.isAvailable ? "available" : "NA"}
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
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">
              Project Status <span style={{ color: "red" }}>*</span>
            </Typography>
            <Autocomplete
              value={details?.status || ""}
              onChange={(event, newValue) => {
                setDetails((prev) => ({ ...prev, status: newValue }));
              }}
              options={["Pre Launch", "Launch", "Under Construction", "Ready to Move In"]}
              renderInput={(params) => (
                <TextField {...params} placeholder="Select Status" required />
              )}
              sx={{
                "& .MuiAutocomplete-input": {
                  padding: "10px 14px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} mb={2}>
            <Typography variant="caption">
              Project Overview <span style={{ color: "red" }}>*</span>
            </Typography>
            <TextEditor value={details?.description || ""} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">
              Min property value <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              required
              type="number"
              placeholder="Min Price"
              id="minPrice"
              name="minPrice"
              value={details.minPrice}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="caption">
              Max property value <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              required
              type="number"
              placeholder="Max Price"
              id="maxPrice"
              name="maxPrice"
              value={details.maxPrice}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="caption">
              Property URL <span style={{ color: "red" }}>*</span> (avoid blank spaces, numbers or
              special characters for better performance. use &apos;-&apos; to connect words.)
            </Typography>
            <Input
              required
              placeholder="Slug URL (href)"
              id="href"
              name="href"
              value={details.href}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              Property Location <span style={{ color: "red" }}>*</span>
            </Typography>
            <Input
              required
              placeholder="Project Location"
              id="location"
              name="location"
              value={details?.location || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" mt={2}>
              SEO Meta Data
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="caption">Meta Title</Typography>
            <Input
              placeholder="Meta Title"
              id="metaTitle"
              name="metaTitle"
              value={details?.metaTitle || ""}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="caption">Meta Description</Typography>
            <Input
              placeholder="Meta Description"
              id="metaDescription"
              name="metaDescription"
              value={details?.metaDescription || ""}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="caption">Meta Keywords</Typography>
            <Input
              placeholder="Meta Keywords (comma separated)"
              id="metaKeywords"
              name="metaKeywords"
              value={details?.metaKeywords || ""}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Property Features</Typography>
            {(
              details?.features || [{ title: "", items: [{ text: "", helpertext: "", icon: "" }] }]
            ).map((feature, index) => (
              <Box key={index} mt={2} p={2} border={1}>
                <Typography variant="h6">Feature {index + 1}</Typography>
                <Input
                  fullWidth
                  placeholder="Feature Title"
                  value={feature?.title || ""}
                  onChange={(e) => handleFeaturesChange(index, "title", e.target.value)}
                />
                {(feature?.items || [{ text: "", helpertext: "", icon: "" }]).map(
                  (item, itemIndex) => (
                    <Box key={itemIndex} display="flex" alignItems="center" mt={1}>
                      <IconButton onClick={() => handleIconPickerOpen(index, itemIndex)}>
                        {Icons[item?.icon] ? (
                          Icons[item.icon]({ width: "24px", height: "24px" })
                        ) : (
                          <Add />
                        )}
                      </IconButton>
                      <Input
                        placeholder="Text"
                        style={{ marginRight: "5px" }}
                        value={item?.text || ""}
                        onChange={(e) =>
                          handleFeatureItemsChange(index, itemIndex, "text", e.target.value)
                        }
                        fullWidth
                      />
                      <Input
                        placeholder="Helpertext"
                        value={item?.helpertext || ""}
                        onChange={(e) =>
                          handleFeatureItemsChange(index, itemIndex, "helpertext", e.target.value)
                        }
                        fullWidth
                      />
                      <IconButton onClick={() => handleRemoveFeatureItem(index, itemIndex)}>
                        <Delete />
                      </IconButton>
                    </Box>
                  )
                )}
                <Button onClick={() => handleAddFeatureItem(index)}>Add Item</Button>
                <Button onClick={() => handleRemoveFeature(index)}>Remove Feature</Button>
              </Box>
            ))}
            <Box style={{ marginTop: "10px" }}>
              <Button
                onClick={handleAddFeature}
                variant="contained"
                color="primary"
                fullWidth
                className="mt-4"
              >
                Add Feature
              </Button>
            </Box>
          </Grid>
          <FieldSection
            label="Expert Opinions"
            values={Array.isArray(details?.expertOpinions) ? details.expertOpinions : [""]}
            onChange={(index, value) => handleFieldChange("expertOpinions", index, value)}
            onAdd={() => handleAddFields("expertOpinions")}
            onRemove={(index) => handleRemoveFields("expertOpinions", index)}
          />
          <FieldSection
            label="Bedrooms (BHK)"
            values={Array.isArray(details?.bedrooms) ? details.bedrooms : [""]}
            onChange={(index, value) => handleFieldChange("bedrooms", index, value)}
            onAdd={() => handleAddFields("bedrooms")}
            onRemove={(index) => handleRemoveFields("bedrooms", index)}
          />

          <FieldSection
            label="Area (sq/ft)"
            values={Array.isArray(details?.areas) ? details.areas : [""]}
            onChange={(index, value) => handleFieldChange("areas", index, value)}
            onAdd={() => handleAddFields("areas")}
            onRemove={(index) => handleRemoveFields("areas", index)}
          />

          <Grid item xs={12}>
            <Typography variant="h6">Master Plan</Typography>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <Input
                placeholder=" Master Plan Title"
                value={details.masterPlan?.title || ""}
                style={{ marginRight: "5px" }}
                fullWidth
                onChange={(e) =>
                  setDetails((prev) => ({
                    ...prev,
                    masterPlan: { ...prev.masterPlan, title: e.target.value },
                  }))
                }
              />
              <Input
                placeholder="Description"
                value={details.masterPlan?.desc || ""}
                fullWidth
                onChange={(e) =>
                  setDetails((prev) => ({
                    ...prev,
                    masterPlan: { ...prev.masterPlan, desc: e.target.value },
                  }))
                }
              />
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Button
                variant="outlined"
                component="label"
                style={{ color: "gray", marginTop: "5px" }}
              >
                Upload Image
                <input type="file" hidden onChange={(e) => handleFileChange("masterPlan", 0, e)} />
              </Button>
              {details?.masterPlan?.src && (
                <Box mt={1}>
                  <img
                    src={
                      details.masterPlan.src.startsWith("data:image/")
                        ? details.masterPlan.src
                        : `${process.env.REACT_APP_API_URL}/uploads/${details.masterPlan.src}`
                    }
                    alt={`masterPlan`}
                    style={{ width: "100%", height: "100px", objectFit: "cover" }}
                  />
                </Box>
              )}
            </Box>
          </Grid>
          {["imageGallery", "plans", "accommodation"].map((field) => (
            <Grid item xs={12} key={field}>
              <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
                {field.replace(/([A-Z])/g, " $1").trim()}
                {field === "imageGallery" && (
                  <Typography variant="caption" color="error">
                    {" "}
                    *required
                  </Typography>
                )}
              </Typography>
              {(details[field] || []).map((item, index) => (
                <Box key={index} marginBottom={1}>
                  <Box display="flex" alignItems="center">
                    {field !== "accommodation" && (
                      <Input
                        placeholder="Title"
                        value={item.title}
                        required
                        onChange={(e) => handleNestedChange(field, index, "title", e.target.value)}
                        style={{ marginRight: "5px" }}
                        fullWidth
                      />
                    )}
                    {field !== "accommodation" && (
                      <Input
                        placeholder="Description"
                        value={item.desc}
                        style={{ marginRight: "5px" }}
                        onChange={(e) => handleNestedChange(field, index, "desc", e.target.value)}
                        fullWidth
                      />
                    )}

                    {field === "accommodation" && (
                      <Input
                        placeholder="Unit"
                        value={item.unit}
                        style={{ marginRight: "5px" }}
                        onChange={(e) => handleNestedChange(field, index, "unit", e.target.value)}
                        fullWidth
                      />
                    )}
                    {field === "accommodation" && (
                      <Input
                        placeholder="Area"
                        value={item.area}
                        style={{ marginRight: "5px" }}
                        onChange={(e) => handleNestedChange(field, index, "area", e.target.value)}
                        fullWidth
                      />
                    )}
                    {field === "accommodation" && (
                      <Input
                        placeholder="Price"
                        value={item.price}
                        onChange={(e) => handleNestedChange(field, index, "price", e.target.value)}
                        fullWidth
                      />
                    )}
                  </Box>
                  {field !== "accommodation" && (
                    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                      <Button
                        variant="outlined"
                        component="label"
                        style={{ color: "gray", marginTop: "5px" }}
                      >
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
                              item.src.startsWith("data:image/")
                                ? item.src
                                : `${process.env.REACT_APP_API_URL}/uploads/${item.src}`
                            }
                            alt={`${item} ${index + 1}`}
                            style={{ width: "100%", height: "100px", objectFit: "cover" }}
                          />
                        </Box>
                      )}
                    </Box>
                  )}
                  <IconButton onClick={() => handleRemoveField(field, index)}>
                    <Delete />
                  </IconButton>
                </Box>
              ))}
              <Button
                onClick={() => handleAddField(field)}
                variant="contained"
                color="primary"
                fullWidth
                className="mt-4"
              >
                Add {field}
              </Button>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Grid container direction="row">
              {(Array.isArray(details?.faqs) ? details.faqs : [{ questions: "", answer: "" }]).map(
                (FAQ, index) => (
                  <Grid item xs={12} key={`faq-${index}`}>
                    <Box display="flex" alignItems="center" style={{ marginBottom: "10px" }}>
                      <Input
                        placeholder={`Question ${index + 1}`}
                        value={FAQ?.questions || ""}
                        onChange={(e) => handleFAQsChange(index, "questions", e.target.value)}
                        fullWidth
                        required
                        style={{ marginRight: "5px" }}
                      />
                      <Input
                        placeholder="Answer"
                        value={FAQ?.answer || ""}
                        onChange={(e) => handleFAQsChange(index, "answer", e.target.value)}
                        fullWidth
                        required
                      />
                      <IconButton
                        onClick={() => handleRemoveFAQs(index)}
                        disabled={details?.faqs?.length <= 1}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </Grid>
                )
              )}
              <Button onClick={handleAddFAQs} variant="contained" color="primary" fullWidth>
                Add FAQs
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Reviews</Typography>
            {(details?.testimonials || []).map((testimonial, index) => (
              <Box
                key={index}
                mt={2}
                display="flex"
                flexDirection="column"
                style={{ marginBottom: "10px" }}
              >
                <Input
                  placeholder="Reviewer Name"
                  value={testimonial.name}
                  onChange={(e) => handleReviewChange(index, "name", e.target.value)}
                  fullWidth
                  style={{ marginBottom: "10px" }}
                />
                <Rating
                  value={testimonial.rating}
                  onChange={(e, value) => handleReviewChange(index, "rating", value)}
                  style={{ marginBottom: "10px" }}
                />
                <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                  <Box display={"flex"} alignItems={"center"}>
                    <Box
                      sx={{
                        width: 90,
                        height: 80,
                        cursor: "pointer",
                        backgroundColor: "#D3D3D3",
                        "&:hover": {
                          backgroundColor: "#424242",
                          opacity: [0.9, 0.8, 0.7],
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                      onClick={(e) => handleFileChange("testimonials", index, avatarFemale)}
                    >
                      <img style={{ width: 90, height: 80 }} src={avatarFemale} />
                    </Box>
                    <Box
                      sx={{
                        width: 90,
                        height: 80,
                        cursor: "pointer",
                        backgroundColor: "#D3D3D3",
                        "&:hover": {
                          backgroundColor: "#424242",
                          opacity: [0.9, 0.8, 0.7],
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        overflow: "hidden",
                        mx: 2,
                      }}
                      onClick={(e) => handleFileChange("testimonials", index, avatarMale)}
                    >
                      <img style={{ width: 90, height: 80 }} src={avatarMale} />
                    </Box>
                    <Box
                      variant="outlined"
                      component="label"
                      sx={{
                        width: 90,
                        height: 80,
                        cursor: "pointer",
                        backgroundColor: "#D3D3D3",
                        "&:hover": {
                          backgroundColor: "#D3D3D3",
                          opacity: [0.9, 0.8, 0.7],
                        },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <Typography variant="caption">Upload Image</Typography>
                      <input
                        type="file"
                        hidden
                        onChange={(e) => handleFileChange("testimonials", index, e)}
                      />
                    </Box>
                  </Box>
                  {testimonial.src && (
                    <Box
                      sx={{
                        width: 110,
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={
                          testimonial.src.startsWith("data:image/")
                            ? testimonial.src
                            : `${process.env.REACT_APP_API_URL}/uploads/${testimonial.src}`
                        }
                        alt={`Review ${index + 1}`}
                        style={{ width: "100%", height: 80 }}
                      />
                    </Box>
                  )}
                </Box>
                <Input
                  placeholder="Review"
                  value={testimonial.review}
                  onChange={(e) => handleReviewChange(index, "review", e.target.value)}
                  fullWidth
                  multiline
                  rows={3}
                  style={{ marginTop: "10px" }}
                />
                {details.testimonials.length > 1 && (
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
        <Grid item container spacing={2} xs={12}>
          <Grid item xs={12} sm={8}></Grid>
          <Grid item xs={12} sm={4} mt={"auto"}>
            <Box style={{ display: "flex" }}>
              <Button
                sx={{ mr: 5, width: "100%" }}
                onClick={handleSubmit}
                disabled={disable}
                variant="contained"
              >
                Add Projects
              </Button>
              <Button sx={{ mr: 0, width: "100%" }} onClick={handleClear} variant="contained">
                Clear
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <IconPickerPopup
        open={iconPickerOpen}
        onClose={handleIconPickerClose}
        onSelectIcon={handleIconSelect}
      />
    </PageLayout>
  );
};

const dataURLtoFile = (dataurl, filename) => {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export default AddProjects;
