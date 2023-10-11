import type { Writable } from "svelte/store";

export interface ModalContext {
  open: Writable<boolean>;
  device: Writable<boolean>;
  toggleModal(custom?: unknown): void;
}

export interface ModalConfig {
  query?: Query | null;
  element?: string;
}

type Units = "px" | "em" | "rem" | "vw" | "vh" | "vmin" | "vmax" | "%";

type Width = `${"max" | "min"}-width: ${number}${Units}`;
type Range = `${Width} and ${Width}`;
type LevelFourRange = `${number}${Units} <= width <= ${number}${Units}`;
type LevelFourMin = `${number}${Units} <= width`;
type LevelFourMax = `width <= ${number}${Units}`;

export type Query = `(${LevelFourRange | LevelFourMax | LevelFourMin | Width | Range})`;
