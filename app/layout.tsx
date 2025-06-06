import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { dark } from '@clerk/themes'
import { Toaster } from 'sonner'






config.autoAddCss = false;
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "HyperMind student time managment app",
  description: "HyperMind is a comprehensive student time management app designed to help students optimize their productivity, prioritize tasks, and achieve their academic goals. With a user-friendly interface and robust features, HyperMind enables students to streamline their schedules, set reminders, and track their progress. By providing a centralized platform for managing time and tasks, HyperMind empowers students to take control of their academic lives, reduce stress, and improve their overall performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
        appearance={{
            baseTheme: dark,
        }}
    >
       <html lang="en" className={inter.className}>
          <body className="bg-gray-950 text-white antialiased">
            {children}
            <Toaster position="top-right" richColors />
          </body>
        </html>
    </ClerkProvider>
  );
}
