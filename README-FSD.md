app/ → Bootstrap, providers, router
pages/ → Route components (compose widgets)
widgets/ → Composed blocks (entities + features)
features/ → User actions (UI + logic + API)
entities/ → Business models (UI + store + API + types)
shared/ → Reusable infrastructure (no business logic!)

---

## Segments

ui/ — components
model/ — store, slices, reducers, selectors
api/ — queries, mutations, endpoints
lib/ — helper functions specific to this slice
types/ — TypeScript types for this entity/feature

## FSD Layers (Corrected Reference)

### `shared`

EN: Reusable infrastructure code with zero business logic. UI-kit, utilities, hooks, constants, assets, API client configuration, global types, base styles.
