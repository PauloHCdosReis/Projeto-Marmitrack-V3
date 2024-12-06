import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import MainProvider from '@/providers'

const UniviaProUltra = localFont({
  src: './fonts/UniviaPro-Ultra.ttf',
  variable: '--font-univiapro-ultra',
  weight: '700',
  fallback: ['sans-serif', 'Arial'],
  preload: true,
  display: 'swap',
})
const UniviaProBold = localFont({
  src: './fonts/UniviaPro-Bold.ttf',
  variable: '--font-univiapro-bold',
  weight: '700',
  fallback: ['sans-serif', 'Arial'],
  preload: true,
  display: 'swap',
})
const UniviaProRegular = localFont({
  src: './fonts/UniviaPro-Regular.ttf',
  variable: '--font-univiapro-regular',
  weight: '400',
  fallback: ['sans-serif', 'Arial'],
  preload: true,
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marmitrack',
  description: 'Peça sua marmita!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`bg-neutral-50 dark:bg-neutral-950 ${UniviaProUltra.variable} ${UniviaProRegular.variable} ${UniviaProBold.variable} antialiased`}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  )
}
