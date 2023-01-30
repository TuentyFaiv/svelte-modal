# Svelte Forms

`npm install @tuentyfaiv/svelte-modal`

## Examples
```typescript
import { modalStore } from "@tuentyfaiv/svelte-modal";

const modal = modalStore({
  query: "(max-width: 768px)",
});
const { open, device, toggleModal } = $modal;
```
