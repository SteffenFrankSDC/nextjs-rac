import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import { api, type RouterOutputs } from "../utils/api";
import { AppHeader } from "../components/AppHeader";
import { NoteEditor } from "../components/NoteEditor";
import { NoteCard } from "../components/NoteCard";
import { TextField, Label, Text } from "~/design-system/TextField";
import { Input } from "~/design-system/Input";
import { ListBox, Section, Header, Item, Text as ItemText } from "~/design-system/ListBox";
import { Collection } from "react-aria-components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS React Aria Components Playground</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppHeader />
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
    <div className="m-5 grid grid-cols-4 gap-4">
      <div>

        <ListBox
          label="topics"
          items={topics}
          selectionMode="single"
          selectedKeys={selectedTopic == null ? undefined : [selectedTopic.id]}
          onSelectionChange={
            ([id]) => setSelectedTopic(topics?.find(topic => topic.id === id) ?? null)}
        >
          <Section>
            <Header>Topics</Header>
            <Collection items={topics}>
              {(topic: Topic) => (
                <Item id={topic.id}>
                  {/* {topic.title} */}
                  <ItemText slot="label">{topic.title}</ItemText>
                  <ItemText slot="description">{topic.id}</ItemText>
                </Item>
              )}</Collection>
          </Section>
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
          <Label>
            <Text slot="description">ENTER to create new topic</Text>
          </Label>
        </TextField>
      </div>

      <div className="col-span-3 flex flex-col gap-2">
        {notes?.map((note) => (
          <div key={note.id}>
            <NoteCard
              note={note}
              onDelete={() => void deleteNote.mutate({ id: note.id })}
            />
          </div>
        ))}

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
