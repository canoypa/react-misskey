import { fetchNote } from "../core/fetch_note";
import "../styles/theme.css";
import { NotePresent } from "./note_present";

type Props = {
  host: string;
  id: string;
};
export const Note = async ({ host, id }: Props) => {
  const note = await fetchNote(host, id);

  return <NotePresent note={note} host={host} />;
};
