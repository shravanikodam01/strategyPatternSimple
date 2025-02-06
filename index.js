const express = require("express")
const TextFormatter = require('./formatter')

const UpperCaseStrategy = require("./strategies/uppercase");
const LowerCaseStrategy = require("./strategies/lowercase");

const app = express()
app.use(express.json())

app.post("/format", (req, res) => {
    const { text, method } = req.body;
  
    if (!text || !method) {
      return res.status(400).json({ error: "Text and method are required" });
    }
  
    let strategy;
    switch (method.toLowerCase()) {
      case "uppercase":
        strategy = new UpperCaseStrategy();
        break;
      case "lowercase":
        strategy = new LowerCaseStrategy();
        break;
      default:
        return res.status(400).json({ error: "Invalid formatting method" });
    }
  
    const formatter = new TextFormatter(strategy);
    res.json({ formattedText: formatter.format(text) });
  });
  
  // Start server
  app.listen(3000, () => console.log("Server running on port 3000"));