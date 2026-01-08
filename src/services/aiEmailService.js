import axios from "axios";
import config from "../../config.js";

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
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${config.geminiApiKey}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return {
      email: response.data.candidates[0].content.parts[0].text,
      responseTimeMs: Date.now() - startTime
    };
  } catch (error) {
    console.error(
      "Gemini API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default generateEmail;
