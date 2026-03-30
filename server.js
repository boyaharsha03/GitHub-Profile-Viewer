const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: { error: "Rate Limit Exceeded", message: "Too many requests from this IP! Our advanced API protections are stopping traffic. Try again after a minute." },
    standardHeaders: true, 
    legacyHeaders: false, 
});

app.use('/api', apiLimiter);

app.get('/api/github/:username', async (req, res, next) => {
    try {
        const username = req.params.username;
        
        const authHeader = req.header('Authorization');
        const config = {};
        if (authHeader) {
            config.headers = { 'Authorization': authHeader };
        }

        const response = await axios.get(`https://api.github.com/users/${username}`, config);
        res.json(response.data);

    } catch (error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    console.error("Advanced Error Caught:", err.message);

    if (err.response) {
        return res.status(err.response.status).json({
            error: "External API Integration Error",
            message: err.response.data.message || err.message,
            status: err.response.status
        });
    } else if (err.request) {
        return res.status(503).json({
            error: "Gateway Timeout",
            message: "Unable to reach the third-party API. Check network status."
        });
    }

    res.status(500).json({ error: "Internal Server Error", message: err.message });
});

app.listen(PORT, () => {
    console.log(`📡 Task-7 Expert External API Server is running locally on http://localhost:${PORT}`);
});
