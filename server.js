const express = require("express");
const app = express();
const port = 9999;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// POST endpoint
app.post("/api/data", (req, res) => {
  // Log the entire request body
  console.log(req.body);

  // Send response
  res.json({
    message: "Data received successfully",
    receivedData: req.body,
  });
});

// Basic GET endpoint to test if server is running
app.get("/", (req, res) => {
  res.send("Server is running! Send POST requests to /api/data");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
