import { IGlobalLayoutProps } from "@/types";
import StoreProvider from "./store-provider";
import { ThemeProvider } from "./theme-provider";

export const AppProvider = ({ children }: IGlobalLayoutProps) => {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};
