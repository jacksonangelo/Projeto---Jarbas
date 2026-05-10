"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        "px-4 py-3 md:px-5"
      )}
    >
      <MessageCircle
        size={22}
        className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        fill="white"
        strokeWidth={1.5}
      />
      <span className="text-sm hidden sm:inline">Falar no WhatsApp</span>

      {/* Ping animation */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white/30" />
      </span>
    </a>
  );
}
