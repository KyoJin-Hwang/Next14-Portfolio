import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Loading from '@/components/Loading/loading'

export const metadata: Metadata = {
  title: '황교진 포트폴리오 및 기술이력서',
  description:
    '2년차 프론트엔드 개발자 황교진입니다. 이 페이지는 포트폴리오 및 기술이력서를 담고있습니다.',
}

const pretendard = localFont({
  src: './font/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} bg-[#0064FF]`}>
        {/* <Loading /> */}
        {children}
      </body>
    </html>
  )
}
