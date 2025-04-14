import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with ❤️ using Vite, React, Tailwind & shadcn/ui.
        </p>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-right">
          © {new Date().getFullYear()} My Elegant Blog. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
