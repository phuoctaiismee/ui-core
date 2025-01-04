import SiteLogo from "@/components/common/logo";
import ThemeSchema from "../themes/theme-schema";
import SiteNavigation from "../navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="sticky top-2 lg:top-5 z-40">
      <div className="container">
        <div className="bg-opacity-15 border rounded-2xl flex justify-between items-center p-2 bg-background/70 backdrop-blur-sm">
          <SiteLogo withText={true} />
          <SiteNavigation />
          <div className="hidden lg:flex items-center">
            <ThemeSchema />
            <Button
              variant="ghost"
              className="bg-gradient-to-b from-primary via-primary/50 to-primary ml-2 text-sm text-white hover:text-white"
              size="sm"
              asChild
            >
              <Link href="/docs">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
