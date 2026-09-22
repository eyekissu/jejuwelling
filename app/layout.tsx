import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jejuwelling — 자연스럽게 헤엄치는 물고기",
  description: "꼬리가 살랑이며 자연스럽게 헤엄치는 물고기 애니메이션",
}

export const viewport: Viewport = {
  themeColor: "#0a2a43",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
