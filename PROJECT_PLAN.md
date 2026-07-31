# Request Forge

## Current Phase

Request/Response UI Polish → Query Params & Auth

---

# Completed

## Setup & Architecture

- [x] Create project
- [x] Setup Vite
- [x] GitHub repository
- [x] Component structure

## React Fundamentals Practiced

- Component composition
- Controlled components
- Props
- useState
- State lifting
- Parent-child communication
- Conditional rendering
- Tab-based UI patterns

## Styling

- [x] Install Tailwind CSS (`@tailwindcss/vite`)
- [x] Custom theme tokens (`ui-dark`, `ui-panel`, `ui-border`, `ui-accent`,
  `ui-heading`, `ui-text`, `ui-muted`, `ui-emerald`, `ui-violet`, `ui-sky`)
- [x] lucide-react for icons
- [x] Navbar and Sidebar layout

## Request Builder

- [x] HTTP method selection (GET, POST, PUT, PATCH)
- [x] API URL input
- [x] Send button + loading state
- [x] Request body editor
- [x] JSON validation before sending
- [x] Automatic Content-Type handling
- [x] Request headers (dynamic key/value editor)
- [x] Request tabs (Body / Headers / Params / Auth) — Body & Headers functional

## Response Viewer

- [x] Fetch API integration
- [x] Response status, time, size metadata
- [x] Response headers extraction + display
- [x] Loading skeleton state
- [x] Status-coded error states (400/401/403/404/500)
- [x] "Ready for Request" empty state
- [x] JSON syntax highlighting (keys, strings, numbers, booleans, null)
- [x] Line numbers
- [x] Download response as `.json`
- [x] Expand / collapse response viewer
- [x] Response tabs (Response / Headers / Cookies) — Response & Headers functional

## Error Handling

- [x] HTTP error handling
- [x] Network error handling
- [x] Invalid JSON handling
- [x] Prevent duplicate requests while loading

---

## Components Created

### Layout
- Navbar
- Sidebar

### Request
- RequestPanel
- MethodSelect
- UrlInput
- SendButton
- BodyEditor
- HeaderEditor
- RequestTabs

### Response
- ResponsePanel
- ResponseHeaders
- ResponseTabs

### App
- App (top-level layout: Navbar + Sidebar + main content)

---

# Request Flow

User

↓

RequestPanel (method, url, body, headers)

↓

Fetch API

↓

External API

↓

Response Handling (status, time, size, headers)

↓

ResponsePanel (loading / error / empty / success states)

---

# State Management

## App State

- response
- responseHeaders
- error
- isLoading
- status
- responseTime
- responseSize

## RequestPanel State

- httpMethod
- url
- body
- headers
- activeTab (body / headers / params / auth)

## ResponsePanel State

- activeTab (response / headers / cookies)
- expanded

---

# Current Tasks

## Request Builder

- [ ] Add query parameters (Params tab)
- [ ] Sync query params bidirectionally with the URL input
- [ ] Add Authorization tab (Bearer token / Basic auth)
- [ ] Add DELETE method support

## Response Viewer

- [ ] Cookies tab (currently placeholder)
- [ ] Copy response to clipboard
- [ ] Search inside response

---

# Next Up

## Productivity

- [ ] Request history
- [ ] LocalStorage persistence
- [ ] Save requests
- [ ] Delete history
- [ ] Import / export requests

## UI

- [ ] Full responsive design pass (mobile sidebar)
- [ ] Animations / transitions
- [ ] Toast notifications
- [ ] Deploy

---

# Future Backend

- [ ] Django REST Framework
- [ ] Authentication
- [ ] JWT
- [ ] User collections
- [ ] Cloud storage

---

# Detailed Next Steps

1. **Query Parameters**

   Example:

   URL: `api.com/users?page=1`

   UI:

   | Key  | Value |
   |------|-------|
   | page | 1     |

2. **Authorization tab**

   Bearer Token UI → auto-injects `Authorization: Bearer <token>` header.
   Decide: inject directly into the `headers` array, or keep a separate
   `auth` state merged at send-time.

3. **DELETE method support**

4. **Cookies tab** in ResponsePanel (currently placeholder)

5. Consider extracting the JSON syntax highlighter (`highlightJson` in
   `ResponsePanel.jsx`) into `utils/` once more views need it.

---

# Engineering Rules

- Small features
- Understand before coding
- Review architecture
- Avoid unnecessary abstraction
- Build like production software