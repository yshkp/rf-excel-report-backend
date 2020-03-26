const {formDetails} = require("./controller");

const router = require("express").Router();

router.post("/form", formDetails);

module.exports = router;