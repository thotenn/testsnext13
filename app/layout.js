import { Overpass } from '@next/font/google';
import '../styles/globals.css';
import { Navigation } from "./cmp/Navigation";


const fontOverpass = Overpass({
  weight: ['400', '700'],
  subsets: ['latin']
})


export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next</title>
      </head>
      <body className={fontOverpass.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
