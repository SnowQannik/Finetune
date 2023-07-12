const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

const PORT = 8020;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});






// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const{Configuration, OpenAIApi} = require("openai");


// const config = new Configuration({
//     apiKey: "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",
// });

// const openai = new OpenAIApi(config);

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// app.post("/chat",async (req,res) => {
//     const{prompt} = req.body;

//     const completion = await openai.createCompletion({
//         model:"text-davinchi-003",
//         max_tokens: 512,
//         temperature: 0,
//         prompt:prompt,
//     });
//     res.send(completion.data.choices[0].text);
// });

// const PORT = 8020;

// app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);
// });