# Ratio1 Worker App Runner Demo

A minimal React + Vite app designed to demonstrate auto-refresh functionality with Ratio1 Worker App Runner.

## Features

- **Simple React App**: Single page application with no routing
- **Auto-refresh Demo**: Change the title in `src/App.jsx` and push to see updates
- **Version Panel**: Shows build-time environment variables
- **Ratio1 Images**: Displays images from ratio1.ai with graceful fallback
- **Static Build**: Generates static files for easy deployment

## Environment Variables

Configure these in `.env` (build-time only):

- `VITE_GREETING`: Custom greeting message (default: "Hello from Worker App Runner!")
- `VITE_GIT_COMMIT`: Git commit hash (default: "dev")

## Development

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Auto-refresh Demo

1. Edit the title in `src/App.jsx` (line 114)
2. Commit and push to your watched branch
3. Watch the app automatically rebuild and update

## Deployment

The app builds to static files in the `dist/` directory and can be served by any static file server or CDN.