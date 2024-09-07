import { Settings } from 'lucide-react'
import { ModeToggle } from '~/components/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import Logo from '/Logo.png'

const Sidebar = () => {
  return (
    <div className="w-[20vw] bg-muted h-screen p-4 flex flex-col flex-shrink-0">
      <img src={Logo} className="w-2/3 mx-auto mb-8" />

      <div className="h-full space-y-1">
        <div className="p-2 pl-4 hover:bg-muted-foreground hover:text-background transition-colors rounded-lg cursor-pointer flex">
          Clients
        </div>
        <div className="p-2 pl-4 hover:bg-muted-foreground hover:text-background transition-colors rounded-lg cursor-pointer flex">
          Appointments
        </div>
        <div className="p-2 pl-4 hover:bg-muted-foreground hover:text-background transition-colors rounded-lg cursor-pointer flex">
          Todo
        </div>
        <div className="p-2 pl-4 hover:bg-muted-foreground hover:text-background transition-colors rounded-lg cursor-pointer flex">
          Document management
        </div>
        <div className="p-2 pl-4 hover:bg-muted-foreground hover:text-background transition-colors rounded-lg cursor-pointer flex">
          Tools
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div className="rounded-lg p-1 hover:bg-muted absolute top-2 right-2 transition-colors cursor-pointer">
              <Settings />
            </div>

            <div>
              <span className="block text-16 font-medium leading-3 mb-1">
                Luka Rakic
              </span>
              <span className="text-14 font-light text-slate-400">
                lukarakic@gmail.com
              </span>
            </div>
          </PopoverContent>
        </Popover>

        <ModeToggle />
      </div>
    </div>
  )
}

export default Sidebar
