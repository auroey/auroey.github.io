# auroey.github.io

Personal research homepage for Xinrui Tang, built with React and TypeScript.

This trial migration uses the newer React implementation as its foundation and
connects the complete histories of the previous `auroey.github.io` and
`web-portfolio` repositories. The legacy Jekyll templates remain recoverable in
Git history, but are not shipped in the current site.

## Content policy

- Keep verified biography, education, research interests, projects, and
  publications only.
- Do not copy demo publications, placeholder CV entries, stock images, or other
  upstream template content.
- Keep the AI chat UI disabled unless a protected server-side endpoint is
  deliberately configured.

## Local development

```bash
npm ci
npm start
```

Run the checks used for this migration:

```bash
npm test -- --watchAll=false
npm run build
npx eslint --max-warnings 0 ./src/
```

## Optional chat endpoint

The static homepage does not require an API key. Chat is off by default through
`REACT_APP_ENABLE_CHAT=false`.

If chat is enabled later, store `DASHSCOPE_API_KEY` only in the hosting
provider's server-side environment. Never add it to a tracked `.env` file or to
client-side variables. Add authentication, rate limiting, and an origin
allowlist before exposing the endpoint publicly.

## Deployment status

This branch is a local migration trial. It has not been pushed or deployed.
Deployment should be configured only after the content and migration commit are
reviewed.
