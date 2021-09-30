const router = require("express").Router();
router.get("/", (req, res) => { 
  res.json({ 
    error: null, 
    data: { 
      title: "My dashboard", 
      content: "dashboard content", 
      user: req.user, // informations sur la charge utile du jeton 
      role:req.body.role
    }, 
  }); 
}); 
module.exports = router ;