const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: "Authorization token required" });

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded; // { _id, role }
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Middleware to check if user is admin
const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied: Admins only" });
  }
  next();
};

module.exports = {requireAuth,requireAdmin};