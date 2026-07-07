🔗 URL Shortener

A simple URL Shortener built with the MERN Stack. Paste a long URL, get a short link — visit the short link, get redirected 
to the original.

🛠️ Tech Stack
Backend — Node.js, Express.js
Database — MongoDB, Mongoose

🚀 How It Works

1. User submits a long URL from the React frontend
2. Backend generates a unique short code using nanoid
3. The mapping is saved in MongoDB
4. Visiting the short URL triggers a redirect to the original URL

📡 API Endpoints

Method    Endpoint           Description
POST    /api/shorten         Takes a long URL, returns a short URL
GET     /:shortCode          Redirects to the original URL
