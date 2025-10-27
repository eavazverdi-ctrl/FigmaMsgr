import { Copy, Forward, Reply, Trash2, MoreHorizontal } from "lucide-react";

interface MessageActionsProps {
  onClose: () => void;
}

export function MessageActions({ onClose }: MessageActionsProps) {
  const reactions = ["🔥", "🙌", "❤️", "😊", "😂", "👍"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-sm">
      {/* Reactions */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm">React</span>
        </div>
        <div className="flex gap-3 justify-around">
          {reactions.map((emoji, index) => (
            <button
              key={index}
              className="text-2xl hover:scale-125 transition-transform"
              onClick={onClose}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-1">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={onClose}
        >
          <Reply className="w-5 h-5 text-gray-700" />
          <span>Reply</span>
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={onClose}
        >
          <Forward className="w-5 h-5 text-gray-700" />
          <span>Forward</span>
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={onClose}
        >
          <Copy className="w-5 h-5 text-gray-700" />
          <span>Copy</span>
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-red-500"
          onClick={onClose}
        >
          <Trash2 className="w-5 h-5" />
          <span>Delete</span>
        </button>
        <button
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={onClose}
        >
          <MoreHorizontal className="w-5 h-5 text-gray-700" />
          <span>More...</span>
        </button>
      </div>
    </div>
  );
}
