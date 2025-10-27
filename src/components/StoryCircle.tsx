import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface StoryCircleProps {
  name: string;
  avatar?: string;
  isAdd?: boolean;
  hasStory?: boolean;
  isViewed?: boolean;
}

export function StoryCircle({
  name,
  avatar,
  isAdd,
  hasStory,
  isViewed,
}: StoryCircleProps) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[64px]">
      <div
        className={`relative ${
          hasStory && !isViewed
            ? "p-[2px] bg-gradient-to-br from-[#49AAFF] to-[#2D608B] rounded-full"
            : ""
        } ${isViewed ? "p-[2px] bg-gray-300 rounded-full" : ""}`}
      >
        {isAdd ? (
          <div className="w-14 h-14 rounded-full bg-white border-2 border-dashed border-[#49AAFF] flex items-center justify-center">
            <svg
              className="w-6 h-6 text-[#49AAFF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        ) : (
          <Avatar className="w-14 h-14 border-2 border-white">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
        )}
      </div>
      <span className="text-xs text-center truncate w-full">{name}</span>
    </div>
  );
}
