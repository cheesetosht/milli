// Provider-agnostic LLM wrapper
// Swap provider by changing this one file

interface LLMMessage {
  role: string;
  content: string;
}

interface LLMResponse {
  content: string;
}

type Provider = 'groq' | 'gemini' | 'anthropic' | 'openai';

interface ProviderConfig {
  apiKey: string;
  model: string;
  baseUrl: string;
}

const PROVIDER_CONFIGS: Record<Provider, Omit<ProviderConfig, 'apiKey'>> = {
  groq: {
    model: 'llama-3.3-70b-versatile',
    baseUrl: 'https://api.groq.com/openai/v1/chat/completions',
  },
  gemini: {
    model: 'gemini-2.0-flash',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
  },
  anthropic: {
    model: 'claude-sonnet-4-20250514',
    baseUrl: 'https://api.anthropic.com/v1/messages',
  },
  openai: {
    model: 'gpt-4o-mini',
    baseUrl: 'https://api.openai.com/v1/chat/completions',
  },
};

// Most providers support the OpenAI-compatible format
async function callOpenAICompatible(
  config: ProviderConfig,
  messages: LLMMessage[],
): Promise<LLMResponse> {
  const res = await fetch(config.baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      max_tokens: 1024,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`LLM API error (${res.status}): ${err}`);
  }

  const data = (await res.json()) as any;
  return { content: data.choices[0].message.content };
}

// Anthropic has a different format
async function callAnthropic(
  config: ProviderConfig,
  messages: LLMMessage[],
): Promise<LLMResponse> {
  const systemMsg = messages.find((m) => m.role === 'system');
  const nonSystemMsgs = messages.filter((m) => m.role !== 'system');

  const res = await fetch(config.baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: 1024,
      system: systemMsg?.content ?? '',
      messages: nonSystemMsgs,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Anthropic API error (${res.status}): ${err}`);
  }

  const data = (await res.json()) as any;
  return { content: data.content[0].text };
}

export async function callLLM(
  provider: Provider,
  apiKey: string,
  messages: LLMMessage[],
): Promise<LLMResponse> {
  const config: ProviderConfig = {
    ...PROVIDER_CONFIGS[provider],
    apiKey,
  };

  if (provider === 'anthropic') {
    return callAnthropic(config, messages);
  }

  return callOpenAICompatible(config, messages);
}
