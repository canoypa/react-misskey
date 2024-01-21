import { Note } from "../types/misskey";

class NoteApiException extends Error {
  readonly name = "NoteApiException";

  constructor(
    readonly id: string,
    readonly code: number,
    readonly message: string
  ) {
    super(message);
  }
}

export const fetchNote = async (host: string, id: string): Promise<Note> => {
  const reqUrl = new URL("api/notes/show", `https://${host}`);
  const reqData = {
    noteId: id,
  };

  const res = await fetch(reqUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqData),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new NoteApiException(
      json.error.id,
      json.error.code,
      json.error.message
    );
  }

  return json as Note;
};
