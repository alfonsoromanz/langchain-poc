import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import { SerpAPI } from "langchain/tools";
import { initializeAgentExecutor } from "langchain/agents";


dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});
const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    location: "Austin,Texas,United States",
    hl: "en",
    gl: "us",
  })
];


const executor = await initializeAgentExecutor(tools, model, "zero-shot-react-description", true);

const question = "what is the biggest bitcoin transaction ever recorded?"
console.log(`Question: ${question} \n`);
const res = await executor.call({input: question})
console.log(`\n Response: ${res.output}`);
