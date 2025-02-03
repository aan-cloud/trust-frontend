import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/pages/client/header';
import { Footer } from '@/components/pages/client/footer';
import { Toaster } from '@/components/ui/sonner';
import { AuthContextProvider } from '@/context/authContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--inter',
  subsets: ['latin'],
});

const poppin = Poppins({
  variable: '--poppins',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Trust',
  description: 'Trusted buying and selling of 100% original spare parts.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppin.variable} antialiased bg-muted flex flex-col min-h-screen`}
      >
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
        <Toaster className="font-sans" />
        <Footer />
      </body>
    </html>
  );
}
