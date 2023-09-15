import OpenAI from 'openai';
import { openAI_Key } from './constants';

const openai = new OpenAI({
  apiKey: openAI_Key,
   // defaults to process.env["OPENAI_API_KEY"]
   dangerouslyAllowBrowser:'true'
});


export default openai