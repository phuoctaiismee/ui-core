import { IGlobalLayoutProps } from "@/types";
import StoreProvider from "./store-provider";
import { ThemeProvider } from "./theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export const AppProvider = ({ children }: IGlobalLayoutProps) => {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
