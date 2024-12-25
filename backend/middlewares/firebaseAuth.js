const admin = require("firebase-admin");

const verifyIdToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split("Bearer ")[1]; 
  if (!idToken) {
    return res.status(401).json({ message: "Authorization token is required" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; 
    next(); 
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

module.exports = verifyIdToken;
