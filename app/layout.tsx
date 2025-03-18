import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";

// Remove the dynamic font import and use system fonts instead
const fontClass = 'font-sans'; // Using system font stack from Tailwind

export const metadata: Metadata = {
  title: 'AI Text Generator',
  description: 'Text to Image and Text to Text Generator using OpenAI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontClass}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}