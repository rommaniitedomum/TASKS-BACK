const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World TASKS APP roots  Node Test");
});

app.use(require("./routes/getRoutes"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
