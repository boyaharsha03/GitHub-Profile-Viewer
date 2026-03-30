# Task-7: External API Integration and Implementation

## 📌 What is this task
**Level 4: Expert**  
This task demonstrates mastery over complex network infrastructure exploring how internal nodes talk seamlessly alongside third-party resources (like GitHub). It integrates crucial real-world "Advanced API" concepts such as security proxies, rigorous error handling, and robust endpoint Rate Limiting defending applications against DDoS attacks structurally.

## 📂 Structure
- `server.js`: Uses the highly-popular `axios` HTTP library locally fetching external APIs cleanly without breaching CORS limitations natively affecting client browsers. Contains protective parameters blocking spam IPs seamlessly (`express-rate-limit`).
- `public/index.html`: The user-accessible Bootstrap SPA UI designed exclusively to input targets mapping requests perfectly targeting the internal network Node proxy.

## ⚙️ Working Steps Executed
1. **Investigate secure API Authentication (OAuth mechanics):** Inside `server.js`, an explicit pipeline passes forward localized `Authorization` header configurations into the `axios.get()` bridge natively mimicking and supporting how applications implement secure Personal Access Token (PAT) authentication natively to external frameworks (OAuth endpoints).
2. **Integrate an External API:** The application directly communicates entirely outward leveraging **GitHub's Public API Engine (`api.github.com`)**. The Node server intercepts frontend inputs parsing profiles, translating responses, and delivering them back cleanly to `index.html`. 
3. **Advanced API Features (Rate Limiting + Error Catching):** Employs explicit dependencies (`express-rate-limit`) completely choking user inputs artificially setting max queries to 5 requests per 60,000 milliseconds avoiding unexpected server billing shocks natively! Introduces a sophisticated catch-all Express error block determining perfectly whether failures were 404s (User not found directly mapping Github rejections) or 503s (Complete total Gateway timeouts).

## 🚀 How to Run

1. Eliminate old instances by verifying earlier Task Node servers are shut off utilizing `Ctrl + C` targeting your active Windows terminal.
2. Advance natively into `Task-7`:
   ```bash
   cd c:/Users/boyah/OneDrive/Desktop/Internship/Task-7
   ```
3. Assure required modules (`axios`, `express-rate-limit` etc) exist:
   ```bash
   npm install
   ```
4. Start the internal proxy environment:
   ```bash
   node server.js
   ```
5. Test your External application routing opening `http://localhost:3000` via a web browser!
6. **Rate Limit Audit:** To examine the advanced API rate limiting yourself explicitly, try spam clicking the "Fetch Date" button over 5 consecutive times quickly natively observing the server actively locking out traffic delivering the HTTP `429 Too Many Requests` code natively inside the Warning Box!
