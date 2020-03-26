const pool = require("./config/database");

module.exports = {
  formDetails: (data, callback) => {
    pool.query(
      `SELECT * FROM rf_form_details LEFT JOIN rf_submissions ON rf_form_details.id = rf_submissions.formid WHERE rf_form_details.form_type = ? AND rf_form_details.submit_date BETWEEN ? AND ?`,
      [
          data.form_type,
          data.start_date,
          data.end_date
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  }
};
