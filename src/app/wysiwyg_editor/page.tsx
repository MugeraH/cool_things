"use client";
import React from "react";
import { JSONContent } from "novel";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import Editor from "@/components/Editor/AdvancedEditor";
import { Card, CardContent } from "@/components/ui/card";
import { defaultValue } from "./default-value";
import { parse } from "path";

import { defaultExtensions } from "@/components/Editor/extensions";
import { slashCommand } from "@/components/Editor/slash-command";
import { Content } from "@radix-ui/react-popover";

type Props = {};

const extensions = [...defaultExtensions, slashCommand];

function EditorV2({}: Props) {
  const [value, setValue] = React.useState<JSONContent>(defaultValue);



  const renderContent = (content: JSONContent) => {
    return generateHTML(content, extensions);
  };

  return (
    <div>
      <h3>WYSIWYG Editor</h3>

      <div className="mt-2">
        <Editor initialValue={value} onChange={setValue} />

        <div className="mt-2">
          <Card>
            <CardContent className="text-white">
              <h2 className="pt-2">Content Preview</h2>

              <div>{`${value}`}</div>
              <div
                className="prose lg:prose-xl prose-headings:text-white text-white"
                dangerouslySetInnerHTML={{ __html: renderContent(value) }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EditorV2;
