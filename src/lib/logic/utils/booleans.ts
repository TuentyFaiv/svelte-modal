import type { Writable } from "svelte/store";

export function toggle(store: Writable<boolean>, custom: unknown) {
  if (typeof custom === "boolean") {
    store.set(custom);
  } else {
    store.update((prev) => !prev);
  }
}
