import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";

const EditorJSON = ({ details, setDetails }) => {
  const dev_mode = localStorage.getItem("developer_mode");
  const [jsonModalOpen, setJsonModalOpen] = useState(false);
  const [jsonInput, setJsonInput] = useState("");
  const [showSchema, setShowSchema] = useState(false);

  const schemaExample = {
    title: "string (required)",
    subtitle: "string (required)",
    builder: "ObjectId (required)",
    category: "ObjectId (required)",
    description: "string (required)",
    minPrice: "number (required)",
    maxPrice: "number (required)",
    href: "string (required, unique)",
    location: "string (required)",
    imageGallery: [
      {
        title: "string (required)",
        desc: "string",
        src: "File | string",
      },
    ],

    // Optional fields
    status: "enum: 'Pre Launch' | 'Launch' | 'Under Construction' | 'Ready to Move In'",
    metaTitle: "string?",
    metaDescription: "string?",
    metaKeywords: "string? (comma separated)",
    expertOpinions: "string[]",
    bedrooms: "string[]",
    areas: "number[]",
    features: [
      {
        title: "string",
        items: [
          {
            text: "string",
            helpertext: "string",
            icon: "string",
          },
        ],
      },
    ],
    faqs: [
      {
        questions: "string",
        answer: "string",
      },
    ],
    masterPlan: {
      title: "string",
      desc: "string",
      src: "File | string",
    },
    plans: [
      {
        title: "string",
        desc: "string",
        src: "File | string",
      },
    ],
    accommodation: [
      {
        unit: "string",
        area: "string",
        price: "string",
      },
    ],
    testimonials: [
      {
        name: "string",
        rating: "number (0-5)",
        review: "string",
        image: "File | string",
      },
    ],
    isAvailable: "boolean (default: true)",
  };

  const handleJsonPaste = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setDetails(parsedData);
      setJsonModalOpen(false);
      toast.success("Form data loaded successfully");
    } catch (error) {
      toast.error("Invalid JSON format");
    }
  };

  const handleCopySchema = () => {
    const jsonStr = JSON.stringify(schemaExample, null, 2);
    navigator.clipboard
      .writeText(jsonStr)
      .then(() => toast.success("Schema reference copied to clipboard"))
      .catch(() => toast.error("Failed to copy schema reference"));
  };

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(details, null, 2);
    navigator.clipboard
      .writeText(jsonStr)
      .then(() => toast.success("JSON data copied to clipboard"))
      .catch(() => toast.error("Failed to copy JSON data"));
  };

  if (!dev_mode) return null;

  React.useEffect(() => {
    setJsonInput(JSON.stringify(details, null, 2));
  }, [details]);

  return (
    <Grid
      item
      display="flex"
      alignItems="center"
      justifyContent="end"
      sx={{ cursor: "pointer", color: "blue" }}
      xs={2}
    >
      <Box
        onClick={() => setJsonModalOpen(true)}
        display="flex"
        alignItems="center"
        sx={{ cursor: "pointer" }}
      >
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
          />
        </svg>
        <Typography variant="h6">JSON Editor</Typography>
      </Box>

      <Dialog
        open={jsonModalOpen}
        onClose={(e) => {
          e.stopPropagation();
          setJsonModalOpen(false);
        }}
        onClick={(e) => e.stopPropagation()}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            minWidth: "800px",
          },
        }}
      >
        <DialogTitle sx={{ borderBottom: "1px solid #404040" }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              sx={{
                color: "#d4d4d4",
                fontFamily: "monospace",
                fontSize: "16px",
              }}
            >
              JSON Editor
            </Typography>
            <Box>
              <Button
                onClick={showSchema ? handleCopySchema : handleCopyJson}
                sx={{
                  color: "#569cd6",
                  ml: 1,
                  fontFamily: "monospace",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(86, 156, 214, 0.1)",
                  },
                }}
              >
                {showSchema ? "Copy Schema" : "Copy JSON"}
              </Button>
              <Button
                onClick={() => setShowSchema(!showSchema)}
                sx={{
                  color: "#569cd6",
                  fontFamily: "monospace",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(86, 156, 214, 0.1)",
                  },
                }}
              >
                {showSchema ? "Hide Schema" : "Show Schema"}
              </Button>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Grid container spacing={0}>
            {showSchema ? (
              <Grid item xs={12} sx={{ p: 2, borderBottom: "1px solid #404040" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#608b4e",
                    fontFamily: "monospace",
                    mb: 1,
                  }}
                >
                  Schema Reference
                </Typography>
                <textarea
                  rows={15}
                  style={{
                    backgroundColor: "#000",
                    color: "#ce9178",
                    width: "100%",
                    border: "none",
                    padding: "12px",
                    outline: "none",
                  }}
                  value={JSON.stringify(schemaExample, null, 2)}
                />
              </Grid>
            ) : (
              <Grid item xs={12} sx={{ p: 2, borderBottom: "1px solid #404040" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#608b4e",
                    fontFamily: "monospace",
                    mb: 1,
                  }}
                >
                  Paste your JSON here
                </Typography>
                <textarea
                  rows={15}
                  style={{
                    backgroundColor: "#000",
                    color: "#ce9178",
                    width: "100%",
                    border: "none",
                    outline: "none",
                    padding: "12px",
                  }}
                  placeholder="// Paste your JSON data here..."
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            bgcolor: "#1e1e1e",
            borderTop: "1px solid #404040",
            p: 2,
          }}
        >
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setJsonModalOpen(false);
            }}
            sx={{
              color: "#ce9178",
              fontFamily: "monospace",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "rgba(206, 145, 120, 0.1)",
              },
            }}
          >
            cancel
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleJsonPaste();
            }}
            variant="contained"
            sx={{
              color: "#fff",
              bgcolor: "#0e639c",
              fontFamily: "monospace",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#1177bb",
              },
            }}
          >
            loadData
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

EditorJSON.propTypes = {
  details: PropTypes.object.isRequired,
  setDetails: PropTypes.func.isRequired,
};

export default EditorJSON;
