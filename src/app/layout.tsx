import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
