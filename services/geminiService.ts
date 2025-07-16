import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

export async function generateConfirmationMessage(name: string, inquiry: string): Promise<string> {
  const model = "gemini-2.5-flash";
  const systemInstruction = `You are a friendly, professional assistant for 'Ethereal Vows', a high-end wedding photography business. Your tone should be warm, reassuring, and elegant. A potential client has just filled out the contact form. Your task is to generate a brief confirmation message. Acknowledge them by name, confirm receipt of their message, and let them know the lead photographer will personally respond within 24-48 hours. Keep the response concise and under 50 words.`;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: `The client's name is ${name} and their message is: "${inquiry}"`,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating confirmation message:", error);
    // Provide a graceful fallback message in case of an API error.
    return `Thank you for your message, ${name}. We've received your inquiry and will get back to you as soon as possible.`;
  }
}
