"use client";

import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { CODE_SNIPPETS } from "@/data/constants";
import Output from "./Output";
import { Button } from "./ui/button";

const CodeEditor = () => {
  const editorRef = useRef();
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS[language]);

  const handleOnMount = (editor) => {
    editorRef.current = editor;
    editorRef.current.focus();
  };
  const handleLanguageChange = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div>
    <div className="flex flex-row">

      <div className="flex justify-between w-[50%] p-5">
        
        <LanguageSelector
          language={language}
          onLanguageChange={handleLanguageChange}
          />
        <Button className="bg-green-500 text-black hover:text-white hover:bg-green-700">
          Run Code
        </Button>
      </div>
      <div className="flex w-[50%] justify-center items-center">

      <span className="text-bold text-xl">Output</span>
      </div>
          </div>
      <div className="grid grid-cols-2 gap-3">
        <div className=" border border-black ml-5">
          <Editor
            height="90vh"
            language={language}
            defaultValue="// Write your code here"
            value={value}
            onMount={handleOnMount}
            onChange={(value) => setValue(value)}
          />
        </div>
        <div className="border border-red-700 mr-5">
          <Output editorRef={editorRef} language={language}/>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
