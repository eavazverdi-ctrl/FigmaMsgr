import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ChatListItemProps {
  name: string;
  message: string;
  time: string;
  avatar: string;
  isPinned?: boolean;
  unreadCount?: number;
  emoji?: string;
  isOnline?: boolean;
}

export function ChatListItem({
  name,
  message,
  time,
  avatar,
  isPinned,
  unreadCount,
  emoji,
  isOnline,
}: ChatListItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 hover:bg-blue-50/50 rounded-lg cursor-pointer transition-colors">
      <div className="relative">
        <Avatar className="w-12 h-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-gray-900">{name}</span>
            {emoji && <span>{emoji}</span>}
          </div>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-gray-600 truncate">{message}</p>
          {unreadCount && (
            <div className="flex-shrink-0 w-5 h-5 bg-[#49AAFF] rounded-full flex items-center justify-center ml-2">
              <span className="text-xs text-white">{unreadCount}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
