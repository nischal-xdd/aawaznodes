import { Megaphone } from 'lucide-react'
import { ButtonLink } from '../ui/Button'

export default function AnnouncementBar() {
  return (
    <div className="relative bg-gradient-to-r from-orange/10 via-cyan/5 to-orange/10 border-b border-line overflow-hidden">
      <div className="container-site py-2.5 flex items-center justify-center gap-3 flex-wrap text-center">
        <span className="w-2 h-2 rounded-full bg-orange animate-pulse shrink-0" />
        <Megaphone size={14} className="text-orange shrink-0 hidden sm:block" />
        <strong className="text-xs sm:text-sm font-semibold text-text">
          Free Minecraft hosting is open
        </strong>
        <span className="text-xs text-muted hidden md:inline">
          Big upgrade: 4GB RAM, 125% CPU, five-hour AutoStop, stronger infrastructure.
        </span>
        <ButtonLink
          href="/start-free"
          variant="ghost"
          className="!text-xs !py-1 !px-3 !text-cyan hover:!text-cyan/80"
        >
          Create a free server
        </ButtonLink>
      </div>
    </div>
  )
}
