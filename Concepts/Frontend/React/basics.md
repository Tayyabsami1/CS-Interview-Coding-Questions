- Controlled Components: React controls the form element's value. The input's value is driven by state.
- Use Controlled when:
  - You need to validate on every keystroke
  - You need to conditionally disable submit button
  - One input depends on another (confirm password)
  - You need to transform input as user types (auto-capitalize, phone formatting)

- Uncontrolled Components: DOM controls the value. You reach into the DOM to get it when you need it.
- Advance Component React Hook form uses uncontrolled component under the hood but gives you the DX of controlled.

### Difference between npm run dev and npm run build

- When you run locally: npm run dev
- Vite (or CRA/Next.js dev server) does things like:
  - Hot Module Replacement
  - Source maps
  - Error overlays
  - File watching
  - Automatic recompilation

- When you run: npm run build
- which produces something like:
  dist/
  │
  ├── index.html
  ├── assets/
  │ ├── main.js
  │ ├── vendor.js
  │ └── styles.css

- These are just static files.

## Component Re render rules

- State change
- Props change
- Context change (e.g. theme, language)
- Parent re-render

## State in React

-State in React is the data associated with an instance of a component. It persists across re-renders and when updated through react state mechanism causes a component to re render.

- State is stored in React Internal data structure know as React Fibers.

- Conceptually

```
  Fiber
  ├── component type
  ├── props
  ├── state/hooks
  ├── parent
  ├── child
  ├── sibling
  └── other bookkeeping
```

- React State batching behavior: React batches state updates for performance reasons. When multiple state updates occur in a single event loop, React groups them together and performs a single re-render instead of multiple re-renders.

## useEffect Hook

- It is used to perform side effects.
- It runs after the render is committed to the screen.

## useLayoutEffect Hook

- It is similar to useEffect but it fires before the browser has a change to paint.

## useRef Hook

- Two use cases:
  - To access a DOM element directly
  - To persist a value across renders without causing a re-render

## useMemo Hook

- It is used to memoize expensive calculations and avoid unnecessary recalculations on every render.

## useCallback Hook

- It is used to memoize functions and avoid unnecessary re-creations of functions on every render.
