import { useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

import { Input } from "~/design-system/TextField";
import { Button } from "~/design-system/Button";

export const NoteEditor = ({
  onSave,
}: {
  onSave: (note: { title: string; content: string }) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <div className="card border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body  m-0 p-3">
        <h2 className="card-title">
          <Input
            type="text"
            placeholder="Note title"
            className="w-full font-bold"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </h2>
        <CodeMirror
          value={code}
          width="500px"
          height="30vh"
          minWidth="100%"
          minHeight="30vh"
          extensions={[
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
          onChange={(value: string) => setCode(value)}
          className="border border-gray-300"
        />
      </div>
      <div className="card-actions m-3 flex justify-end">
        <Button
          onPress={() => {
            onSave({
              title,
              content: code,
            });
            setCode("");
            setTitle("");
          }}
          className="btn-primary"
          isDisabled={title.trim().length === 0 || code.trim().length === 0}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
