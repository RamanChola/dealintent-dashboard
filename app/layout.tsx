import Navbar from './(components)/Navbar'
import './globals.css'
import { Nunito_Sans } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const nunito_Sans = Nunito_Sans({ subsets: ['latin'], variable: '--font-nunito' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito_Sans.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
