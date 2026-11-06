# Pathfinding Playground

Paint a weighted map and compare breadth-first search, Dijkstra, and A* through animated exploration.

[![Build and verify](https://github.com/netcodermike/pathfinding-playground/actions/workflows/verify.yml/badge.svg)](https://github.com/netcodermike/pathfinding-playground/actions/workflows/verify.yml)

**Language:** TypeScript · **Platform:** Windows, macOS, Linux; modern browser · **App type:** Interactive browser algorithm lab

First-release learning implementation, with explicit scope below. This is one independently runnable app, not a placeholder in a combined repository.

## Features

- Editable 30 × 18 map with walls, clear tiles, mud, and movable endpoints.
- Three search algorithms with visited-cell animation and path display.
- Move count and algorithm cost; explicit BFS weight semantics.
- Save/load one map in browser localStorage.

## Requirements

Node.js 24.12+ and a browser. No npm dependencies or installation step.

## Quick start

```sh
git clone https://github.com/netcodermike/pathfinding-playground.git
cd pathfinding-playground
node server.ts
# Visit http://127.0.0.1:3010
```

Commands run from the repository root. Lines marked for a particular operating system apply only there. Language tools are prerequisites, not installed by the app. Close desktop windows normally; terminal/server apps stop with Ctrl+C unless their usage notes say otherwise.

## Example workflow

Paint a row of mud between start and goal, leaving a clear detour. BFS can choose a short route through mud. Dijkstra and A* should favor a cheaper detour. Completely wall off the goal to see “No route.” Save the map, reset, and load it again.

## Architecture, configuration, and data

`pathfinding.ts` exports a four-neighbor grid search with a frontier, distance map, predecessor map, and visited order. A* uses Manhattan distance times the smallest positive cell weight. BFS minimizes moves and treats all walkable tiles as cost 1; weighted algorithms pay the cost of entering each destination tile. `server.ts` serves an allowlisted HTML page and strips TypeScript annotations for its browser module with Node’s built-in API. `public/index.html` renders/edits the map on canvas and animates results. `test.ts` verifies weighted detours, unreachable targets, identical endpoints, and invalid input. The server binds only 127.0.0.1; PORT changes the default 3010. Browser map storage stays in the browser profile.

## Verification

Build with the quick-start command where needed, then run:

```sh
node --test test.ts
```

Manual acceptance: Draw a weighted detour and a fully blocked goal, compare all three algorithms, move both endpoints, and save/load the map. Verify a route never crosses a wall.

See [validation record](docs/VALIDATION.md) for observed checks and their limits. CI results verify only what the workflow runs; they do not establish native GUI correctness or production readiness.

## Limitations and next steps

Four-way movement only, with no diagonal movement or negative weights. The priority frontier is a sorted array rather than a heap, appropriate for this small grid. Browser canvas painting uses pointer input; map editing is not keyboard accessible. Animation temporarily locks editing. There is one saved map per browser origin. No hosted deployment, collaboration, accounts, or offline service worker.

## Troubleshooting

Use a current Node 24 release if TypeScript stripping is unavailable. An occupied port can be changed through PORT. Opening index.html directly will not resolve the generated module; run the server. Saved maps are origin-specific, so changing the port creates a different localStorage origin. Stop the server with Ctrl+C.

## Source map

- `package.json`
- `pathfinding.ts`
- `server.ts`
- `test.ts`
- `public/index.html`

## Development and license

Read [contributing](CONTRIBUTING.md) before changing the app, and [security/privacy](SECURITY.md) before supplying private data. Use synthetic fixtures for tests. No telemetry, paid API key, or account is required by the app itself. Dependencies, when present, are stated in Requirements.

[MIT license](LICENSE), copyright 2026 netcodermike.
