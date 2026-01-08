# INT-Assignment-2

AI-Powered Email Template Generator (Node.js)
 Overview

This project is a backend microservice built using Node.js and Express.js that generates short, customer-friendly email templates using an AI model.
The email content is generated based on the purpose, recipient name, and tone provided by the user.

This service demonstrates:

AI integration

Clean backend architecture

REST API design

Environment variable handling

AI response time logging




Tech Stack

Node.js

Express.js

Axios

dotenv

nodemon




create .env file : 

GEMINI_API_KEY=your_openai_api_key_here
PORT=1000



using postman :

method POST(localhost:1000/api/generate-email)


req-boady
row : 
   {
  "purpose": "Order delivery delay",
  "recipientName": "John",
  "tone": "apologetic"
}


api response : 
{
  "email": "Dear John,\n\nThank you for creating an account with us. Please follow the instructions sent to your email to activate your account.\n\nBest regards,\nSupport Team",
  "responseTimeMs": 742
}


