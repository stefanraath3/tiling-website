"use client";

import { useState } from "react";
import { Phone, MessagesSquare, X } from "lucide-react";
import Link from "next/link";

// WhatsApp Logo Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.516z" />
  </svg>
);

export default function FloatingActionButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappNumber = "27677372646";
  const phoneNumber = "+27677372646";
  const whatsappMessage = encodeURIComponent(
    "Hi N&M Brothers, I'd like to get a quote for tiling work"
  );

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button - appears when expanded */}
      <div
        className={`transform transition-all duration-300 ${
          isExpanded
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-0 pointer-events-none"
        }`}
      >
        <Link
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
        </Link>
      </div>

      {/* Phone Button - appears when expanded */}
      <div
        className={`transform transition-all duration-300 ${
          isExpanded
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-0 pointer-events-none"
        }`}
      >
        <Link
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Call N&M Brothers Tiling"
        >
          <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
        </Link>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={toggleExpanded}
        className="flex items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label={isExpanded ? "Close contact menu" : "Open contact options"}
      >
        {isExpanded ? (
          <X className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        ) : (
          <MessagesSquare className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
        )}
      </button>

      {/* Backdrop - close when clicking outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
