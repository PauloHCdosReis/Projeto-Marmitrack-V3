import { ReactNode } from 'react'

const LayoutPrivate = async ({ children }: { children: ReactNode }) => {
  return <div className="min-h-svh h-svh max-h-svh">{children}</div>
}

export default LayoutPrivate
