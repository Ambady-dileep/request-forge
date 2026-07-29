# Request Forge

## Current Phase

Core Request Workflow

---

## Completed

### Project Setup
- Vite
- React
- Git
- GitHub Repository

### React Fundamentals
- Component composition
- Controlled components
- Props
- useState
- Lifting State Up
- Parent → Child data flow

### Components
- RequestPanel
- MethodSelect
- UrlInput
- SendButton
- ResponsePanel

### Request Flow
- Select HTTP Method (GET, POST UI only)
- Enter API URL
- Send request using Fetch API
- Parse JSON response
- Display response in ResponsePanel

### State Management
App
- response
- error

RequestPanel
- method
- url
- receives setResponse
- receives setError

ResponsePanel
- receives response

### Error Handling
- Validate response.ok
- Prevent JSON parsing on failed HTTP responses
- Store error in App state
- Clear error after successful request

---

## Current Task

Implement complete error handling

Next Steps

1. Pass error to ResponsePanel
2. Display error message
3. Handle network errors using try/catch
4. Add loading state (isLoading)
5. Disable Send button while request is running

---

## Learning Style

- Learn one concept at a time
- Never skip reasoning
- Build features in very small steps
- Think before writing code
- Review code like a senior engineer
- Focus on architecture over speed

---

## Tech Stack

- React
- Vite
- Fetch API

---

## Project Goal

Frontend-only API Testing Tool inspired by Postman/Insomnia.

Primary objective:
Learn React fundamentals deeply while building a portfolio-quality project using professional software engineering practices.