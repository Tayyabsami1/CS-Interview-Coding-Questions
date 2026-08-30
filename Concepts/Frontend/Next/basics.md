## Benefits of Using NextJS

- SSR , File based routing ,API Routes
- Image Optimization , SEO Friendly , Built in code splitting
- Keep parents as Server and client components as deep as possible.

### SSR (Server Side Rendering)

- Next.js allows you to render React components on the server side, which can improve performance and SEO.
- Fetches data on every request and the data is fresh.

### SSG (Static Site Generation)

- Next.js allows you to pre-render pages at build time, which can improve performance and reduce server load.

### ISR (Incremental Static Regeneration)

- Static but refreshes after X seconds. Best of both worlds.

### Boundary between Server and Client Components

- You cannot import a server component into a client component. You can import a client component into a server component.
