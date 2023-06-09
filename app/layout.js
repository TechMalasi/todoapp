import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     <h1 className="mx-auto text-center my-4 p-2 text-2xl font-extrabold">Task List</h1>
      {children}</body>
    </html>
  )
}
