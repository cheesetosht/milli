const API_URL = __DEV__ ? 'http://localhost:8787' : 'https://milli-api.your-domain.workers.dev';

interface ChatRequest {
  message: string;
  context: {
    phase: string | null;
    day: number | null;
    recentMessages: { role: string; content: string }[];
  };
  user: {
    name: string;
    age: number | null;
    conditions: string[];
    symptoms: string[];
    goal: string | null;
    cycleLength: number;
    isIrregular: boolean;
  };
}

interface ChatResponse {
  role: 'assistant';
  content: string;
}

export async function sendChatMessage(req: ChatRequest): Promise<ChatResponse> {
  const res = await fetch(`${API_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
