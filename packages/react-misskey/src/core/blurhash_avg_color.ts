const chars =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~";

export const blurhashAvgColor = (blurhash: string) => {
  return `#${[...blurhash.slice(2, 6)]
    .map((x) => chars.indexOf(x))
    .reduce((a, c) => a * 83 + c, 0)
    .toString(16)
    .padStart(6, "0")}`;
};
