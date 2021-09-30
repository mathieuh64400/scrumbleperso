const jwt = require("jsonwebtoken");
// middleware pour valider le jeton 
const verifyToken = (req, res, next) => { 
  const token = req.header("auth-token"); 
  if (!token) return res.status(401).json({ error: "Accès refusé" });
  try { 
    const verified = jwt.verify(token, process.env.TOKEN_SECRET); 
    req.user = verified ; 
    next(); // pour continuer le flux 
  } catch (err) { 
    res.status(400).json({ error: "Token n'est pas valide" }); 
  } 
} ; 
module.exports = verifyToken;