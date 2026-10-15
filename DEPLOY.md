# Deployment notes

The canonical repository and public URL are intended to be:

- Repository: `https://github.com/auroey/auroey.github.io`
- Site: `https://auroey.github.io/`

Deployment is handled by GitHub Actions from the canonical repository's `main`
branch.

## Static homepage

The React application builds to `build/` with:

```bash
npm ci
npm run build
```

The deployment workflow installs the locked dependencies, builds the React app,
uploads `build/` as the Pages artifact, and deploys it to the `github-pages`
environment.

The current site is fully static. It contains no chat endpoint, runtime API-key
configuration, or Vercel-specific routing.
