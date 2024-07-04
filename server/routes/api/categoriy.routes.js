const { Category } = require("../../db/models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const data = await Category.findAll();
    res.status(200).json(data);
  } catch ({message}) {
    res.status(500).json({error: message}) 
  }
 
});


module.exports = router;
