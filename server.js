const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();

const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route files
const users = require("./routes/users");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to MERN Stack challenge backend." });
});

app.use("/api/users", users);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
