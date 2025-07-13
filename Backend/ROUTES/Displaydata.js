const express = require("express");
const router = express.Router();

router.post("/fooddata", (req, res) => {
  try {
    console.log()
    res.send([global.food_items,global.food_category])
  } catch (error) {
    console.error(error.message)
  }
});
module.exports = router;