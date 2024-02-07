import { FC } from "react";
import { Note } from "../types/misskey";
import { Mfm } from "./mfm";
import { NoteActions } from "./note_actions";
import { NoteBody } from "./note_body";
import { NoteContainer } from "./note_container";
import { NoteCreatedAt } from "./note_created_at";
import { NoteFiles } from "./note_files";
import { NoteFooter } from "./note_footer";
import { NoteHeader } from "./note_header";
import { NotePoll } from "./note_poll";
import { NoteReactions } from "./note_reactions";

type Props = {
  note: Note;
  host: string;
};
export const NotePresent: FC<Props> = ({ note, host }) => {
  if (note.isHidden || note.localOnly) {
    return <NoteContainer>ノートを表示できません</NoteContainer>;
  }

  const url = new URL(`/notes/${note.id}`, `https://${host}`);
  const emojiHost = note.user.host ?? host;

  const nyaize = note.user.isCat;

  const bodyMfmOptions = { host, emojiHost, largeEmoji: true, nyaize };

  return (
    <NoteContainer>
      <NoteHeader
        user={note.user}
        userHost={note.user.host ?? host}
        mfmOptions={{ host, emojiHost }}
      />
      {note.cw && <Mfm text={note.cw} options={bodyMfmOptions} />}
      <NoteBody
        text={note.text}
        hasCw={!!note.cw}
        mfmOptions={bodyMfmOptions}
      />
      {note.files && note.files.length > 0 && <NoteFiles files={note.files} />}
      {note.poll && <NotePoll poll={note.poll} />}
      <NoteFooter>
        <NoteCreatedAt createdAt={note.createdAt} noteUrl={url} />
        {Object.keys(note.reactions).length > 0 && (
          <NoteReactions
            reactions={note.reactions}
            reactionEmojis={note.reactionEmojis}
            host={host}
          />
        )}
        <NoteActions
          repliesCount={note.repliesCount}
          renoteCount={note.renoteCount}
        />
      </NoteFooter>
    </NoteContainer>
  );
};
