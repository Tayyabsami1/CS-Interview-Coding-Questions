## Dependency Injection

### What problems does it solve

- Tight Coupling
- Testing is a nightmare
- No singleton control — Every new UserService() creates new instances of everything inside. Wasteful.

### What NestJS Do

- NestJS sees the constructor types, creates everything, wires everything, gives you ready-to-use instances. You never call new manually.

### What happends under the hood

- Typescript Decorators and metadata. TS automatically emit type meta data for every class. NestJS reads this meta data to know what to inject.

```
// TypeScript compiler adds this metadata automatically:
Reflect.defineMetadata(
  'design:paramtypes',   // key
  [UserRepository, EmailService], // the constructor param types
  UserService            // the target class
)
```

### The IoC Container — The Real Engine

- NestJs maintains an IOC Container (a map of all providers)
- NestJS scans each module find providers and register them in a container.
- Then it reads each provider constructor meta data
- User Controller needs -> User Service
- User Service Needs -> User Repo and Email Service
- User Repo needs -> nothing
- Like this NestJS builds a dependency Graph
-
