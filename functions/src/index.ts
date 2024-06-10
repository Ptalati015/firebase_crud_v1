import * as functions from "firebase-functions";
import express = require("express");
import cors = require("cors");
import {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} from "./Controller";

const app = express();

// Use CORS middleware
app.use(cors({origin: true}));

// init route
app.get("/", (req, res) => res.status(200).send("Hey there!"));

// Create product
app.post("/api/v1/create", createProduct);

// Read product
app.get("/api/v1/read/:id", readProduct);

// Update product
app.put("/api/v1/update/:id", updateProduct);

// Delete product
app.delete("/api/v1/delete/:id", deleteProduct);

// Export express app
exports.app = functions.https.onRequest(app);

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
