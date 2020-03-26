const { formDetails } = require("./form");

module.exports = {
  formDetails: (req, res) => {
    const body = req.body;
    formDetails(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "database connection error"
        });
      }
      return res.status(200).json({
        data: results
      });
    });
  }
};
