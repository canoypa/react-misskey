"use client";

import { useNote } from "../core/use_note";
import "../styles/theme.css";
import { NoteContainer } from "./note_container";
import { NotePresent } from "./note_present";

type Props = {
  host: string;
  id: string;
};
export const Note = ({ host, id }: Props) => {
  const { data: note, error, isLoading } = useNote(host, id);

  if (isLoading) {
    return <NoteContainer>読み込み中...</NoteContainer>;
  }

  if (error || !note) {
    return <NoteContainer>ノートを表示できません</NoteContainer>;
  }

  return <NotePresent note={note} host={host} />;
};
