import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import { api, type RouterOutputs } from "../utils/api";
import { Header } from "../components/Header";
import { NoteEditor } from "../components/NoteEditor";
import { NoteCard } from "../components/NoteCard";
import { Item, ListBox } from "react-aria-components";
import { TextField, Label, Input, Text } from "~/design-system/TextField";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS React Aria Components Playground</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Content />
      </main>
    </>
  );
};

export default Home;

type Topic = RouterOutputs["topic"]["getAll"][0];

const Content: React.FC = () => {
  const { data: sessionData } = useSession();

  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const { data: topics, refetch: refetchTopics } = api.topic.getAll.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined,
      onSuccess: (data) => {
        setSelectedTopic(selectedTopic ?? data[0] ?? null);
      },
    }
  );

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  const { data: notes, refetch: refetchNotes } = api.note.getAll.useQuery(
    {
      topicId: selectedTopic?.id ?? "",
    },
    {
      enabled: sessionData?.user !== undefined && selectedTopic !== null,
    }
  );

  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  return (
    <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
      <div className="px-2">

        <ListBox
          label="topics"
          items={topics}
          className="btn-group btn-group-vertical w-56 bg-base-100 p-2"
          selectionMode="single"
          selectedKeys={selectedTopic == null ? undefined : [selectedTopic.id]}
          onSelectionChange={
            ([id]) => setSelectedTopic(topics?.find(topic => topic.id === id) ?? null)}
        >

          {(topic: Topic) => (
            <Item
              id={topic.id}
              className={({ isSelected }) => isSelected ? "btn btn-active" : "btn btn-ghost"}
            >
              {topic.title}
            </Item>
          )}
        </ListBox>

        <div className="divider"></div>
        <TextField
          inputMode="text"
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              createTopic.mutate({
                title: e.currentTarget.value,
              });
              e.currentTarget.value = "";
            }
          }}
        >
          <Label>
            New Topic
          </Label>
          <Input
            className="w-full"
          />
          <Label><Text slot="description">ENTER to create new topic</Text></Label>
        </TextField>
      </div>

      <div className="col-span-3">
        <div>
          {notes?.map((note) => (
            <div key={note.id} className="mt-5">
              <NoteCard
                note={note}
                onDelete={() => void deleteNote.mutate({ id: note.id })}
              />
            </div>
          ))}
        </div>

        <NoteEditor
          onSave={({ title, content }) => {
            void createNote.mutate({
              title,
              content,
              topicId: selectedTopic?.id ?? "",
            });
          }}
        />
      </div>
    </div>
  );
};
