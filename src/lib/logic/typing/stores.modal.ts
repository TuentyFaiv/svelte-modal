import type { Writable } from "svelte/store";

export interface ModalContext {
  open: Writable<boolean>;
  device: Writable<boolean>;
  toggleModal(custom?: unknown): void;
  // listen: VoidFunction;
}

export interface ModalConfig {
  query?: Query | null;
  element?: string;
}

type Width = `${"max" | "min"}-width: ${number}px`;

type Query = `(${Width})`;
