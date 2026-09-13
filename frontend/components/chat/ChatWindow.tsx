"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { ChatMessage } from "@/types";
import { Message } from "./Message";
import { suggestedPrompts } from "@/lib/mock-data/chat";
import { sendMessage } from "@/lib/api/chat";

export function ChatWindow({
  initialMessages,
  subjectId,
}: {
  initialMessages: ChatMessage[];
  subjectId: string;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend(text: string) {
    if (!text.trim() || sending) return;
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
      createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setSending(true);
    const reply = await sendMessage(subjectId, text);
    setMessages((m) => [...m, reply]);
    setSending(false);
  }

  return (
    <div className="flex h-[calc(100vh-8.5rem)] flex-col rounded-md border border-line bg-surface md:h-[calc(100vh-9.5rem)]">
      <div className="flex-1 space-y-5 overflow-y-auto p-5">
        {messages.map((m) => (
          <Message key={m.id} message={m} />
        ))}
        {sending && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pl-10 text-xs text-ink-faint"
          >
            CuriousLLM is thinking...
          </motion.p>
        )}
        <div ref={endRef} />
      </div>

      {messages.length <= 2 && (
        <div className="flex flex-wrap gap-2 border-t border-line px-5 py-3">
          {suggestedPrompts.map((p) => (
            <button
              key={p}
              onClick={() => handleSend(p)}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft hover:border-ink/25 hover:text-ink"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <form
        className="flex items-center gap-2 border-t border-line p-3.5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about this subject..."
          className="flex-1 rounded border border-line bg-transparent px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-ink/30 focus:outline-none"
        />
        <button
          type="submit"
          disabled={sending}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-white hover:bg-navy-soft disabled:opacity-50"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
