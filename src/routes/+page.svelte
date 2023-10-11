<script lang="ts">
  import { faivmodal } from "../lib/index.js";

  const modal = faivmodal({
    query: "(300px <= width <= 768px)",
  });
  const { open, device, toggleModal } = $modal;

  $: console.log({ $open, $device });
</script>

<h1>Welcome to your library project</h1>
<p>
  Create your package using @sveltejs/package and preview/showcase your work
  with SvelteKit
</p>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button type="button" on:click={toggleModal}>
  {#if $open}
    Close
  {:else}
    Open
  {/if}
</button>
