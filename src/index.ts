import * as dotenv from "dotenv";
import { OpenAI } from "langchain";
import { APIChain } from "langchain/chains";


dotenv.config();

const model = new OpenAI({
  modelName: "gpt-3.5-turbo",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const API_DOCS = ` Base URL: https://api.yadio.io/
Endpoints:
- /exrates/{currency} where {currency} is a variable reflecting nation-state currencies

Valid values for currency: ARS (Argentine Peso), USD (United States dollar), EUR (Euro)

The response will be a JSON that will at least include a field called "BTC" reflecting the price of 1 bitcoin in the selected currency
`

const chain = APIChain.fromLLMAndAPIDocs(model, API_DOCS);

const res = await chain.call({
    question:
      "How much does it cost to buy half a bitcoin with argentine money?",
  });
  console.log({ res });
