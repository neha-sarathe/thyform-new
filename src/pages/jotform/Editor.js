import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
// import "./styles.css";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };
  return (
    <div className="text-editor text-editor-tab ml-0">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something here.."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
