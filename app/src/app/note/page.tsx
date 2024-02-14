import { notFound } from "next/navigation";
import { Note } from "react-misskey";

export const revalidate = 60 * 60 * 24;

type Props = {
  searchParams: {
    host?: string | string[];
    id?: string | string[];
  };
};
export default function Page({ searchParams }: Props) {
  const { host, id } = searchParams;

  if (!host || !id || Array.isArray(host) || Array.isArray(id)) {
    notFound();
  }

  return <Note id={id} host={host} />;
}
