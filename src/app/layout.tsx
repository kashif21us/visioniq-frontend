import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "VisionIQ Enterprise",
  description: "AI Face Recognition Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      <Toaster richColors position="top-right" />
</body>
    </html>
  );
}
