
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getGuidanceRecommendation(
  subject: string, 
  challenge: string, 
  grade: string
) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `As an academic counselor for a premium tutoring platform focusing on STEM and character building, provide a response to a parent whose child is struggling with ${subject} in ${grade}. 
    The parent describes the challenge as: "${challenge}". 
    
    In your response:
    1. Acknowledge the difficulty and offer encouragement.
    2. Suggest 2-3 specific study habits to reinforce school lessons.
    3. Explain how our mentorship approach (discipline, responsibility, and hard work) can help.
    4. Recommend the "type" of tutor they should look for (e.g., "Patient Conceptualist", "Rigorous Problem Solver").`,
    config: {
      temperature: 0.7,
      topP: 0.95,
      maxOutputTokens: 1000,
    }
  });

  return response.text;
}

export async function getSubjectPlan(subject: string, topic: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Create a 4-week reinforcement lesson plan for a student who needs help with ${topic} in the subject of ${subject}. 
    The plan should focus on supporting school work, solving assignments, and building confidence.
    Structure the response in JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          weeks: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                week: { type: Type.NUMBER },
                focus: { type: Type.STRING },
                activities: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING } 
                },
                characterGoal: { type: Type.STRING }
              },
              required: ["week", "focus", "activities", "characterGoal"]
            }
          }
        },
        required: ["weeks"]
      }
    }
  });

  return JSON.parse(response.text);
}
