import { GoogleGenAI } from "@google/genai";

const ai = () => { return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); }

export async function geminiCall(triggeredUserInput) {
    
  const response = await ai().models.generateContent({
    model: "gemini-2.5-flash",
    contents: triggeredUserInput,
  });

  return response.text;
}


