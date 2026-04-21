import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { asyncStorage } from '@/lib/storage';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface ChatState {
  messages: ChatMessage[];
  isTyping: boolean;

  addMessage: (role: 'user' | 'assistant', content: string) => void;
  setTyping: (typing: boolean) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      isTyping: false,

      addMessage: (role, content) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
              role,
              content,
              timestamp: Date.now(),
            },
          ],
        })),

      setTyping: (isTyping) => set({ isTyping }),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'milli-chat',
      storage: createJSONStorage(() => asyncStorage),
      partialize: (state) => ({ messages: state.messages }),
    },
  ),
);
