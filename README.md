# Svelte Modal

`npm install @tuentyfaiv/svelte-modal`

## Examples
```typescript
import { faivmodal } from "@tuentyfaiv/svelte-modal";

const modal = faivmodal({
  query: "(max-width: 768px)", // "(768px <= width <= 1024px)"
});
const { open, device, toggleModal } = $modal;
```
