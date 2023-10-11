import { onMount } from "svelte";
import { readable, writable } from "svelte/store";
import { toggle } from "../utils/booleans.js";

import type { ModalConfig, ModalContext } from "../typing/stores.modal.js";

export function faivmodal({ query = null, element }: ModalConfig = {}) {
  const config = { query, element };
  const open = writable<boolean>(false);
  const device = writable<boolean>(false);
  const media = typeof window !== "undefined" ? matchMedia(config.query ?? "(min-width: 0px)") : null;

  function toggleDevice(custom?: unknown) {
    toggle(device, custom);
  }

  function toggleModal(custom?: unknown) {
    toggle(open, custom);
  }

  function disableScroll(queryMedia: MediaQueryList | MediaQueryListEvent, isOpen: boolean) {
    const html = document.querySelector("html") as HTMLHtmlElement;
    const body: HTMLElement | null = config.element ? document.querySelector(config.element) : null;
    if (isOpen && queryMedia.matches) {
      html.style.overflow = "hidden";
      if (body) body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      if (body) body.style.overflow = "";
    }
  }

  function listener(event: MediaQueryListEvent) {
    open.subscribe((isOpen) => {
      if (isOpen && !event.matches) toggleModal(false);
      if (config.element) disableScroll(event, isOpen);
    });
    toggleDevice(media?.matches);
  }

  function unlisten() {
    media?.removeEventListener("change", listener, true);
  }

  function listen() {
    onMount(() => {
      media?.addEventListener("change", listener, true);

      open.subscribe((isOpen) => {
        if (config.element && media) disableScroll(media, isOpen);
      });
      toggleDevice(media?.matches);

      return () => {
        unlisten();
      };
    });
  }
  listen();

  const context = readable<ModalContext>({
    open,
    device,
    toggleModal,
  });

  return context;
}
