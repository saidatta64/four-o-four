// app/layout.tsx
import { cookies } from "next/headers"
import { Nunito_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ThemeToggle from "@/components/ui/theme"
import "./globals.css"

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "700"] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieTheme = (await cookies()).get("theme")?.value as "light" | "dark" | "system" | undefined
  const initialTheme = cookieTheme ?? "system"

  let htmlClass: string | undefined = undefined;
  let htmlStyle: React.CSSProperties | undefined = undefined;
  if (initialTheme === "dark") {
    htmlClass = "dark";
    htmlStyle = { colorScheme: "dark" };
  } else if (initialTheme === "light") {
    htmlClass = "light";
    htmlStyle = { colorScheme: "light" };
  }

  return (
    <html
      lang="en"
      className={htmlClass}
      style={htmlStyle}
    >
      <head>
        <link rel="icon" href="/Favicon.png" type="image/x-icon" />

        {/* Inject script to apply system theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = (document.cookie.match(/(?:^|; )theme=([^;]+)/) || [])[1];
                  theme = theme ? decodeURIComponent(theme) : "system";
                  if (theme === "system") {
                    var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    if (isDark) {
                      document.documentElement.classList.add("dark");
                      document.documentElement.style.colorScheme = "dark";
                    } else {
                      document.documentElement.classList.remove("dark");
                      document.documentElement.style.colorScheme = "light";
                    }
                  } else if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                    document.documentElement.style.colorScheme = "dark";
                  } else {
                    document.documentElement.classList.remove("dark");
                    document.documentElement.style.colorScheme = "light";
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
        <Toaster position="top-right"/>
      </body>
    </html>
  )
}
