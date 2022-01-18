const express = require("express"); // Import modules
const cors = require("cors");

const feedController = require("./controllers/FeedController.js");

const PORT = 3000;

const app = express();

const corsOptionsDelegate = function (req, callback) {
  const allowlist = [
    `http://localhost:3000`,
    "http://127.0.0.1:3000",
    `http://localhost:3001`,
    `https://feed-app.netlify.app`,
  ];
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

//middleware
app.use(cors(corsOptionsDelegate));

app.use(express.json());
app.use("/feed", feedController);

app.listen(process.env.PORT || PORT, () => {
  console.log(`app listening on ${PORT}`);
});
