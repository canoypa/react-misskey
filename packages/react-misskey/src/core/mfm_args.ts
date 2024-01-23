type V = string | true | undefined;
type E = string;
type D = string | null;

export function mfmArg(value: V, enabled: E): string;
export function mfmArg(value: V, enabled: E, defaults?: D): string | undefined;
export function mfmArg(value: V, enabled: E, defaults?: D) {
  if (typeof value === "string") {
    return value;
  }

  if (value === true) {
    return enabled;
  }

  if (defaults === null) {
    return undefined;
  }

  return defaults ?? enabled;
}

const normalizeHex = (hex: string) => {
  if (hex.length === 3) {
    return `${hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]}ff`;
  }
  if (hex.length === 4) {
    return (
      hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
    );
  }
  if (hex.length === 6) {
    return `${hex}ff`;
  }
  return hex;
};
export function mfmColorArg(
  colorArg: string | true | undefined
): string | true | undefined {
  if (colorArg === true || typeof colorArg === "undefined") {
    return colorArg;
  }

  const hex = normalizeHex(colorArg);

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const a = parseInt(hex.slice(6, 8), 16) / 255;

  return `rgb(${r} ${g} ${b} / ${a})`;
}
