const express = require("express");
const app = express();
const PORT = 5000;

// Listen
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
