import { Space_Grotesk as spaceGrotesk, Pacifico as fPacifico } from "@next/font/google";


export const fontGrotesk = spaceGrotesk({
    weight: ['400', '700'],
    subsets: ['latin']
  })

export const fontPacifico = fPacifico({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-pacifico'
  });