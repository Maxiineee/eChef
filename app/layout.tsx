import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils";
import { auth } from "@/lib/auth";
import { headers } from "next/headers"

import AppSidebar from "@/components/app-sidebar"


const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isAuthenticated = !!(await auth.api.getSession({ headers: await headers() }));
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", fontSans.variable)}
    >
      <body>
        <ThemeProvider forcedTheme="light" enableSystem={false}>
          <SidebarProvider>
            <TooltipProvider>
              <AppSidebar isAuthenticated={isAuthenticated} />
              <main className="w-full">
                {children}
              </main>
            </TooltipProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
