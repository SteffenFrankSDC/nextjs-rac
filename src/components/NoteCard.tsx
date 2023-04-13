import { useState } from "react";


import ReactMarkdown from "react-markdown";
import { Button } from "~/design-system/Button";

import { type RouterOutputs } from "../utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div className="card border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body p-1">
        <div
          className={`collapse-arrow ${isExpanded ? "collapse-open" : ""
            } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="collapse-title font-bold">{note.title}</div>
          <div className="collapse-content">
            <article className="prose">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 mb-2 flex justify-end">
          <Button
            variant="ghost"
            semantics="error"
            size="xs"
            onPress={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div >
  );
};
