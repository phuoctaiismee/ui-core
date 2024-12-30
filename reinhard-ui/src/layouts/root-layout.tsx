import { AppProvider } from "@/providers/app-provider";
import { IGlobalLayoutProps } from "@/types";

const GlobalRootLayout = ({ children }: IGlobalLayoutProps) => {
  return <AppProvider>{children}</AppProvider>;
};

export default GlobalRootLayout;
