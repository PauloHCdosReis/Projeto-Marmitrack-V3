import { ModeToggleAuth } from '@/components/themes/mode-theme-auth'
import { ReactNode } from 'react'

const LayoutPrivate = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-svh h-svh max-h-svh min-w-full w-full max-w-full overflow-hidden flex justify-center items-center relative">
      {children}
      <div className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 md:bottom-5 md:right-5 lg:bottom-8 lg:right-8">
        <ModeToggleAuth />
      </div>
    </div>
  )
}

export default LayoutPrivate
