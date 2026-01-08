import axios from 'axios';
import config from '../../config.js';

const generateEmail = async (purpose, recipientName, tone) => {
  const prompt = `
Write a short, customer-friendly email.

Purpose: ${purpose}
Recipient Name: ${recipientName}
Tone: ${tone}

Keep it concise and polite.
`;

  const startTime = Date.now();

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${config.openAiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      email: response.data.choices[0].message.content,
      responseTimeMs: Date.now() - startTime
    };
  } catch (error) {
    console.error(
      'OpenAI Error:',
      error.response?.data || error.message
    );
    throw error;
  }
};


export default generateEmail