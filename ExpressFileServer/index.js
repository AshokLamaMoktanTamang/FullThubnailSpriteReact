const express = require("express"),
  app = express();

app.use('/file', express.static('./file'))
app.use('/sprite', express.static('./output'))

app.listen(5000, () => {
  console.log(`app listening at port http://localhost:5000`);
});
