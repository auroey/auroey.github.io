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
- Do not publish an outdated résumé.
- Keep the homepage static: the former AI chat UI and serverless endpoint have
  been removed from the current tree and remain available in Git history.

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

## Deployment status

This branch is a local migration trial. It has not been pushed or deployed.
Deployment should be configured only after the content and migration commit are
reviewed.
