import dotenv from 'dotenv';

dotenv.config(); 
const config = {
  port: process.env.PORT || 1000,
  geminiApiKey: process.env.GEMINI_API_KEY
};

export default config;
