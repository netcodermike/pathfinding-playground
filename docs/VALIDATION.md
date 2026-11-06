# Validation

Authoring date: November 6, 2026. Host: Windows. Target: Windows, macOS, Linux; modern browser.

## Local result

Two Node test cases passed on the Windows authoring host. A separate local HTTP smoke check passed for HTML delivery, TypeScript-stripped JavaScript, module syntax, and asset allowlisting. Browser rendering and painting remain manual.

## Reproducible checks

The GitHub Actions workflow builds/runs the following on `ubuntu-latest`:

```sh
node --test test.ts
node --check server.ts
```

## Manual acceptance

Draw a weighted detour and a fully blocked goal, compare all three algorithms, move both endpoints, and save/load the map. Verify a route never crosses a wall.

A workflow file is not evidence of a passing run. Observed CI run links and source commits are recorded after publication. Native GUI, sound, sleep/resume, and platform permissions require direct target-platform acceptance even when model tests pass.

## Observed CI result

Passed on November 6, 2026: [target-platform build/check](https://github.com/netcodermike/pathfinding-playground/actions/runs/42198834987).

Verified source commit: `5d74e2c314e9c65831cec4d14363c8359206b14a`. This evidence identifies the exact tested source; a later documentation-only commit does not change that source.

The commands listed above passed. Native GUI/manual acceptance is not claimed by this CI result.
