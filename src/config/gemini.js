//  npm install @google/generative-ai
// const apiKey = "AIzaSyAUyjyL3JzTWoKk_TI2xGI9vR6WsTjAaQY";

import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = "AIzaSyAUyjyL3JzTWoKk_TI2xGI9vR6WsTjAaQY";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text()); // Log the full response directly
  return result.response.text(); // Return the AI response text or object

}

export default run;