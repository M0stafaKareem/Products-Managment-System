require("dotenv").config();
const { algoliasearch } = require("algoliasearch");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const serviceAccount = require("./firebase-admin.json");
const productsRouter = require("./Routes/products.route");
const verifyIdToken = require("./middlewares/firebaseAuth");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/** Algolia Initial Indexing */
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);
const processRecords = async () => {
  const products = await prisma.products.findMany();
  const algoliaDTO = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      category: product.category,
      creationDate: product.createdAt,
    };
  });
  return await client.saveObjects({
    indexName: "products",
    objects: algoliaDTO,
  });
};
client.listIndices().then((indices) => {
  const indexExists = indices.items.some((item) => item.name === "products");

  if (!indexExists) {
    processRecords()
      .then(() => console.log("Successfully indexed objects!"))
      .catch((err) => console.error(err));
  } else {
    console.log("Index 'products' already exists");
  }
});

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json());
app.use(cors());
app.use("/api/products", productsRouter);

app.all("*", (req, res, next) => {
  return res.status(404).json({
    status: httpStatusText.ERROR,
    message: "this resourse isn't available",
  });
});

//global error handling
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: "fail",
    message: error.message,
    code: error.statusCode || 500,
    error,
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
