interface MessageBubbleProps {
  text: string;
  isSent: boolean;
  time: string;
  showReactions?: boolean;
}

export function MessageBubble({
  text,
  isSent,
  time,
  showReactions,
}: MessageBubbleProps) {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div className="max-w-[75%]">
        <div
          className={`rounded-2xl px-4 py-3 ${
            isSent
              ? "bg-[#49AAFF] text-white rounded-br-sm"
              : "bg-gray-100 text-gray-900 rounded-bl-sm"
          }`}
        >
          <p>{text}</p>
        </div>
        <div className="flex items-center justify-between mt-1 px-2">
          <span className="text-xs text-gray-500">{time}</span>
          {isSent && showReactions && (
            <div className="flex items-center gap-1">
              <span className="text-sm">❤️</span>
              <span className="text-xs text-gray-500">1</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
