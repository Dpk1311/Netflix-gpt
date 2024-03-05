import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true,
  timeout: 20 * 1000, // This is the default and can be omitted
});

export default openai;
