# Request Forge

A frontend API testing tool inspired by Postman and Insomnia.

Built with React to learn real-world frontend engineering by creating a production-style application instead of following tutorials.

---

# Project Goals

- Learn React through real application development
- Understand component architecture
- Practice state management patterns
- Learn HTTP communication using Fetch API
- Build a portfolio-quality frontend project
- Follow professional software engineering practices

---

# Current Features

## Request Builder

- HTTP method selection
- API URL input
- Send API requests
- Support GET requests
- Support POST requests
- Support PUT requests
- Support PATCH requests


## Request Body

- JSON request body editor
- JSON validation before sending
- Automatic Content-Type handling


## Request Headers

- Dynamic header editor
- Add multiple headers
- Custom Authorization headers
- Custom API headers support


## Response Viewer

- Display JSON response
- Pretty formatted JSON output
- Response status
- Response time
- Response size


## Response Headers

- Extract response headers
- Display response headers


## Error Handling

- HTTP error handling
- Network error handling
- Invalid JSON handling
- Loading state management
- Prevent duplicate requests while loading

---

# Tech Stack

Frontend:

- React
- Vite
- JavaScript (ES6+)
- Fetch API

Future:

- Tailwind CSS
- Django REST Framework backend

---

# Project Structure

src/
│
├── components/
│ │
│ ├── request/
│ │ ├── MethodSelect.jsx
│ │ ├── UrlInput.jsx
│ │ ├── SendButton.jsx
│ │ ├── BodyEditor.jsx
│ │ ├── HeaderEditor.jsx
│ │ ├── RequestTabs.jsx
│ │ └── RequestPanel.jsx
│ │
│ ├── response/
│ │ ├── ResponsePanel.jsx
│ │ ├── ResponseHeaders.jsx
│ │ └── ResponseTabs.jsx
│ │
│ └── layout/
│
├── services/
│
├── hooks/
│
├── utils/
│
├── pages/
│
├── App.jsx
└── main.jsx



---

# React Concepts Practiced

- Functional Components
- Component Composition
- Props
- State Management
- useState Hook
- Controlled Components
- Lifting State Up
- Parent → Child Data Flow
- Conditional Rendering
- Component Reusability

---

# JavaScript Concepts Practiced

- async / await
- Fetch API
- Promises
- Response Object
- JSON Parsing
- Error Handling
- Object Manipulation
- Array Methods
- Spread Operator
- Dynamic Object Keys
- Performance API

---

# HTTP Concepts Practiced

- HTTP Methods
    - GET
    - POST
    - PUT
    - PATCH

- HTTP Headers
- Request Body
- Content-Type
- Authorization Headers
- Response Headers
- Status Codes
- Response Metadata
- API Error Handling

---

# Application Flow

User Input

↓

RequestPanel

↓

Fetch API

↓

External API Server

↓

Response Processing

↓

ResponsePanel


---

# Current Progress

## Completed ✅

- Project setup
- React architecture
- Component structure
- Request builder
- Fetch API integration
- JSON response viewer
- Error handling
- Loading state
- Response metadata
- Request body support
- JSON validation
- Request headers
- Authorization headers
- Response headers


## Currently Working 🚧

Request Builder improvements:

- Body / Headers / Params tabs
- Query parameters
- Better request organization


## Planned

### Productivity Features

- Request history
- Local storage
- Save recent requests
- Delete history
- Import/export requests


### UI Improvements

- Tailwind CSS
- Professional layout
- Responsive design
- Dark mode
- Better JSON viewer
- Copy response button
- Toast notifications
- Animations


### Deployment

- Production build
- Hosting
- Performance optimization


---

# Future Backend Version

Possible backend upgrade using Django REST Framework:

- User authentication
- JWT authentication
- Saved API collections
- Workspaces
- Team collaboration
- Environment variables
- Cloud synchronization

---

# Getting Started

Clone repository:

```bash
git clone https://github.com/Ambady-dileep/request-forge.git

Navigate:

cd request-forge/frontend

Install dependencies:

npm install

Run development server:

npm run dev
Learning Philosophy

This project is built incrementally.

Every feature follows:

Understand the problem
Design the component architecture
Implement a small change
Test functionality
Debug issues
Refactor when needed

The goal is not only to build a working application, but to understand the engineering decisions behind it.

Author

Dileep Ambady

Learning Full Stack Development with React, Django, and Django REST Framework through real-world projects.


After updating:

```bash
git add README.md

git commit -m "docs: update README with current project features and architecture"

git push