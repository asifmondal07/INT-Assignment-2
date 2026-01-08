import dotenv from 'dotenv';

dotenv.config(); 
const config = {
  port: process.env.PORT || 1000,
  openAiKey: process.env.OPENAI_API_KEY
};

export default config;
