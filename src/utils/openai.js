import OpenAI from 'openai';
// import { openAI_Key } from './constants';
const openAI_Key=process.env.REACT_APP_OPENAI_KEY
console.log("API Key:", openAI_Key);
const openai = new OpenAI({
  apiKey: openAI_Key,
   // defaults to process.env["OPENAI_API_KEY"]
   dangerouslyAllowBrowser:'true'
});


export default openai