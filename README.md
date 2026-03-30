# GitHub Profile Viewer

A full-stack web application that fetches and displays GitHub user profiles through a secure Node.js proxy server with rate limiting and advanced error handling.

---

## 🚀 Features

- **GitHub API Integration** — Fetches real-time GitHub user data including name, avatar, followers, and public repositories
- **Server-Side Proxy** — All API requests are routed through a Node.js backend, avoiding CORS issues in the browser
- **Rate Limiting** — Restricts each IP to a maximum of 5 requests per minute to prevent abuse
- **Error Handling** — Gracefully handles 404 (User Not Found), 503 (Gateway Timeout), and 500 (Server Error) responses
- **Clean UI** — Responsive Bootstrap interface with profile card display

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js + Express | Backend server |
| Axios | HTTP requests to GitHub API |
| express-rate-limit | Request rate control |
| CORS | Cross-origin request handling |
| Bootstrap 5 | Frontend UI |

---

## 📂 Project Structure

```
├── server.js       # Express proxy server with rate limiting & error handling
├── public/
│   └── index.html  # Frontend UI (Bootstrap SPA)
├── package.json    # Project dependencies
└── README.md       # Project documentation
```

---

## ⚙️ How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. Open your browser and go to:
   ```
   http://localhost:3000
   ```

4. Type any GitHub username and click **Execute API Fetch** to view the profile.

---

## 🔒 Rate Limiting

The server allows a maximum of **5 requests per minute** per IP address. Exceeding this limit returns:

```json
{
  "error": "Rate Limit Exceeded",
  "message": "Too many requests from this IP! Try again after a minute."
}
```

HTTP Status: `429 Too Many Requests`

---

## ❗ Error Handling

| Status Code | Meaning | Cause |
|---|---|---|
| `404` | User Not Found | Invalid GitHub username |
| `503` | Gateway Timeout | GitHub API is unreachable |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Unexpected server failure |

---

## 📸 Screenshots

**Home Screen**
> Input a GitHub username and click Execute API Fetch.

**Profile Result**
> Displays avatar, name, followers, public repos, and a link to the GitHub profile.

---

## 📌 How It Works

1. User enters a GitHub username in the browser
2. The frontend sends a request to `/api/github/:username` on the local Node server
3. The Node server forwards the request to `https://api.github.com/users/:username` using Axios
4. GitHub responds with user data
5. The server sends the data back to the browser
6. The frontend renders the profile card

---
