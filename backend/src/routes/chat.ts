import { Hono } from 'hono';
import { callLLM } from '../lib/llm';
import { buildSystemPrompt, buildMessages } from '../lib/prompts';

type Bindings = {
  LLM_PROVIDER: string;
  LLM_API_KEY: string;
};

export const chat = new Hono<{ Bindings: Bindings }>();

chat.post('/', async (c) => {
  const body = await c.req.json();
  const { message, context = {}, user = {} } = body;

  if (!message || typeof message !== 'string') {
    return c.json({ error: 'message is required' }, 400);
  }

  const provider = (c.env?.LLM_PROVIDER ?? 'groq') as any;
  const apiKey = c.env?.LLM_API_KEY ?? '';

  if (!apiKey) {
    // Fallback stub when no API key configured
    return c.json({
      role: 'assistant',
      content: `i hear you. right now i'm running without my brain (no API key configured), but once that's set up i'll be able to give you real, phase-aware guidance. hang tight!`,
    });
  }

  try {
    const systemPrompt = buildSystemPrompt(
      {
        name: user.name,
        age: user.age,
        conditions: user.conditions,
        symptoms: user.symptoms,
        goal: user.goal,
        phase: context.phase,
        day: context.day,
      },
      context,
    );

    const messages = buildMessages(
      systemPrompt,
      message,
      context.recentMessages ?? [],
    );

    const response = await callLLM(provider, apiKey, messages);

    return c.json({
      role: 'assistant',
      content: response.content,
    });
  } catch (err: any) {
    console.error('LLM error:', err.message);
    return c.json({
      role: 'assistant',
      content: "i'm having a moment — something went wrong on my end. try again?",
    }, 500);
  }
});
