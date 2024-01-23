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

