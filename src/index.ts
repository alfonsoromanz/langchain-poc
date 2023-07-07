import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const question = "what is the current price of bitcoin?"
const res = await model.call(
  question
);

console.log(`Question: ${question}`);
console.log(`Response: ${res}`);
