import React from "react";
import { Button } from "./ui/button";

const Output = ({ editorRef, language }) => {
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if(!sourceCode) return;
    
  };
  return <div></div>;
};

export default Output;
