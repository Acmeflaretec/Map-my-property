import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
import { useMediaQuery, useTheme } from "@mui/material";

const TextEditor = ({ value, onChange }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("sm"));

  const handleEditorChange = (content) => {
    onChange({
      target: {
        name: "description",
        value: content,
      },
    });
  };

  return (
    <Editor
      apiKey={process.env.REACT_APP_TINY_API_KEY}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      value={value}
      onEditorChange={handleEditorChange}
    />
  );
};

TextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextEditor;
