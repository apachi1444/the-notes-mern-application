const express = require("express");
const connectDB = require("./config/connectDB.js");
const userRoutes = require("./Routes/userRouter");
const noteRoutes = require("./Routes/noteRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");
const app = express();
app.use(express.json());
const cors = require("cors");

connectDB();
const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(
  cors({
    origin: "http://127.0.0.1:5000",
  })
);

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
// use the userRoutes.js to handle endpoints that start with / api/ users
// the userRoutes is a Router Object

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get(
    "*",
    (
      req,
      res // whenver a get route we want to do the following function
    ) => res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
const PORT = process.env.PORT || 5000;
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server started on port ${process.env.PORT}`)); // to help us to create a web server
