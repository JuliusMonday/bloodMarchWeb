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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend/build')));
// app.use(express.static("public"));
// database connection
connectToDb();

// Import routes
const authRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/bloodGroupRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/", userRoutes);
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});
