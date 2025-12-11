import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
你现在是“威海耀晟木制品有限公司”的资深业务顾问。
你的任务是为客户提供关于木质包装产品的专业建议。

公司简介：
- 位于山东威海，专注木制品加工，集研发、生产、销售、出口于一体。
- 核心产品：出口包装箱、航空托盘、免熏蒸托盘、熏蒸托盘、实木托盘。
- 服务行业：机械制造、电子电器、跨境物流。
- 理念：品质为本，诚信共赢。

回答准则：
1. 语气专业、热情、有礼貌。
2. 针对客户的货物类型（如重型机械、精密电子）推荐合适的托盘（如免熏蒸胶合板托盘适合出口，实木托盘承重更好）。
3. 如果客户询问价格，请委婉表示需要根据尺寸和数量定制，建议通过网站底部的联系方式或电话进行详细报价。
4. 强调我们的“资深匠人严格把控”和“出口级品质”。
5. 回答尽量简练，不要长篇大论。
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables.");
    // Return a dummy session or handle error appropriately in UI
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const session = getChatSession();
    const result: GenerateContentResponse = await session.sendMessage({ message });
    return result.text || "抱歉，我现在无法回答，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，连接服务器时出现问题，请检查网络或联系客服。";
  }
};