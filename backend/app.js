const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/database");
require("dotenv").config();
const path = require("path")
// port and host
const port = process.env.PORT || 5000;
const host = process.env.HOST || "127.0.0.1";

// middlewares
const app = express();
app.use(cors({
    origin: 'https://bloodmatch.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '../frontend/dist')));

// database connection
connectToDb();

// Import routes
const authRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/bloodGroupRoutes");
app.get('/', (req, res) => {
    res.json({message:"this is just the backend use the normal url"})
})
// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/", userRoutes);
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
