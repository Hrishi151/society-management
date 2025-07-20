import jwt from "jsonwebtoken";

// Verify JWT Token
export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expect "Bearer token"
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // { id, role }
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid Token" });
  }
};

// Allow only Admin
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access Denied: Admins Only" });
  }
  next();
};
