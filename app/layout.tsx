import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
       <ClerkProvider>

          <body
            className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
            >
            {children}
          </body>
        </ClerkProvider>
    </html>
  );
}
