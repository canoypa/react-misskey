import useSWR from "swr";
import { fetchNote } from "./fetch_note";

export const useNote = (host: string, id: string) => {
  const { data, error, isLoading } = useSWR(host + id, () =>
    fetchNote(host, id)
  );

  return {
    data,
    error,
    isLoading,
  };
};
