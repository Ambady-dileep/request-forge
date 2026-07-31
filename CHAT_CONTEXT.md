# Chat Context — Request Forge

Quick-reference context for resuming work in a new chat session.

---

## Project

Frontend-only API testing tool (Postman/Insomnia-style), built with React +
Vite + Tailwind CSS, for learning real-world frontend engineering.

## Repo

`D:\Brototype\request-forge`

## Current File Structure

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── request/
│   │   │   ├── BodyEditor.jsx
│   │   │   ├── HeaderEditor.jsx
│   │   │   ├── MethodSelect.jsx
│   │   │   ├── RequestPanel.jsx
│   │   │   ├── RequestTabs.jsx
│   │   │   ├── SendButton.jsx
│   │   │   └── UrlInput.jsx
│   │   └── response/
│   │       ├── ResponseHeaders.jsx
│   │       ├── ResponsePanel.jsx
│   │       └── ResponseTabs.jsx
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Tech Stack

- React + Vite
- Tailwind CSS (`@tailwindcss/vite` plugin)
- lucide-react (icons)
- Fetch API (no axios)

## What's Working

- App.jsx now renders a full layout shell: `Navbar` + `Sidebar` + main content
  area holding `RequestPanel` and `ResponsePanel`.
- RequestPanel: method select, URL input, send button, and a tab bar
  (Body / Headers / Params / Auth). Body and Headers tabs are functional;
  Params and Auth are placeholders.
- Request body is JSON-validated before send; `Content-Type` is set
  automatically when a valid JSON body is present.
- ResponsePanel now has four distinct UI states: loading (skeleton),
  error (status-coded heading/message), empty ("Ready for Request"), and
  success. Success view includes status pill, response time, size, download
  button, expand/collapse, and a tab bar (Response / Headers / Cookies —
  Cookies is a placeholder).
- JSON responses are rendered with syntax highlighting (keys, string values,
  numbers, booleans, null) and line numbers.

## Not Yet Implemented

- Query parameters (Params tab)
- Authorization tab (Bearer/Basic token UI)
- DELETE method
- Cookies tab
- Request history / localStorage persistence
- Copy-to-clipboard for responses

## Notes for Next Session

- Params tab should probably sync bidirectionally with the URL input
  (adding a param updates the URL query string and vice versa).
- Auth tab's Bearer token should inject directly into the `headers` array
  or into a separate `auth` state merged at send-time — needs a decision.
- Consider extracting the JSON syntax highlighter (`highlightJson` in
  `ResponsePanel.jsx`) into `utils/` once more views need it.