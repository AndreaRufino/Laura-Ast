
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAstrologyAssistantResponse = async (userPrompt: string, history: { role: 'user' | 'model', text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    Você é a Laura Astróloga AI, uma assistente mística e acolhedora. 
    Seu objetivo é fornecer breves insights astrológicos, horóscopos e orientações espirituais. 
    Mantenha um tom gentil, empático e misterioso mas positivo. 
    Sempre mencione que para uma consulta profunda e personalizada, o usuário deve clicar no botão de WhatsApp da Laura.
    Use emojis relacionados à astrologia (✨, 🌙, 🪐, 🔮, 💫).
    Responda em português do Brasil.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.95,
        maxOutputTokens: 500,
      },
    });

    return response.text || "As estrelas estão um pouco nubladas agora. Tente me perguntar novamente em um momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, as energias digitais estão instáveis. Que tal entrar em contato direto pelo WhatsApp?";
  }
};
