import '../styles/globals.css';
import { Navigation } from "./cmp/Navigation"



export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
