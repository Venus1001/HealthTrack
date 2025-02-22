const { OpenAI } = require('openai');


const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY // Load API key from .env
  });
  
  async function generateResponse(promptText) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Change to "gpt-4" if needed
        messages: [{ role: "user", content: promptText }],
        max_tokens: 4096
      });
  
      console.log("AI Response:", response.choices[0].message.content);
      return response.choices[0].message.content
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
module.exports = generateResponse