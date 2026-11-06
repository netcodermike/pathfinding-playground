# Validation

Authoring date: November 6, 2026. Host: Windows. Target: Windows, macOS, Linux; modern browser.

## Local result

Two Node test cases passed on the Windows authoring host. Browser rendering and painting remain manual.

## Reproducible checks

The GitHub Actions workflow builds/runs the following on `ubuntu-latest`:

```sh
node --test test.ts
node --check server.ts
```

## Manual acceptance

Draw a weighted detour and a fully blocked goal, compare all three algorithms, move both endpoints, and save/load the map. Verify a route never crosses a wall.

A workflow file is not evidence of a passing run. Observed CI run links and source commits are recorded after publication. Native GUI, sound, sleep/resume, and platform permissions require direct target-platform acceptance even when model tests pass.
