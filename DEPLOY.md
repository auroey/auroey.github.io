# Deployment notes

The canonical repository and public URL are intended to be:

- Repository: `https://github.com/auroey/auroey.github.io`
- Site: `https://auroey.github.io/`

No deployment configuration is activated by this local trial.

## Static homepage

The React application builds to `build/` with:

```bash
npm ci
npm run build
```

Before enabling GitHub Pages, add and review a deployment workflow for the
canonical repository. Do not reuse the removed Jekyll workflow without adapting
it to publish the React build output.

The current site is fully static. It contains no chat endpoint, runtime API-key
configuration, or Vercel-specific routing.
