"use client";
import React from "react";
import NovelEditor from "@/components/Editor/NovelEditor";
import { Card, CardContent } from "@/components/ui/card";
import parse from "html-react-parser";
import { useScroll } from "framer-motion";

function EditorComponent() {
  const [content, setContent] = React.useState("");
  return (
    <div>
      <h3>WYSIWYG Editor</h3>

      <div className="mt-2">
        <NovelEditor setContent={setContent} title={""} />
        <div className="mt-2">
          <Card>
            <CardContent className="text-white">
              <h2 className="pt-2">Content Preview</h2>
              <div className="prose lg:prose-xl prose-headings:text-white">
                {parse(`${content}`)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EditorComponent;

// this uses

// "novel": "^0.1.22",
