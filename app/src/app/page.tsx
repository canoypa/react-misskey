import { MfmMention } from "react-misskey";

export default function Home() {
  return (
    <main>
      <MfmMention
        host="misskey.io"
        node={{
          type: "mention",
          props: { acct: "@ai", host: "", username: "" },
        }}
      />
    </main>
  );
}
