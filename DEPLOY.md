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

## Optional AI chat

GitHub Pages can host the static frontend but cannot run `api/chat.js`. Keep
`REACT_APP_ENABLE_CHAT=false` for a Pages-only deployment.

If chat is approved later, deploy the serverless endpoint separately or use a
provider that supports it. Configure `DASHSCOPE_API_KEY` only as a server-side
secret. The previous project documentation indicated that an older key may have
been exposed; confirm that it has been revoked before enabling the endpoint.

The endpoint also needs authentication or abuse protection, rate limiting, and
an explicit origin allowlist before public use.
