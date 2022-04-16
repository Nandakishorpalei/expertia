const app = require("./server");
const connect = require("./configs/db");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, async () => {
  try {
    await connect();

    console.log("This server runs on port", port);
  } catch (e) {
    console.log(e.message);
  }
});
