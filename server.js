const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoutes = require("./API/routes/userRoutes");
const notesRoutes = require("./API/routes/notesRoutes");
const locationsRoutes = require("./API/routes/locationsRoutes");
const { default: Axios } = require("axios");
const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

app.use(userRoutes);
app.use(notesRoutes);
app.use(locationsRoutes);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/footPrints", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});