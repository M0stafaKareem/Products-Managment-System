require("dotenv").config();

const admin = require("firebase-admin");
const serviceAccount = require("./firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const express = require("express");
const cors = require("cors");
const productsRouter = require("./Routes/products.route");
const verifyIdToken = require("./middlewares/firebaseAuth");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products",verifyIdToken ,  productsRouter);

app.all("*", (req, res, next) => {
  return res.status(404).json({
    status: httpStatusText.ERROR,
    message: "this resourse isn't available",
  });
});

//global error handling
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatusText.ERROR,
    message: error.message,
    code: error.statusCode || 500,
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
