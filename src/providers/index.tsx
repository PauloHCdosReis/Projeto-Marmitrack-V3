import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from './themeProvider'

export default function MainProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        position="top-right"
        expand={true}
        richColors={true}
        visibleToasts={5}
        closeButton={true}
      />
    </ThemeProvider>
  )
}
