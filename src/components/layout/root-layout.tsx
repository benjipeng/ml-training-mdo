import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { ThemeProvider } from "../theme-provider";

export function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="blog-theme">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
