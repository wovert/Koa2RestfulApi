const app = require("./app");
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log("Press CTRL-C to stop \n");
});

module.exports = server;
