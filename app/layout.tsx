import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'QBIT CLOUD | 丘比特云 - 高性能云计算服务',
  description: '简约而富有设计感的IDC落地页，以樱花粉为主色调，提供高性能云计算服务。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-pink-200 selection:text-pink-900" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
